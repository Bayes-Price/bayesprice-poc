import { Router, Request, Response } from 'express'
import { z } from 'zod'
import { createContactIssue } from '../services/github.js'
import { sendContactNotification, sendContactConfirmationEmail } from '../services/email.js'

const router = Router()

// Contact form validation schema
const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  service: z.string().max(200).optional(),
  message: z.string().min(1, 'Message is required').max(5000),
})

// Submit contact form
router.post('/submit', async (req: Request, res: Response): Promise<void> => {
  try {
    // Validate request body
    const validationResult = ContactFormSchema.safeParse(req.body)

    if (!validationResult.success) {
      res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validationResult.error.errors,
      })
      return
    }

    const data = validationResult.data
    const submittedAt = new Date().toLocaleString()

    // Create GitHub issue for tracking (non-blocking)
    createContactIssue({
      name: data.name,
      email: data.email,
      service: data.service,
      message: data.message,
      submittedAt,
    }).catch(err => {
      console.error('Failed to create GitHub issue:', err)
    })

    // Send email notifications
    const emailData = {
      name: data.name,
      email: data.email,
      service: data.service,
      message: data.message,
      submittedAt,
    }

    // Send notification to Bayes Price team
    await sendContactNotification(emailData)

    // Send confirmation email to the user
    await sendContactConfirmationEmail(emailData)

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        submitted_at: submittedAt,
      },
    })
  } catch (error) {
    console.error('Error submitting contact form:', error)
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Failed to submit contact form',
    })
  }
})

export default router
