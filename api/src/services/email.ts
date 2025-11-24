import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
  name: string;
  email: string;
  company: string;
  message: string;
  submittedAt: string;
}

export async function sendDiscoveryNotification(data: EmailData): Promise<void> {
  // Resend requires a verified domain or you can use 'onboarding@resend.dev' for testing
  // If you haven't verified 'bayesprice.com' on Resend yet, use the testing email
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.RESEND_TO_EMAIL || 'info@bayesprice.com';

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: '🎯 New Discovery Session Request',
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      padding: 30px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #f9fafb;
      padding: 30px;
      border-radius: 0 0 8px 8px;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-weight: 600;
      color: #1e3a8a;
      display: block;
      margin-bottom: 5px;
    }
    .value {
      background: white;
      padding: 12px;
      border-radius: 4px;
      border-left: 3px solid #fbbf24;
    }
    .message-box {
      background: white;
      padding: 15px;
      border-radius: 4px;
      border-left: 3px solid #fbbf24;
      white-space: pre-wrap;
      min-height: 60px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      color: #6b7280;
      font-size: 14px;
    }
    .cta-button {
      display: inline-block;
      background: #fbbf24;
      color: #1e3a8a;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎯 New Discovery Session Request</h1>
  </div>
  
  <div class="content">
    <div class="field">
      <span class="label">Name</span>
      <div class="value">${data.name}</div>
    </div>
    
    <div class="field">
      <span class="label">Email</span>
      <div class="value">
        <a href="mailto:${data.email}" style="color: #1e3a8a; text-decoration: none;">
          ${data.email}
        </a>
      </div>
    </div>
    
    <div class="field">
      <span class="label">Company</span>
      <div class="value">${data.company || 'Not provided'}</div>
    </div>
    
    <div class="field">
      <span class="label">Message</span>
      <div class="message-box">${data.message || 'No message provided'}</div>
    </div>
    
    <div class="field">
      <span class="label">Submitted</span>
      <div class="value">${data.submittedAt}</div>
    </div>
    
    <div style="text-align: center;">
      <a href="mailto:${data.email}" class="cta-button">Reply to ${data.name}</a>
    </div>
  </div>
  
  <div class="footer">
    <p>This is an automated notification from the Bayes Price website.</p>
  </div>
</body>
</html>
      `
    });

    if (error) {
      console.error('❌ Error sending email via Resend:', error);
      throw error;
    }

    console.log(`✅ Email sent successfully to ${toEmail}`);
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw error;
  }
}

export async function sendConfirmationEmail(data: EmailData): Promise<void> {
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: 'Thank you for your discovery session request',
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      padding: 30px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .content {
      background: #f9fafb;
      padding: 30px;
      border-radius: 0 0 8px 8px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      color: #6b7280;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Thank You!</h1>
  </div>
  
  <div class="content">
    <p>Hi ${data.name},</p>
    
    <p>Thank you for requesting a discovery session with <strong>Bayes Price</strong>!</p>
    
    <p>We've received your request and will be in touch within <strong>24 hours</strong> to schedule your session.</p>
    
    <p>In the meantime, feel free to explore our solutions:</p>
    <ul>
      <li><strong>Platinum:</strong> AI-driven automated analysis</li>
      <li><strong>Ruby:</strong> Award-winning survey data processing</li>
      <li><strong>Services:</strong> Expert consulting and support</li>
    </ul>
    
    <p>Best regards,<br>The Bayes Price Team</p>
  </div>
  
  <div class="footer">
    <p><strong>Bayes Price</strong><br>
    Transform Data into Action<br>
    <a href="https://www.bayesprice.com" style="color: #1e3a8a;">www.bayesprice.com</a></p>
  </div>
</body>
</html>
      `
    });

    if (error) {
      console.error('❌ Error sending confirmation email via Resend:', error);
      // Don't throw - confirmation email failure shouldn't break the submission
      return;
    }

    console.log(`✅ Confirmation email sent to ${data.email}`);
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error);
  }
}
