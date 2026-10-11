# Repository Guidance

## Project Shape

- This is a Next.js 14 App Router portfolio. `app/page.tsx` composes the page; the section implementations live in `components/`.
- Most page sections are client components because they use state, effects, event handlers, or browser APIs. Keep browser-only behavior in client components.
- Shared design tokens and Tailwind CSS 4 setup live in `app/globals.css`. Reuse the existing UI primitives in `components/ui/`, the `cn` helper in `lib/utils.ts`, and Lucide icons before adding dependencies or bespoke patterns.
- Portfolio, service, and testimonial content is currently held in component-level arrays. Public images belong in `public/` and are referenced by root-relative paths.
- Preserve the section IDs used by the navbar and footer when modifying page structure.

## Change Guidance

- Read the owning component and its call sites before changing behavior. Keep changes localized and preserve existing visual and interaction patterns.
- Use pnpm and keep `pnpm-lock.yaml` in sync when dependencies change. CI and Netlify use pnpm; avoid introducing a second package-manager workflow.
- The contact form in `components/contact.tsx` posts directly to the Netlify function at `/.netlify/functions/sendEmail`. The function lives in `netlify/functions/sendEmail.js`; the similarly named Next API file is only commented-out legacy code.
- Keep email credentials in environment variables. Validate contact input in the function as well as the browser, and safely encode user-provided values before inserting them into email HTML.
- Do not treat the bug-fix reports or email quick-fix documents as proof of current behavior. Confirm behavior in source and `.github/workflows/`.

## Validation

- Run `pnpm build` for production build validation.
- Run `pnpm lint` and `pnpm exec tsc --noEmit` when the change touches lint- or type-sensitive code.
- The CI lint and type-check steps currently use `continue-on-error: true`, and `next.config.mjs` ignores both categories during builds. Report their outcomes independently instead of relying on build success alone.
- There is currently no configured test script in `package.json`.