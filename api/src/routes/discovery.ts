import { Router, Request, Response } from 'express';
import pool from '../db/connection.js';
import { DiscoverySubmissionSchema, type DiscoverySubmissionRecord } from '../types/submission.js';
import { sendDiscoveryNotification, sendConfirmationEmail } from '../services/email.js';
import { createDiscoveryIssue } from '../services/github.js';

const router = Router();

// Submit discovery form
router.post('/submit', async (req: Request, res: Response): Promise<void> => {
    try {
        // Validate request body
        const validationResult = DiscoverySubmissionSchema.safeParse(req.body);

        if (!validationResult.success) {
            res.status(400).json({
                error: 'Validation failed',
                details: validationResult.error.errors,
            });
            return;
        }

        const data = validationResult.data;
        const ipAddress = req.ip || req.socket.remoteAddress;
        const userAgent = req.get('user-agent');

        // Insert into database
        const query = `
      INSERT INTO discovery_submissions (name, email, company, message, ip_address, user_agent)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;

        const values = [
            data.name,
            data.email,
            data.company || null,
            data.message || null,
            ipAddress,
            userAgent,
        ];

        const result = await pool.query<DiscoverySubmissionRecord>(query, values);
        const submission = result.rows[0];

        // Send emails asynchronously (don't wait for them)
        const emailData = {
            name: submission.name,
            email: submission.email,
            company: submission.company || '',
            message: submission.message || '',
            submittedAt: submission.submitted_at.toLocaleString(),
        };

        // Send notification to admin
        sendDiscoveryNotification(emailData).catch(err => {
            console.error('Failed to send admin notification:', err);
        });

        // Send confirmation to user
        sendConfirmationEmail(emailData).catch(err => {
            console.error('Failed to send confirmation email:', err);
        });

        // Create GitHub issue for tracking
        createDiscoveryIssue(emailData).catch(err => {
            console.error('Failed to create GitHub issue:', err);
        });

        res.status(201).json({
            success: true,
            message: 'Discovery session request submitted successfully',
            data: {
                id: submission.id,
                submitted_at: submission.submitted_at,
            },
        });
    } catch (error) {
        console.error('Error submitting discovery form:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'Failed to submit discovery session request',
        });
    }
});

// Get all submissions (admin endpoint - should add authentication in production)
router.get('/submissions', async (req: Request, res: Response): Promise<void> => {
    try {
        const query = `
      SELECT id, name, email, company, message, submitted_at
      FROM discovery_submissions
      ORDER BY submitted_at DESC
    `;

        const result = await pool.query<DiscoverySubmissionRecord>(query);

        res.json({
            success: true,
            count: result.rows.length,
            data: result.rows,
        });
    } catch (error) {
        console.error('Error fetching submissions:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'Failed to fetch submissions',
        });
    }
});

// Export submissions as CSV (admin endpoint)
router.get('/submissions/export', async (req: Request, res: Response): Promise<void> => {
    try {
        const query = `
      SELECT name, email, company, message, submitted_at
      FROM discovery_submissions
      ORDER BY submitted_at DESC
    `;

        const result = await pool.query<DiscoverySubmissionRecord>(query);

        // Generate CSV
        const headers = ['Name', 'Email', 'Company', 'Message', 'Submitted At'];
        const rows = result.rows.map(row => [
            `"${(row.name || '').replace(/"/g, '""')}"`,
            `"${(row.email || '').replace(/"/g, '""')}"`,
            `"${(row.company || '').replace(/"/g, '""')}"`,
            `"${(row.message || '').replace(/"/g, '""')}"`,
            `"${row.submitted_at.toISOString()}"`,
        ]);

        const csv = [
            headers.join(','),
            ...rows.map(row => row.join(',')),
        ].join('\n');

        // Set headers for file download
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename="discovery_submissions_${new Date().toISOString().split('T')[0]}.csv"`);
        res.send(csv);
    } catch (error) {
        console.error('Error exporting submissions:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'Failed to export submissions',
        });
    }
});

// Health check
router.get('/health', async (req: Request, res: Response): Promise<void> => {
    try {
        await pool.query('SELECT 1');
        res.json({
            status: 'healthy',
            database: 'connected',
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        res.status(503).json({
            status: 'unhealthy',
            database: 'disconnected',
            timestamp: new Date().toISOString(),
        });
    }
});

export default router;
