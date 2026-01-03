# Deploy Everything on Vercel (Serverless Functions)

If you want to host EVERYTHING on Vercel (frontend + backend), you'll need to convert the Express backend to Vercel serverless functions.

## Steps to Convert to Vercel Serverless

### 1. Install Additional Dependencies

```bash
npm install @vercel/node
```

### 2. Create API Directory Structure

Create this structure:
```
api/
├── email/
│   ├── newsletter.ts
│   └── contact.ts
└── (backend code stays in server/ folder for local dev)
```

### 3. Create Serverless Function Files

**File: `api/email/newsletter.ts`**
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { EmailService } from '../../server/services/emailService';
import { verifyEmailConfig } from '../../server/config/emailConfig';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    // Verify email configuration
    const isConfigValid = await verifyEmailConfig();
    if (!isConfigValid) {
      return res.status(500).json({
        success: false,
        message: 'Email service is not configured properly',
      });
    }

    // Send emails
    await Promise.all([
      EmailService.sendNewsletterConfirmation({ email }),
      EmailService.notifyNewsletterSubscription({ email }),
    ]);

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to subscribe. Please try again later.',
    });
  }
}
```

**File: `api/email/contact.ts`**
```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { EmailService } from '../../server/services/emailService';
import { verifyEmailConfig } from '../../server/config/emailConfig';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

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

    // Verify email configuration
    const isConfigValid = await verifyEmailConfig();
    if (!isConfigValid) {
      return res.status(500).json({
        success: false,
        message: 'Email service is not configured properly',
      });
    }

    const formData = { name, email, phone, subject, message };

    // Send emails
    await Promise.all([
      EmailService.sendContactConfirmation(formData),
      EmailService.notifyContactSubmission(formData),
    ]);

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
}
```

### 4. Update vercel.json

```json
{
  "buildCommand": "npm install && npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/api/email/newsletter",
      "destination": "/api/email/newsletter"
    },
    {
      "source": "/api/email/contact",
      "destination": "/api/email/contact"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 5. Update Frontend API URL

**File: `src/api/emailApi.ts`**

Change:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
```

To:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
```

This way:
- **Production**: Uses `/api` (same domain, serverless functions)
- **Local Dev**: Can set `VITE_API_URL=http://localhost:3001/api` in `.env`

### 6. Add Environment Variables in Vercel

In Vercel Dashboard → Project Settings → Environment Variables, add:

```
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password
COMPANY_EMAIL=starmslogistics@gmail.com
```

### 7. Deploy

```bash
vercel --prod
```

## Local Development with Vercel Functions

To test serverless functions locally:

```bash
# Install Vercel CLI
npm i -g vercel

# Run Vercel dev server
vercel dev
```

This will:
- Start frontend on `localhost:3000`
- Simulate serverless functions
- Hot reload on changes

## Pros & Cons of Vercel Serverless

### ✅ Pros
- Everything on one platform
- One deployment
- Automatic HTTPS
- Global CDN
- No separate backend costs

### ❌ Cons
- More complex setup
- Cold starts (first request slower)
- 10-second execution limit (should be fine for emails)
- Harder to debug
- Need to duplicate code (Express routes + serverless functions)

## Recommendation

For your use case, I still recommend **Option 1** (Split Deployment):
- Frontend on Vercel
- Backend on Railway/Render

**Why?**
1. **No code restructuring needed** - works immediately
2. **Better for long-running tasks** - no serverless timeouts
3. **Easier debugging** - traditional server logs
4. **More flexible** - can add more backend features easily
5. **Railway/Render free tiers** - essentially free

But if you absolutely must have everything on Vercel, follow the steps above!

---

## Questions?

See `DEPLOYMENT.md` for the recommended split deployment approach, or let me know if you need help with the Vercel serverless conversion!



