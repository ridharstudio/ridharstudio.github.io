# Ridhar Studio

Website profile and landing for Ridhar Studio — software, design, and product — built with SvelteKit.

This repository hosts the GitHub Pages site for the Ridhar Studio profile.

## Local development

```bash
npm install
npm run dev
```

Run `npm run check` for type checking and `npm run build` to produce the static site in `build/`.

## Project structure

- `src/routes/` — each website page and its route
- `src/lib/components/` — reusable UI and metadata components
- `src/lib/data/projects.ts` — portfolio data
- `static/` — favicon, sitemap, robots policy, OpenGraph image, and Google verification

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the static output on every push to `main`. In GitHub, set **Settings → Pages → Source** to **GitHub Actions**.
