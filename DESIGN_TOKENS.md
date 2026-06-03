# CarelyBay — Design Tokens

All brand tokens live in **`src/styles/tokens.css`** as CSS custom properties.
Replace the placeholder values below with the real assets when the founder supplies them.

## Colours

| Variable | Current placeholder | Description |
|---|---|---|
| `--color-primary` | `#2D6A4F` | Primary brand colour (teal-green) |
| `--color-primary-dark` | `#1B4332` | Darker shade for hover/active states |
| `--color-accent` | `#F4A261` | Accent / CTA colour (warm orange) |
| `--color-accent-dark` | `#E76F51` | Darker accent for hover states |
| `--color-surface` | `#F9FAFB` | Page background / card surface |
| `--color-on-surface` | `#111827` | Default text colour on surface |

## Typography

| Variable | Current placeholder | Description |
|---|---|---|
| `--font-sans` | system-ui, sans-serif | Primary font stack — replace with brand font once loaded |

## Logo

Replace the inline SVG placeholder in `src/components/SignInScreen.tsx` with the real logo asset.
Use `<img src="/logo.svg" alt="CarelyBay" />` once the file is placed in `/public/`.

## How to update

1. Open `src/styles/tokens.css`.
2. Replace the CSS variable values.
3. Drop font files in `/public/fonts/` and update the `@font-face` rule in `tokens.css`.
4. Drop `logo.svg` in `/public/` and update `SignInScreen.tsx`.
5. Run `pnpm build` to verify no regressions.
