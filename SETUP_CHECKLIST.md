# Email Setup Checklist

Use this checklist to set up your email system step by step.

## ☐ Phase 1: Gmail Configuration (5 minutes)

- [ ] Go to https://myaccount.google.com/security
- [ ] Enable 2-Step Verification (if not already enabled)
- [ ] Navigate to App Passwords section
- [ ] Create new App Password for "Mail"
- [ ] Copy the 16-character password (keep it safe!)

## ☐ Phase 2: Environment Configuration (2 minutes)

- [ ] Open terminal in project directory
- [ ] Run: `cp .env.example .env`
- [ ] Open `.env` file in text editor
- [ ] Replace `your-email@gmail.com` with your Gmail address
- [ ] Replace `your-gmail-app-password` with the App Password you copied
- [ ] Update `COMPANY_EMAIL` if different from default
- [ ] Save the `.env` file

## ☐ Phase 3: Test the Application (5 minutes)

### Start Servers

- [ ] Open Terminal 1 and run: `npm run dev`
- [ ] Wait for "Local: http://localhost:5173" message
- [ ] Open Terminal 2 and run: `npm run server:dev`
- [ ] Wait for "Server is running on port 3001" message
- [ ] Confirm "Email server is ready to send messages" appears

### Test Newsletter Subscription

- [ ] Open browser to http://localhost:5173
- [ ] Scroll to footer
- [ ] Enter your email address
- [ ] Click "Subscribe" button
- [ ] Confirm success message appears
- [ ] Check your email inbox (and spam folder)
- [ ] Confirm you received welcome email
- [ ] Check company email for notification

### Test Contact Form

- [ ] Go to http://localhost:5173/contact
- [ ] Fill in all form fields:
  - [ ] Name
  - [ ] Email
  - [ ] Phone
  - [ ] Subject (select from dropdown)
  - [ ] Message
- [ ] Click "Submit Now"
- [ ] Confirm success message appears
- [ ] Check your email for confirmation
- [ ] Check company email for notification with details

## ☐ Phase 4: Verify Everything Works

- [ ] Newsletter emails are being received
- [ ] Contact form emails are being received
- [ ] Company is receiving notifications
- [ ] No errors in browser console (F12)
- [ ] No errors in backend terminal

## ✅ Success Criteria

You should have received:
- ✅ Newsletter confirmation email (beautifully formatted)
- ✅ Contact form confirmation email (with your message)
- ✅ Company notification for newsletter signup
- ✅ Company notification for contact form submission

## 🆘 If Something Doesn't Work

### Backend Won't Start
- Check if port 3001 is in use
- Change PORT in `.env` to 3002
- Restart backend server

### Emails Not Sending
1. Check backend terminal for errors
2. Verify `.env` credentials are correct
3. Make sure App Password has no spaces
4. Confirm 2-Step Verification is enabled

### Frontend Can't Connect
1. Ensure backend is running (Terminal 2)
2. Check browser console for errors
3. Verify both servers are running

### Still Having Issues?
- Read `EMAIL_SETUP.md` for detailed troubleshooting
- Check browser Network tab (F12) for failed requests
- Review backend terminal logs for specific errors

## 📚 Reference Documents

- **QUICKSTART.md** - Fast setup guide
- **EMAIL_SETUP.md** - Detailed documentation
- **IMPLEMENTATION_SUMMARY.md** - What was implemented
- **README.md** - Project overview

## 🎉 Once Everything Works

Your email system is ready! All newsletter subscriptions and contact form submissions will automatically:
1. Send confirmation emails to users
2. Send notifications to company email
3. Display success messages in the UI

You can now customize:
- Email templates in `server/services/emailService.ts`
- Form designs in the React components
- Company information in email footers

---

**Need Help?** Contact: starmslogistics@gmail.com





