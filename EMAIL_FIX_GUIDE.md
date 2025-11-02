# Email Configuration Fix Guide

## Issue
The contact form shows "Email configuration error. Please contact directly via email." because the Gmail App Password environment variable is not configured in Netlify.

## Solution Steps

### Step 1: Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Enable **2-Step Verification** if not already enabled
4. Go back to Security and click on **App passwords** (or search for it)
5. Select **Mail** and **Other (Custom name)**
6. Enter "Netlify Website Contact Form"
7. Click **Generate**
8. **Copy the 16-character password** (save it securely)

### Step 2: Add Environment Variable to Netlify

#### Option A: Via Netlify Dashboard (Recommended)

1. Go to your Netlify site: https://app.netlify.com/
2. Select your website project
3. Click on **Site configuration** → **Environment variables**
4. Click **Add a variable** → **Add a single variable**
5. Add the following:
   - **Key:** `GMAIL_APP_PASSWORD`
   - **Value:** (paste the 16-character password from Step 1)
   - **Scopes:** Check both "Production" and "Deploy previews"
6. Click **Create variable**
7. Click **Deploy** → **Trigger deploy** → **Clear cache and deploy site**

#### Option B: Via Netlify CLI

```bash
# Install Netlify CLI if not already installed
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link your project
netlify link

# Add environment variable
netlify env:set GMAIL_APP_PASSWORD "your-16-character-app-password"

# Redeploy
netlify deploy --prod
```

### Step 3: Verify Configuration

1. Wait for the deployment to complete (2-3 minutes)
2. Test your contact form on the live site
3. Check if emails are being sent successfully

## Alternative: Use a Different Email Service

If you prefer not to use Gmail, you can switch to:

### Option 1: SendGrid (Free tier: 100 emails/day)
```typescript
// Install: pnpm add @sendgrid/mail
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
```

### Option 2: Resend (Free tier: 100 emails/day)
```typescript
// Install: pnpm add resend
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
```

### Option 3: Netlify Forms (No code needed)
Convert to a native Netlify form (simpler but less customizable)

## Important Gmail Notes

⚠️ **Security Best Practices:**
- Never commit the App Password to git
- Use App Passwords (not your regular Gmail password)
- Rotate App Passwords periodically
- Revoke unused App Passwords

⚠️ **Gmail Sending Limits:**
- Free Gmail accounts: ~500 emails/day
- Google Workspace: ~2000 emails/day

## Troubleshooting

### Error: "Invalid login"
- Verify the App Password is correct (16 characters, no spaces)
- Ensure 2-Step Verification is enabled
- Try generating a new App Password

### Error: "ECONNREFUSED"
- Check your internet connection
- Verify Gmail SMTP isn't blocked by firewall
- Try using port 587 instead of 465

### Still Not Working?
1. Check Netlify Function logs: Site → Functions → sendEmail
2. Verify the environment variable is set correctly
3. Ensure you triggered a new deployment after adding the variable

## Quick Fix Checklist

- [ ] Generated Gmail App Password
- [ ] Added `GMAIL_APP_PASSWORD` to Netlify environment variables
- [ ] Triggered a new deployment with cache clear
- [ ] Tested contact form on live site
- [ ] Verified email received in ranveerwork007@gmail.com

---

**Need immediate help?** 
Contact directly: ranveerwork007@gmail.com or +91 80917 83736
