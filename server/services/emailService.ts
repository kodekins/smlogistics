import { transporter, COMPANY_EMAIL, COMPANY_NAME } from '../config/emailConfig';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface NewsletterData {
  email: string;
}

export class EmailService {
  // Send newsletter subscription confirmation to user
  static async sendNewsletterConfirmation(data: NewsletterData) {
    const mailOptions = {
      from: `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`,
      to: data.email,
      subject: 'Welcome to Star MS Logistics Newsletter!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a5490; color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; background-color: #f9f9f9; }
            .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
            .button { display: inline-block; padding: 12px 30px; background-color: #1a5490; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to ${COMPANY_NAME}!</h1>
            </div>
            <div class="content">
              <h2>Thank You for Subscribing!</h2>
              <p>We're excited to have you join our newsletter community. You'll now receive:</p>
              <ul>
                <li>Latest updates on logistics and freight services</li>
                <li>Industry news and insights</li>
                <li>Special offers and promotions</li>
                <li>Tips for efficient shipping solutions</li>
              </ul>
              <p>Stay tuned for our next newsletter packed with valuable content!</p>
              <a href="https://starmslogistics.com" class="button">Visit Our Website</a>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.</p>
              <p>280 Granite Run Drive Suite Hobert, LA 90010, USA</p>
              <p>Phone: +92 331 343 5042</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Newsletter confirmation sent:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('Error sending newsletter confirmation:', error);
      throw error;
    }
  }

  // Notify company about new newsletter subscription
  static async notifyNewsletterSubscription(data: NewsletterData) {
    const mailOptions = {
      from: `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`,
      to: COMPANY_EMAIL,
      subject: 'New Newsletter Subscription',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #28a745; color: white; padding: 20px; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .info-row { padding: 10px; border-bottom: 1px solid #ddd; }
            .label { font-weight: bold; color: #1a5490; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 New Newsletter Subscription</h2>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Email:</span> ${data.email}
              </div>
              <div class="info-row">
                <span class="label">Date:</span> ${new Date().toLocaleString()}
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Company notification sent:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('Error sending company notification:', error);
      throw error;
    }
  }

  // Send contact form confirmation to user
  static async sendContactConfirmation(data: ContactFormData) {
    const mailOptions = {
      from: `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`,
      to: data.email,
      subject: 'We Received Your Message - Star MS Logistics',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a5490; color: white; padding: 30px; text-align: center; }
            .content { padding: 30px; background-color: #f9f9f9; }
            .message-box { background-color: white; padding: 20px; margin: 20px 0; border-left: 4px solid #1a5490; }
            .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Us!</h1>
            </div>
            <div class="content">
              <p>Dear ${data.name},</p>
              <p>We have received your message and our team will get back to you within 24 hours.</p>
              
              <div class="message-box">
                <h3>Your Message Summary:</h3>
                <p><strong>Subject:</strong> ${data.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message}</p>
              </div>

              <p>If you need immediate assistance, please call us at:</p>
              <p><strong>Phone:</strong> +92 331 343 5042</p>
              <p><strong>Email:</strong> starmslogistics@gmail.com</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.</p>
              <p>280 Granite Run Drive Suite Hobert, LA 90010, USA</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Contact confirmation sent:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('Error sending contact confirmation:', error);
      throw error;
    }
  }

  // Notify company about new contact form submission
  static async notifyContactSubmission(data: ContactFormData) {
    const mailOptions = {
      from: `"${COMPANY_NAME}" <${COMPANY_EMAIL}>`,
      to: COMPANY_EMAIL,
      subject: `New Contact Form Submission - ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #dc3545; color: white; padding: 20px; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .info-row { padding: 10px; border-bottom: 1px solid #ddd; }
            .label { font-weight: bold; color: #1a5490; }
            .message-box { background-color: white; padding: 15px; margin-top: 15px; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📞 New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Name:</span> ${data.name}
              </div>
              <div class="info-row">
                <span class="label">Email:</span> ${data.email}
              </div>
              <div class="info-row">
                <span class="label">Phone:</span> ${data.phone}
              </div>
              <div class="info-row">
                <span class="label">Subject:</span> ${data.subject}
              </div>
              <div class="info-row">
                <span class="label">Date:</span> ${new Date().toLocaleString()}
              </div>
              <div class="message-box">
                <h3>Message:</h3>
                <p>${data.message}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: data.email,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Company notification sent:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('Error sending company notification:', error);
      throw error;
    }
  }
}



