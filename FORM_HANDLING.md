# Form Submission Handling

## Overview
The Discovery Landing page now captures form submissions and provides CSV export functionality.

## Features

### 1. **Automatic Data Capture**
- All form submissions are automatically saved to browser localStorage
- Data persists across page refreshes
- Each submission includes a timestamp

### 2. **CSV Export**
- Click the floating download button (bottom-right corner) to export all submissions as CSV
- CSV includes: Name, Email, Company, Message, and Timestamp
- File is automatically named with the current date

### 3. **Email Notification**
- When a form is submitted, your default email client opens with pre-filled details
- Email is addressed to: `info@bayesprice.com`
- Contains all form submission details

## How to Use

### For Users (Submitting the Form)
1. Fill out the discovery session form
2. Click "Request Discovery Session"
3. Form data is saved and an email notification opens
4. Success message appears

### For Admins (Exporting Data)
1. Visit the `/discovery` page
2. Look for the blue floating button in the bottom-right corner
3. Click to download all submissions as a CSV file
4. Open the CSV in Excel, Google Sheets, or any spreadsheet application

## Data Storage

**Current Implementation:** Browser localStorage
- Data is stored locally in the user's browser
- Persists across sessions
- Limited to ~5-10MB (browser dependent)

## Future Enhancements

### Option 1: EmailJS Integration
For automatic email sending without opening the mail client:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install the package:
   ```bash
   npm install @emailjs/browser
   ```
3. Uncomment the EmailJS code in `/src/lib/formHandler.ts`
4. Add your EmailJS credentials

### Option 2: Backend API
For production use, consider implementing a proper backend:

1. **Vercel/Netlify Serverless Functions**
   - Create an API endpoint to handle form submissions
   - Store in a database (PostgreSQL, MongoDB, etc.)
   - Send emails via SendGrid, Mailgun, or similar

2. **Google Sheets Integration**
   - Use Google Sheets API to append rows
   - Free and simple for small volumes
   - Easy to share with team members

3. **Formspree/Form.io**
   - Third-party form handling services
   - No backend code required
   - Free tiers available

## Files Modified

- `/src/pages/DiscoveryLanding.tsx` - Updated form submission handler
- `/src/lib/formHandler.ts` - New utility for form data management

## Email Configuration

To change the recipient email address, edit line 46 in `/src/pages/DiscoveryLanding.tsx`:

```typescript
window.open(`mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`, '_blank');
```

## Security Notes

⚠️ **Current Limitations:**
- Data is stored in browser localStorage (client-side only)
- No server-side validation
- No spam protection
- Email opens in user's client (not automatic)

For production, implement:
- Server-side validation
- CAPTCHA/reCAPTCHA
- Rate limiting
- Proper database storage
- Automated email sending
