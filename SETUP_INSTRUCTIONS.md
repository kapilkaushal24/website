# CI/CD Pipeline Setup Instructions

This document provides instructions for setting up the CI/CD pipeline for your Next.js project deployed on Netlify.

## Overview

The CI/CD pipeline includes:
- ✅ Continuous Integration (Build, Lint, Type Check)
- 🚀 Automatic deployment to Netlify on push to main
- 🔍 Preview deployments for Pull Requests
- 🔒 Dependency security reviews
- 📊 Lighthouse performance testing
- 🤖 Automated dependency updates with Dependabot

## GitHub Workflows

### 1. **CI Workflow** (`ci.yml`)
- Runs on every push and PR to main/develop branches
- Performs linting, type checking, and builds the project
- Uploads build artifacts for review

### 2. **Deploy to Netlify** (`deploy-netlify.yml`)
- Automatically deploys to Netlify when code is pushed to main
- Requires Netlify credentials (see setup below)

### 3. **Preview Deployment** (`preview-deploy.yml`)
- Creates preview deployments for Pull Requests
- Adds deployment URL as a comment on the PR

### 4. **Lighthouse CI** (`lighthouse.yml`)
- Runs performance, accessibility, and SEO audits
- Provides insights into site quality

### 5. **Dependency Review** (`dependency-review.yml`)
- Reviews dependency changes in PRs
- Alerts on security vulnerabilities

### 6. **Code Quality** (`code-quality.yml`)
- Checks code quality and formatting
- Analyzes bundle size

## Setup Instructions

### Step 1: Get Netlify Credentials

1. Log in to your [Netlify account](https://app.netlify.com/)
2. Go to **User Settings** → **Applications** → **Personal Access Tokens**
3. Click **New access token** and create a token (save it securely)
4. Go to your site's **Site Settings** → **General** → **Site details**
5. Copy your **Site ID** (also called API ID)

### Step 2: Add GitHub Secrets

1. Go to your GitHub repository: https://github.com/kapilkaushal24/website
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following:

   - **Name:** `NETLIFY_AUTH_TOKEN`  
     **Value:** Your Netlify Personal Access Token from Step 1
   
   - **Name:** `NETLIFY_SITE_ID`  
     **Value:** Your Netlify Site ID from Step 1

### Step 3: Install Netlify Next.js Plugin

Run this command in your terminal:

```bash
pnpm add -D @netlify/plugin-nextjs
```

### Step 4: Push Changes to GitHub

Commit and push the new workflow files:

```bash
git add .
git commit -m "ci: Add CI/CD pipeline with GitHub Actions"
git push origin main
```

### Step 5: Verify Workflows

1. Go to your GitHub repository
2. Click on the **Actions** tab
3. You should see the workflows running
4. Check that they complete successfully

## Configuration Files

### `netlify.toml`
- Configures Netlify build settings
- Sets up redirects for Next.js routing
- Configures security headers
- Enables caching for static assets

### `.github/dependabot.yml`
- Automatically creates PRs for dependency updates
- Runs weekly for npm packages
- Runs monthly for GitHub Actions

## Workflow Triggers

| Workflow | Trigger |
|----------|---------|
| CI | Push/PR to main or develop |
| Deploy to Netlify | Push to main |
| Preview Deployment | Pull Request to main |
| Lighthouse CI | Push/PR to main, or manual |
| Dependency Review | Pull Request to main |
| Code Quality | Push/PR to main or develop |

## Environment Variables (if needed)

If your application requires environment variables:

1. Add them to your Netlify site settings
2. Add them to GitHub Secrets (for builds in Actions)
3. Reference them in the workflow files under `env:`

Example:
```yaml
env:
  NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
```

## Troubleshooting

### Build Failures
- Check the Actions logs in GitHub for detailed error messages
- Ensure all dependencies are correctly listed in `package.json`
- Verify Node.js version compatibility (currently set to v20)

### Deployment Failures
- Verify Netlify credentials are correctly set in GitHub Secrets
- Check Netlify deployment logs in your Netlify dashboard
- Ensure the build output directory is correct (`.next`)

### Preview Deployments Not Working
- Ensure Netlify credentials have appropriate permissions
- Check that the PR is targeting the main branch

## Additional Features

### Manual Deployment Trigger
You can manually trigger deployments:
1. Go to **Actions** tab in GitHub
2. Select **Deploy to Netlify** workflow
3. Click **Run workflow**

### Pull Request Template
A PR template is included to standardize Pull Request descriptions.

## Maintenance

- Review Dependabot PRs weekly
- Monitor workflow run times and optimize if needed
- Update Node.js version in workflows as needed
- Review and update Lighthouse budgets periodically

## Support

For issues or questions:
- Check GitHub Actions logs
- Review Netlify deployment logs
- Consult [Next.js documentation](https://nextjs.org/docs)
- Consult [Netlify documentation](https://docs.netlify.com/)

---

**Note:** The current configuration has `continue-on-error: true` for linting and type checking to allow builds to proceed even with warnings. Remove this in production for stricter quality control.
