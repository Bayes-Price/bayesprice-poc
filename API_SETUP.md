# Backend API Setup Guide

## 🚀 Complete Backend with Node.js, PostgreSQL & SendGrid

This guide will help you set up the complete backend infrastructure for form submissions.

## Prerequisites

- Node.js 18+ installed
- PostgreSQL installed and running
- SendGrid account with API key

## Step 1: Install PostgreSQL

### macOS (using Homebrew):
```bash
brew install postgresql@15
brew services start postgresql@15
```

### Create Database:
```bash
# Connect to PostgreSQL
psql postgres

# Create database
CREATE DATABASE bayesprice;

# Create user (optional)
CREATE USER bayesprice_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE bayesprice TO bayesprice_user;

# Exit
\q
```

## Step 2: Install API Dependencies

```bash
cd api
npm install
```

This will install:
- `express` - Web framework
- `pg` - PostgreSQL client
- `@sendgrid/mail` - SendGrid email service
- `cors` - CORS middleware
- `dotenv` - Environment variables
- `zod` - Schema validation
- `typescript` & `tsx` - TypeScript support

## Step 3: Configure Environment Variables

Create `.env` file in the `api` directory:

```bash
cp .env.example .env
```

Edit `.env` with your actual values:

```env
# Database Configuration
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/bayesprice

# SendGrid Configuration (get from https://app.sendgrid.com/settings/api_keys)
SENDGRID_API_KEY=SG.your_actual_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@bayesprice.com
SENDGRID_TO_EMAIL=info@bayesprice.com

# Server Configuration
PORT=3001
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

### Getting Your SendGrid API Key:

1. Go to https://app.sendgrid.com/
2. Navigate to Settings → API Keys
3. Click "Create API Key"
4. Choose "Full Access" or "Restricted Access" with Mail Send permissions
5. Copy the key (you'll only see it once!)
6. Paste it into your `.env` file

### Verify Sender Email:

SendGrid requires you to verify the sender email:
1. Go to Settings → Sender Authentication
2. Verify a Single Sender (easier for development)
3. Use the email you want to send from (e.g., noreply@bayesprice.com)
4. Check your email and click the verification link

## Step 4: Run Database Migration

```bash
cd api
npm run db:migrate
```

This creates the `discovery_submissions` table with the following schema:

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

## Step 5: Start the API Server

```bash
cd api
npm run dev
```

You should see:

```
╔═══════════════════════════════════════════╗
║                                           ║
║   🚀 Bayes Price API Server Running      ║
║                                           ║
║   Port: 3001                              ║
║   Environment: development                ║
║   Frontend: http://localhost:5173         ║
║                                           ║
╚═══════════════════════════════════════════╝
```

## Step 6: Configure Frontend

Create or update `.env` in the root directory:

```bash
# In the root directory (not api/)
echo "VITE_API_URL=http://localhost:3001" > .env
```

## Step 7: Test the Setup

### Test API Health:
```bash
curl http://localhost:3001/api/discovery/health
```

Expected response:
```json
{
  "status": "healthy",
  "database": "connected",
  "timestamp": "2025-11-24T12:00:00.000Z"
}
```

### Test Form Submission:
```bash
curl -X POST http://localhost:3001/api/discovery/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "message": "This is a test message"
  }'
```

## Running Both Frontend and Backend

### Terminal 1 - Frontend:
```bash
npm run dev
```

### Terminal 2 - API:
```bash
cd api
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/discovery/submit` | Submit discovery form |
| GET | `/api/discovery/submissions` | Get all submissions (admin) |
| GET | `/api/discovery/submissions/export` | Export submissions as CSV |
| GET | `/api/discovery/health` | Health check |

## What Happens When a Form is Submitted?

1. **Frontend** sends form data to `/api/discovery/submit`
2. **Backend** validates the data using Zod schema
3. **Database** stores the submission in PostgreSQL
4. **SendGrid** sends two emails:
   - **Admin notification** to `SENDGRID_TO_EMAIL` with submission details
   - **Confirmation email** to the user who submitted
5. **Response** sent back to frontend with success/error

## Email Templates

The system sends beautifully formatted HTML emails:

### Admin Notification Email:
- Subject: "🎯 New Discovery Session Request"
- Contains all form fields
- Styled with your brand colors
- Includes "Reply to [Name]" button

### User Confirmation Email:
- Subject: "Thank you for your discovery session request"
- Professional thank you message
- Information about next steps
- Links to your solutions

## Viewing Submissions

### In Database:
```bash
psql bayesprice
SELECT * FROM discovery_submissions ORDER BY submitted_at DESC;
```

### Via API:
```bash
curl http://localhost:3001/api/discovery/submissions
```

### Export as CSV:
Click the floating download button on `/discovery` page, or:
```bash
curl http://localhost:3001/api/discovery/submissions/export -o submissions.csv
```

## Production Deployment

### Environment Variables for Production:

```env
DATABASE_URL=your_production_database_url
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@bayesprice.com
SENDGRID_TO_EMAIL=info@bayesprice.com
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
```

### Build for Production:

```bash
cd api
npm run build
npm start
```

### Deployment Options:

1. **Vercel** (Recommended for Next.js/React apps)
   - Deploy frontend to Vercel
   - Use Vercel Serverless Functions for API
   - Use Vercel Postgres or external PostgreSQL

2. **Railway** (Easy full-stack deployment)
   - Supports PostgreSQL out of the box
   - Auto-deploys from Git
   - Simple environment variable management

3. **Heroku**
   - Add Heroku Postgres addon
   - Set environment variables in dashboard
   - Deploy via Git

4. **DigitalOcean App Platform**
   - Managed PostgreSQL database
   - Auto-scaling
   - Simple deployment

## Troubleshooting

### "Cannot connect to database"
- Check PostgreSQL is running: `brew services list`
- Verify DATABASE_URL is correct
- Test connection: `psql $DATABASE_URL`

### "SendGrid authentication failed"
- Verify API key is correct
- Check sender email is verified
- Ensure API key has Mail Send permissions

### "CORS error"
- Check FRONTEND_URL matches your frontend URL
- Verify frontend is using correct API_URL

### "Port already in use"
- Change PORT in `.env`
- Or kill process: `lsof -ti:3001 | xargs kill`

## Security Notes

⚠️ **Important for Production:**

1. **Add Authentication** to admin endpoints:
   - `/api/discovery/submissions`
   - `/api/discovery/submissions/export`

2. **Rate Limiting** to prevent spam:
   ```bash
   npm install express-rate-limit
   ```

3. **Input Sanitization** (already using Zod validation)

4. **HTTPS Only** in production

5. **Environment Variables** - Never commit `.env` to Git

## Support

If you encounter issues:
1. Check the console logs in both frontend and API
2. Verify all environment variables are set
3. Test each component individually (DB, SendGrid, API)
4. Check the troubleshooting section above

## Next Steps

- [ ] Set up production database
- [ ] Configure production SendGrid settings
- [ ] Add authentication to admin endpoints
- [ ] Set up monitoring/logging
- [ ] Configure backup strategy for database
- [ ] Add rate limiting
- [ ] Set up SSL certificates

---

**Created by:** Bayes Price Development Team  
**Last Updated:** 2025-11-24
