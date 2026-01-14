# Email Integration Documentation

This project includes a complete email integration system using Nodemailer with Gmail for handling newsletter subscriptions and contact form submissions.

## 🚀 Features

- **Newsletter Subscription**: Users can subscribe to your newsletter from footer forms
- **Contact Form**: Full contact form with email notifications
- **Dual Email System**: 
  - Confirmation emails sent to users
  - Notification emails sent to company email
- **Beautiful HTML Templates**: Professional email templates with company branding
- **Error Handling**: Comprehensive error handling and user feedback
- **Loading States**: User-friendly loading states during form submissions

## 📋 Prerequisites

Before setting up the email system, you need:

1. **Gmail Account**: You'll use this to send emails
2. **Gmail App Password**: Required for secure authentication

### How to Generate Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** 
3. Enable **2-Step Verification** (if not already enabled)
4. Once 2-Step Verification is enabled, go back to Security
5. Under "How you sign in to Google", click on **App passwords**
6. Select "Mail" as the app and "Other" as the device
7. Enter a name (e.g., "Star MS Logistics")
8. Click **Generate**
9. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

## ⚙️ Setup Instructions

### 1. Install Dependencies

All dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### 2. Configure Environment Variables

1. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

2. Open `.env` and fill in your credentials:

```env
# Gmail credentials
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password

# Company email (where notifications will be sent)
COMPANY_EMAIL=starmslogistics@gmail.com

# Server configuration
PORT=3001
```

**Important:**
- Replace `your-email@gmail.com` with your Gmail address
- Replace `your-gmail-app-password` with the App Password you generated
- Update `COMPANY_EMAIL` with the email where you want to receive notifications

### 3. Configure Frontend API URL (Optional)

If your backend runs on a different port or domain, create a `.env` file in the root:

```env
VITE_API_URL=http://localhost:3001/api
```

For production, update this to your production API URL.

## 🏃 Running the Application

### Development Mode

You need to run both the frontend and backend servers:

**Terminal 1 - Frontend (Vite):**
```bash
npm run dev
```

**Terminal 2 - Backend (Email Server):**
```bash
npm run server:dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)
The backend will run on `http://localhost:3001`

### Production Mode

For production, you'll need to:

1. Build the frontend:
```bash
npm run build
```

2. Deploy the backend separately (e.g., on Heroku, Railway, or your own server)

3. Update the `VITE_API_URL` environment variable to point to your production API

## 📁 Project Structure

```
logistiq/
├── server/                          # Backend server
│   ├── config/
│   │   └── emailConfig.ts          # Email configuration
│   ├── routes/
│   │   └── emailRoutes.ts          # API endpoints
│   ├── services/
│   │   └── emailService.ts         # Email sending logic
│   └── index.ts                     # Server entry point
│
├── src/
│   ├── api/
│   │   └── emailApi.ts             # Frontend API client
│   ├── components/
│   │   ├── Footer/                 # Footer components with newsletter
│   │   │   ├── FooterStyleOne.tsx
│   │   │   ├── FooterStyleTwo.tsx
│   │   │   └── FooterStyleThree.tsx
│   │   └── Header/
│   │       └── Sidebar.tsx         # Sidebar with quick quote form
│   └── section/
│       └── contact/
│           └── ContactMain.tsx     # Main contact form
│
├── .env                            # Environment variables (create this)
├── .env.example                    # Environment template
└── EMAIL_SETUP.md                  # This file
```

## 🔌 API Endpoints

### POST `/api/email/newsletter`

Subscribe to newsletter

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter!"
}
```

### POST `/api/email/contact`

Submit contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "General Inquiry",
  "message": "I would like to know more about your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

## 📧 Email Templates

The system sends the following emails:

### Newsletter Subscription
1. **User Email**: Welcome email with subscription confirmation
2. **Company Email**: Notification about new subscriber

### Contact Form
1. **User Email**: Acknowledgment with message summary
2. **Company Email**: Full contact form details with reply-to address

## 🎨 Customization

### Email Templates

Edit email HTML in `server/services/emailService.ts`:
- `sendNewsletterConfirmation()` - Welcome email to subscribers
- `notifyNewsletterSubscription()` - Company notification for new subscriber
- `sendContactConfirmation()` - Acknowledgment to user
- `notifyContactSubmission()` - Company notification for contact form

### Styling

Email templates use inline CSS for maximum compatibility. Modify the `<style>` tags in each email function.

### Company Information

Update company details in:
- `server/config/emailConfig.ts` - Email configuration
- Email templates - Contact information in footers

## 🐛 Troubleshooting

### "Email service is not configured properly"

**Problem**: Backend cannot connect to Gmail.

**Solutions**:
1. Verify your Gmail credentials in `.env`
2. Make sure you're using an App Password, not your regular Gmail password
3. Check that 2-Step Verification is enabled on your Google account
4. Verify the App Password has no spaces when pasted

### "Failed to subscribe/send message"

**Problem**: Request not reaching backend.

**Solutions**:
1. Ensure backend server is running (`npm run server:dev`)
2. Check console for CORS errors
3. Verify `VITE_API_URL` matches your backend URL
4. Check browser network tab for failed requests

### Emails not being received

**Problem**: Emails are "sent" but not received.

**Solutions**:
1. Check spam/junk folders
2. Verify email addresses are correct
3. Check Gmail "Sent" folder to confirm emails were actually sent
4. Review backend console logs for errors

### Port already in use

**Problem**: `Error: listen EADDRINUSE: address already in use :::3001`

**Solutions**:
1. Stop any other process using port 3001
2. Change `PORT` in `.env` to a different number (e.g., 3002)
3. Update frontend `VITE_API_URL` if you change the port

## 🔒 Security Best Practices

1. **Never commit `.env` file**: It contains sensitive credentials
2. **Use App Passwords**: Never use your main Gmail password
3. **Rotate passwords**: Change App Password periodically
4. **Production**: Use environment variables on your hosting platform
5. **Rate Limiting**: Consider adding rate limiting for production (not included)

## 📝 Testing

### Test Newsletter Subscription

1. Go to any page with a footer (home page)
2. Enter your email in the newsletter subscription form
3. Click Subscribe
4. Check:
   - Success message appears on page
   - Confirmation email received
   - Notification email sent to company email

### Test Contact Form

1. Go to `/contact` page
2. Fill out the form completely
3. Click Submit Now
4. Check:
   - Success message appears
   - Confirmation email received
   - Notification email sent to company email with all details

## 🚀 Deployment

### Backend Deployment Options

1. **Railway**: Easy deployment with environment variables
2. **Heroku**: Traditional platform-as-a-service
3. **DigitalOcean**: VPS option for more control
4. **Vercel**: Can host Node.js APIs (limited)

### Deployment Steps

1. Choose a hosting platform
2. Set up environment variables in platform dashboard
3. Deploy backend code
4. Update `VITE_API_URL` in frontend `.env`
5. Build and deploy frontend

## 📞 Support

For issues or questions:
- Email: starmslogistics@gmail.com
- Phone: +92 331 343 5042

## 📄 License

Copyright 2025 Star MS Logistics. All Rights Reserved.





