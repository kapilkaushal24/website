# CI/CD Pipeline 🚀

## Quick Start

### 1. Add GitHub Secrets

Go to: `https://github.com/kapilkaushal24/website/settings/secrets/actions`

Add these secrets:
- `NETLIFY_AUTH_TOKEN` - Your Netlify personal access token
- `NETLIFY_SITE_ID` - Your Netlify site ID

### 2. Install Netlify Plugin

```bash
pnpm add -D @netlify/plugin-nextjs
```

### 3. Push to GitHub

```bash
git add .
git commit -m "ci: Setup CI/CD pipeline"
git push origin main
```

## What's Included

✅ **6 GitHub Actions Workflows**
- Automated builds and tests
- Netlify deployment on push to main
- Preview deployments for PRs
- Lighthouse performance testing
- Dependency security scanning
- Code quality checks

✅ **Netlify Configuration** (`netlify.toml`)
- Optimized build settings
- Security headers
- Caching strategy
- Function routing

✅ **Dependabot** - Automated dependency updates

✅ **PR Template** - Standardized pull request format

## Workflows Overview

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| CI | Push/PR | Lint, type-check, build |
| Deploy | Push to main | Production deployment |
| Preview | Pull Request | Preview deployment |
| Lighthouse | Push/PR/Manual | Performance audit |
| Dependency Review | Pull Request | Security check |
| Code Quality | Push/PR | Code analysis |

## Next Steps

See `SETUP_INSTRUCTIONS.md` for detailed setup guide.
