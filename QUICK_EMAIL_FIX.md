# 🚨 Production Email Fix - Quick Guide

## Problem
Your contact form shows: **"Email configuration error. Please contact directly via email."**

## Root Cause
The `GMAIL_APP_PASSWORD` environment variable is missing from your Netlify deployment.

## Quick Fix (5 minutes)

### 1️⃣ Generate Gmail App Password

```
1. Visit: https://myaccount.google.com/security
2. Enable "2-Step Verification" (if not enabled)
3. Click "App passwords" (or search for it)
4. Select: Mail → Other (Custom name) → "Netlify Contact Form"
5. Click Generate
6. COPY the 16-character password (format: xxxx xxxx xxxx xxxx)
```

### 2️⃣ Add to Netlify

```
1. Go to: https://app.netlify.com/
2. Select your website project
3. Click: Site configuration → Environment variables
4. Click: Add a variable
5. Enter:
   Key: GMAIL_APP_PASSWORD
   Value: (paste the 16-character password, no spaces)
   Scopes: ✓ Production ✓ Deploy previews
6. Click: Create variable
```

### 3️⃣ Redeploy Site

```
1. Go to: Deploys tab
2. Click: Trigger deploy → Clear cache and deploy site
3. Wait 2-3 minutes for deployment
```

### 4️⃣ Test

```
1. Visit your live website
2. Fill out the contact form
3. Submit
4. Check ranveerwork007@gmail.com for the email
```

## Expected Result

✅ Contact form submits successfully
✅ Email arrives in ranveerwork007@gmail.com
✅ No more error messages

## Still Not Working?

Check these:
- [ ] App Password has no spaces when entered
- [ ] Environment variable name is exactly `GMAIL_APP_PASSWORD`
- [ ] New deployment was triggered after adding variable
- [ ] 2-Step Verification is enabled on Gmail account

## Alternative Solutions

If Gmail doesn't work:

**Option 1: Use Netlify Forms (Easiest)**
- No email configuration needed
- Forms submitted to Netlify dashboard
- Can forward to email

**Option 2: Use SendGrid (Free 100 emails/day)**
- Sign up at sendgrid.com
- Get API key
- Update Netlify function

**Option 3: Use Resend (Free 100 emails/day)**
- Sign up at resend.com
- Get API key
- Update Netlify function

## Contact Information

Until fixed, users can contact directly:
- 📧 Email: ranveerwork007@gmail.com
- 📱 Phone: +91 80917 83736
- 📍 Location: Chandigarh, India

---

**Need detailed instructions?** See `EMAIL_FIX_GUIDE.md`
