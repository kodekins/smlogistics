import express, { Request, Response } from 'express';
import { EmailService } from '../services/emailService';
import { verifyEmailConfig } from '../config/emailConfig';

const router = express.Router();

// Newsletter subscription endpoint
router.post('/newsletter', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    // Verify email configuration first
    const isConfigValid = await verifyEmailConfig();
    if (!isConfigValid) {
      return res.status(500).json({
        success: false,
        message: 'Email service is not configured properly',
      });
    }

    // Send emails in parallel
    await Promise.all([
      EmailService.sendNewsletterConfirmation({ email }),
      EmailService.notifyNewsletterSubscription({ email }),
    ]);

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe. Please try again later.',
    });
  }
});

// Contact form submission endpoint
router.post('/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Validate email format
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    // Verify email configuration first
    const isConfigValid = await verifyEmailConfig();
    if (!isConfigValid) {
      return res.status(500).json({
        success: false,
        message: 'Email service is not configured properly',
      });
    }

    const formData = { name, email, phone, subject, message };

    // Send emails in parallel
    await Promise.all([
      EmailService.sendContactConfirmation(formData),
      EmailService.notifyContactSubmission(formData),
    ]);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
});

export default router;


