# woof.ing UI

Shared design system for every woof.ing app: design tokens (light / dark / black themes, per-app accents), accessible components built on [react-aria-components](https://react-spectrum.adobe.com/react-aria/), and Tailwind CSS v4 theming.

## Packages

- [`@woofing/ui`](packages/ui) — tokens, theme, components, Storybook
- [`gallery`](apps/gallery) — single-file component gallery (design-tool export)

## Usage

```css
/* app.css */
@import 'tailwindcss';
@import '@woofing/ui/theme.css';
@source '../node_modules/@woofing/ui';
```

Set the theme with `data-theme="light" | "dark" | "black"` on `<html>`, and the app accent with `data-accent="community" | "art-corner" | "blog" | "support" | "moderation"` (or by overriding `--accent`).

## Development

```sh
pnpm install
pnpm storybook   # component playground
pnpm build       # build package + gallery
pnpm lint && pnpm fmt:check
```
