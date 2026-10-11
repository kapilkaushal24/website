# Ranveer Kaushal Portfolio

A single-page portfolio for video editing and VFX work, built with Next.js and deployed on Netlify.

## Stack

- Next.js 14 App Router, React 18, and TypeScript
- Tailwind CSS 4, with theme tokens in `app/globals.css`
- Radix UI-based components in `components/ui/` and Lucide icons
- Netlify Functions for contact-form email delivery
- pnpm is used by the Netlify and GitHub Actions configuration

## Run Locally

Use Node.js 20 and pnpm 8, matching the deployment configuration.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`. To test the Netlify contact function locally, run the site through Netlify CLI (`netlify dev`) and provide `GMAIL_APP_PASSWORD` in the local environment. `pnpm dev` alone starts Next.js and does not serve Netlify Functions.

Useful project commands:

```bash
pnpm build
pnpm lint
pnpm exec tsc --noEmit
```

There is no test script configured in `package.json`. The current CI workflow treats lint and type-check failures as non-blocking, and `next.config.mjs` also allows builds to continue despite ESLint or TypeScript errors. Check those results separately; a successful build alone does not establish that they pass.

## Project Map

- `app/page.tsx` composes the home page from the portfolio sections.
- `app/layout.tsx` defines page metadata and the root document; `app/ClientLayout.tsx` sets up theme support and analytics.
- `components/` contains the page sections: hero, portfolio, services, about, testimonials, contact, navigation, and footer.
- `components/ui/` contains shared UI primitives; `lib/utils.ts` exports the `cn` class-merging helper.
- `app/globals.css` is the active global stylesheet and defines Tailwind theme tokens and utilities. `styles/globals.css` is a separate legacy stylesheet.
- `public/` contains images used by the page.
- `netlify/functions/sendEmail.js` sends contact submissions through Gmail SMTP. `components/contact.tsx` posts to `/.netlify/functions/sendEmail`; `app/api/contact/route.tsx` is a commented-out older implementation.
- `netlify.toml` configures the Netlify build, function directory, redirects, headers, and local development command.

The page navigation and footer use section IDs such as `hero`, `portfolio`, `services`, `about`, `testimonials`, and `contact`; preserve these IDs when changing section markup.

## Contact Email Configuration

Set `GMAIL_APP_PASSWORD` in the Netlify environment for the function to authenticate with Gmail. Never commit the value or place it in documentation. The contact form requires name, email, project type, and message; the function repeats required-field and email validation on the server.

See [ENVIRONMENT_VARIABLES.md](ENVIRONMENT_VARIABLES.md), [EMAIL_FIX_GUIDE.md](EMAIL_FIX_GUIDE.md), and [CI_CD_GUIDE.md](CI_CD_GUIDE.md) for deployment and troubleshooting details. The bug-fix reports and quick email guide are historical notes; verify claims against the current source and workflow files.

## GitHub Actions

Workflows are in `.github/workflows/`. They cover CI builds, Netlify production and PR preview deployments, Lighthouse checks, dependency review, and code quality. Netlify deploy workflows require `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` GitHub Actions secrets. Workflow configuration is authoritative if these older setup notes differ.