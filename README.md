# CarelyBay

Marketplace for nannying, pet sitting, and childcare services.

- **Subdomain:** `testest.proappstore.online`
- **Dev:** `pnpm install && pnpm dev`
- **Build:** `pnpm build`
- **Deploy:** `git push origin main` (auto-deploys via Cloudflare Pages)

For platform conventions, read
https://proappstore.online/skills.md
before writing or changing anything.

## Auth

- GitHub sign-in: `<SignInButton app={app} label="Sign in with GitHub" />` from `@proappstore/sdk/ui`
- Google sign-in: custom button calling `app.auth.signIn('google')` directly
- Auth state: `useProAuth(app)` → `{ user, loading }` — `user.login` is the display name

## Brand tokens

All colours and typography live in `src/styles/tokens.css`. See `DESIGN_TOKENS.md` for the full guide on replacing placeholder values with final brand assets.
