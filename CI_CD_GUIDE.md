# 🚀 CI/CD Pipeline - Complete Setup Guide

## ✅ What Has Been Created

### GitHub Actions Workflows (`.github/workflows/`)
1. **ci.yml** - Continuous Integration
   - Runs linting and type checking
   - Builds the project
   - Stores build artifacts

2. **deploy-netlify.yml** - Production Deployment
   - Automatically deploys to Netlify on push to `main`
   - Adds deployment status comments

3. **preview-deploy.yml** - Preview Deployments
   - Creates preview deployments for Pull Requests
   - Adds preview URL to PR comments

4. **lighthouse.yml** - Performance Monitoring
   - Runs Lighthouse performance audits
   - Checks accessibility, SEO, and best practices

5. **dependency-review.yml** - Security Checks
   - Reviews dependency changes in PRs
   - Identifies security vulnerabilities

6. **code-quality.yml** - Code Quality
   - Checks code formatting
   - Analyzes bundle size

### Configuration Files
- **netlify.toml** - Netlify build and deployment configuration
- **.github/dependabot.yml** - Automated dependency updates
- **.github/PULL_REQUEST_TEMPLATE.md** - PR template

### Documentation
- **SETUP_INSTRUCTIONS.md** - Detailed setup guide
- **.github/README.md** - Quick reference

## 🔧 Setup Required (4 Steps)

### Step 1: Get Netlify Credentials

1. Go to [Netlify](https://app.netlify.com/)
2. Navigate to: **User Settings** → **Applications** → **Personal Access Tokens**
3. Create a new token and save it
4. Go to your site's **Site Settings** → **General**
5. Copy your **Site ID** (API ID)

### Step 2: Add GitHub Secrets

1. Go to: https://github.com/kapilkaushal24/website/settings/secrets/actions
2. Click "New repository secret"
3. Add these two secrets:

```
Name: NETLIFY_AUTH_TOKEN
Value: <your-netlify-token-from-step-1>

Name: NETLIFY_SITE_ID
Value: <your-netlify-site-id-from-step-1>
```

### Step 3: Configure Email (IMPORTANT - Fixes Contact Form)

1. Generate Gmail App Password:
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification
   - Generate App Password for "Mail"
   - Copy the 16-character password

2. Add to Netlify:
   - Go to Netlify → Your Site → Site configuration → Environment variables
   - Add variable: `GMAIL_APP_PASSWORD` = (your app password)
   - Set scopes: Production + Deploy previews
   - Save

**📖 See `EMAIL_FIX_GUIDE.md` for detailed instructions**

### Step 4: Push to GitHub

```bash
git add .
git commit -m "ci: Add complete CI/CD pipeline with GitHub Actions and Netlify"
git push origin main
```

## 🎯 What Happens Next

Once you push to GitHub:

1. **Automatic Build** - CI workflow runs automatically
2. **Deployment** - Site deploys to Netlify
3. **Status Updates** - Deployment status appears in GitHub
4. **Future PRs** - Preview deployments for all PRs
5. **Weekly Updates** - Dependabot checks for updates

## 📊 Pipeline Features

### On Every Push to Main
- ✅ Lint and type check code
- ✅ Build the project
- ✅ Deploy to Netlify production
- ✅ Run Lighthouse audits

### On Every Pull Request
- ✅ Run all checks
- ✅ Create preview deployment
- ✅ Review dependency changes
- ✅ Check code quality
- ✅ Comment with preview URL

### Automated Maintenance
- 🤖 Weekly dependency updates
- 🔒 Security vulnerability scanning
- 📈 Performance monitoring

## 🔍 Monitoring Your Pipeline

### View Workflow Runs
https://github.com/kapilkaushal24/website/actions

### View Netlify Deployments
https://app.netlify.com/sites/[your-site-name]/deploys

## 🛠️ Customization

### Change Node Version
Edit all workflow files, change:
```yaml
node-version: '20'
```

### Add Environment Variables
In each workflow file, add under the build step:
```yaml
env:
  NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
```

### Disable Specific Workflows
Remove or rename the workflow file you don't want.

## 📝 Best Practices

1. **Always create PRs** for new features (gets preview deployment)
2. **Review Dependabot PRs** regularly
3. **Check Action logs** if builds fail
4. **Monitor Lighthouse scores** for performance

## 🆘 Troubleshooting

### Build Fails
- Check Actions tab for error logs
- Verify all dependencies are in package.json
- Ensure pnpm-lock.yaml is committed

### Deployment Fails
- Verify GitHub secrets are correctly set
- Check Netlify dashboard for deployment logs
- Ensure NETLIFY_SITE_ID matches your site

### Preview Not Appearing
- Check that secrets are set at repository level (not environment)
- Ensure PR targets the `main` branch

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

## ✨ Ready to Deploy!

Your CI/CD pipeline is now configured. Complete the 3 setup steps above and push to GitHub to activate it.

---

**Questions?** Check `SETUP_INSTRUCTIONS.md` for more details.
