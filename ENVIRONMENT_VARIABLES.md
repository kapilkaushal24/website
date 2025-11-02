# Environment Variables Setup

## Required Environment Variables

### For Netlify Deployment (via GitHub Secrets)
These should be set in GitHub repository secrets:

```
NETLIFY_AUTH_TOKEN=<your-netlify-personal-access-token>
NETLIFY_SITE_ID=<your-netlify-site-id>
```

### For Email Functionality (via Netlify Dashboard)
These should be set in Netlify site environment variables:

```
GMAIL_APP_PASSWORD=<your-gmail-app-password>
```

## How to Set Up

### 1. GitHub Secrets (for CI/CD)
1. Go to: https://github.com/kapilkaushal24/website/settings/secrets/actions
2. Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`

### 2. Netlify Environment Variables (for email)
1. Go to: https://app.netlify.com/ → Your Site → Site configuration → Environment variables
2. Add `GMAIL_APP_PASSWORD`
3. Set scopes: Production and Deploy previews
4. Trigger a new deployment

## Getting the Values

### NETLIFY_AUTH_TOKEN
1. Go to: https://app.netlify.com/user/applications
2. Click "New access token"
3. Copy the token

### NETLIFY_SITE_ID
1. Go to your site in Netlify
2. Site configuration → General → Site details
3. Copy the "API ID" (this is your Site ID)

### GMAIL_APP_PASSWORD
See `EMAIL_FIX_GUIDE.md` for detailed instructions on generating a Gmail App Password.

## Verification

After setting all variables:
1. Push a commit to trigger GitHub Actions
2. Check that deployment succeeds
3. Test the contact form on your live site
4. Verify emails are received

## Security Notes

⚠️ Never commit these values to git
⚠️ Never share these values publicly
⚠️ Rotate tokens/passwords periodically
⚠️ Use the principle of least privilege

## Environment Variable Checklist

- [ ] `NETLIFY_AUTH_TOKEN` set in GitHub Secrets
- [ ] `NETLIFY_SITE_ID` set in GitHub Secrets
- [ ] `GMAIL_APP_PASSWORD` set in Netlify Dashboard
- [ ] Triggered new deployment after adding variables
- [ ] Tested all functionality on production
