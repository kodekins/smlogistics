import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter using Gmail
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_APP_PASSWORD, // Your Gmail App Password
  },
});

// Verify transporter configuration
export const verifyEmailConfig = async () => {
  try {
    await transporter.verify();
    console.log('Email server is ready to send messages');
    return true;
  } catch (error) {
    console.error('Error with email configuration:', error);
    return false;
  }
};

// Company email configuration
export const COMPANY_EMAIL = process.env.COMPANY_EMAIL || 'starmslogistics@gmail.com';
export const COMPANY_NAME = 'Star MS Logistics';



