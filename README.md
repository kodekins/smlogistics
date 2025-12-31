# Star MS Logistics - Professional Freight Brokerage Platform

Star MS Logistics is a professional freight brokerage platform built with React and Vite. We provide reliable and transparent shipping solutions across the United States.

## 🚚 About Us

Star MS Logistics didn't begin as a company — it began as a **vision**. A vision to build a freight service where every customer feels valued, every shipment is handled with care, and every promise is truly honored.

### Our Mission
**Delivering the Trust** - We are committed to providing efficient, reliable, and cost-effective shipping solutions tailored to your needs.

## 🚚 Features

- **International Shipping** - Global freight forwarding and customs clearance
- **Ground Transportation** - Full truckload (FTL) and less-than-truckload (LTL) services
- **Ocean Freight** - Container shipping and port-to-port logistics
- **Rail Freight** - Efficient rail transportation for bulk cargo
- **Warehouse Management** - Storage and distribution facilities
- **Emergency Transport** - 24/7 expedited shipping services
- **Real-time Tracking** - GPS tracking for all shipments
- **Customer Portal** - Order management and shipment tracking

## 🛠️ Tech Stack

- **React 18.3** - Modern UI library
- **Vite 7.1** - Next generation frontend tooling
- **React Router 7.9** - Client-side routing
- **Swiper** - Modern touch slider
- **GSAP** - Professional-grade animation
- **TypeScript** - Type-safe development
- **Express** - Backend server
- **Nodemailer** - Email service integration

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x or higher
- npm or yarn package manager
- Gmail account with App Password (for email functionality)

### Installation

```bash
# Install dependencies
npm install

# Configure email settings (see EMAIL_SETUP.md for detailed instructions)
cp .env.example .env
# Edit .env and add your Gmail credentials

# Start development servers
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend (Email Server)
npm run server:dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Email Setup

This application includes a complete email integration for:
- Newsletter subscriptions
- Contact form submissions
- Automated email notifications

**📧 For detailed email setup instructions, see [EMAIL_SETUP.md](./EMAIL_SETUP.md)**

## 📦 Project Structure

```
star-ms-logistics/
├── server/                          # Backend server
│   ├── config/
│   │   └── emailConfig.ts          # Email configuration
│   ├── routes/
│   │   └── emailRoutes.ts          # API endpoints
│   ├── services/
│   │   └── emailService.ts         # Email service
│   └── index.ts                     # Server entry point
├── src/
│   ├── api/                        # API clients
│   ├── components/                 # Reusable UI components
│   ├── pages/                      # Page components
│   ├── section/                    # Section components for pages
│   ├── assets/                     # Images, fonts, and styles
│   ├── layouts/                    # Layout components
│   └── lib/                        # Utility functions and hooks
├── public/                         # Static assets
├── .env.example                    # Environment template
├── EMAIL_SETUP.md                  # Email setup guide
└── package.json                    # Project dependencies
```

## 🌐 Available Pages

- Home (3 variations)
- About Us
- Services Overview
- Individual Service Pages (7 services)
- Projects & Case Studies
- Team Members
- Pricing Plans
- FAQ
- Blog & News
- Contact

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Key Features

- Modern and clean design
- Smooth animations and transitions
- SEO optimized
- Fast loading times
- Cross-browser compatibility
- Accessible UI components
- **Newsletter subscription system**
- **Contact form with email notifications**
- **Automated email responses**

## 📄 License

Copyright 2025 Star MS Logistics. All Rights Reserved.

## 🤝 Support

For support and inquiries:
- Email: support@starmslogistics.com
- Phone: +880 123 456 789
- Address: 3060 Commercial Street Road, Fratton, Birmingham, AL 35020

---

Built with ❤️ for the logistics industry
