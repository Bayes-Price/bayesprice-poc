import { z } from 'zod';

export const DiscoverySubmissionSchema = z.object({
    name: z.string().min(1, 'Name is required').max(255),
    email: z.string().email('Invalid email address').max(255),
    company: z.string().max(255).optional(),
    message: z.string().optional(),
});

export type DiscoverySubmission = z.infer<typeof DiscoverySubmissionSchema>;

export interface DiscoverySubmissionRecord extends DiscoverySubmission {
    id: number;
    submitted_at: Date;
    ip_address?: string;
    user_agent?: string;
    created_at: Date;
    updated_at: Date;
}
