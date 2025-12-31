# Quick Start Guide - Email Setup

## Step 1: Get Your Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not enabled)
3. Click on **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

## Step 2: Configure Environment

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit `.env` file and add your credentials:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_APP_PASSWORD=your-16-char-app-password
COMPANY_EMAIL=starmslogistics@gmail.com
PORT=3001
```

## Step 3: Run the Application

Open **two terminals**:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server:dev
```

## Step 4: Test the Email System

### Test Newsletter Subscription:
1. Open http://localhost:5173 in your browser
2. Scroll to the footer
3. Enter your email and click "Subscribe"
4. Check your email for confirmation

### Test Contact Form:
1. Go to http://localhost:5173/contact
2. Fill out the form
3. Click "Submit Now"
4. Check your email for confirmation

## Troubleshooting

### "Email service is not configured properly"
- Check your `.env` file has correct credentials
- Make sure you're using App Password, not your regular password
- Ensure 2-Step Verification is enabled

### Backend not running
- Make sure port 3001 is not in use
- Run `npm run server:dev` in a separate terminal

## Need More Help?

See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed documentation.


