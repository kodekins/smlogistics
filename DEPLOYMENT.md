# Deployment Guide - Split Architecture

## Option 1: Frontend on Vercel + Backend on Railway (Recommended)

This is the easiest approach with your current code structure.

### Part A: Deploy Backend to Railway

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Deploy Backend**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect Node.js

3. **Configure Environment Variables**
   In Railway dashboard, add:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_APP_PASSWORD=your-app-password
   COMPANY_EMAIL=starmslogistics@gmail.com
   PORT=3001
   ```

4. **Configure Start Command**
   In Railway settings, set:
   ```
   npm run server
   ```

5. **Get Your Backend URL**
   - Railway will give you a URL like: `https://your-app.railway.app`
   - Copy this URL

### Part B: Deploy Frontend to Vercel

1. **Update Environment Variable**
   Create `.env.production` in your project root:
   ```
   VITE_API_URL=https://your-app.railway.app/api
   ```

2. **Deploy to Vercel**
   ```bash
   # Install Vercel CLI (if not installed)
   npm i -g vercel

   # Deploy
   vercel
   ```

3. **Add Environment Variable in Vercel Dashboard**
   - Go to your project settings
   - Add environment variable:
     - Name: `VITE_API_URL`
     - Value: `https://your-app.railway.app/api`

4. **Redeploy**
   ```bash
   vercel --prod
   ```

### Testing

- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-app.railway.app`
- Test newsletter and contact forms

---

## Option 2: Everything on Vercel (Serverless Functions)

If you want everything on Vercel, you'll need to convert the Express backend to Vercel serverless functions.

### Steps Required:

1. **Restructure Backend**
   Move server code to `api/` directory with specific structure

2. **Convert to Serverless**
   Each route becomes a separate serverless function

3. **Update Configuration**
   Modify `vercel.json`

**This is more complex.** Let me know if you want detailed instructions for this approach.

---

## Option 3: Backend on Render.com (Alternative to Railway)

Similar to Railway, also has free tier:

1. Go to https://render.com
2. Create "Web Service"
3. Connect GitHub repo
4. Set build command: `npm install`
5. Set start command: `npm run server`
6. Add environment variables
7. Get URL and use in Vercel frontend

---

## Recommended: Railway + Vercel

**Why?**
- ✅ No code changes needed
- ✅ Free tiers available
- ✅ Easy to set up
- ✅ Scales automatically
- ✅ Separate concerns (frontend/backend)

**Costs:**
- Vercel: Free (hobby plan)
- Railway: $5/month after free trial (500 hours free execution)
- Alternative: Render.com has permanent free tier for backend

---

## Quick Commands Reference

### Deploy Backend to Railway:
```bash
# Railway auto-deploys from GitHub
# Just connect your repo and it handles everything
```

### Deploy Frontend to Vercel:
```bash
vercel --prod
```

That's it! Your email system will work perfectly across both platforms.



