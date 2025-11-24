# Bayes Price API

Backend API for handling discovery form submissions with PostgreSQL database and SendGrid email integration.

## Quick Start

From the project root:

```bash
./setup-api.sh
```

Then follow the instructions to complete setup.

## Manual Setup

See [API_SETUP.md](../API_SETUP.md) in the project root for detailed instructions.

## Development

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm start        # Start production server
npm run db:migrate  # Run database migrations
```

## Project Structure

```
api/
├── src/
│   ├── db/
│   │   ├── connection.ts    # PostgreSQL connection pool
│   │   └── migrate.ts       # Database migrations
│   ├── routes/
│   │   └── discovery.ts     # Discovery form endpoints
│   ├── services/
│   │   └── email.ts         # SendGrid email service
│   ├── types/
│   │   └── submission.ts    # TypeScript types
│   └── server.ts            # Express server setup
├── package.json
├── tsconfig.json
└── .env                     # Environment variables (create from .env.example)
```

## API Endpoints

### POST /api/discovery/submit
Submit a discovery form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "message": "Interested in Platinum solution"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Discovery session request submitted successfully",
  "data": {
    "id": 1,
    "submitted_at": "2025-11-24T12:00:00.000Z"
  }
}
```

### GET /api/discovery/submissions
Get all submissions (admin endpoint)

**Response:**
```json
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

### GET /api/discovery/submissions/export
Export submissions as CSV file

### GET /api/discovery/health
Health check endpoint

**Response:**
```json
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2025-11-24T12:00:00.000Z"
}
```

## Environment Variables

Required environment variables (see `.env.example`):

- `DATABASE_URL` - PostgreSQL connection string
- `SENDGRID_API_KEY` - SendGrid API key
- `SENDGRID_FROM_EMAIL` - Verified sender email
- `SENDGRID_TO_EMAIL` - Email to receive notifications
- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS

## Email Notifications

When a form is submitted, two emails are sent:

1. **Admin Notification** - Sent to `SENDGRID_TO_EMAIL` with all submission details
2. **User Confirmation** - Sent to the submitter confirming receipt

Both emails use professionally designed HTML templates with your brand colors.

## Database Schema

```sql
CREATE TABLE discovery_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Security

⚠️ **For Production:**
- Add authentication to admin endpoints
- Implement rate limiting
- Use HTTPS only
- Set up proper CORS policies
- Never commit `.env` to version control

## License

Proprietary - Bayes Price
