# Portfolio — SambaSivaRao Mamidi

A single-page React portfolio built with **Vite**, **Tailwind CSS v4**, and animated components from [reactbits.dev](https://reactbits.dev). Uses the "Obsidian Amethyst" dark theme (violet `#A78BFA` + ember orange `#F97316` on near-black).

## Stack

- Vite 8 + React 19
- Tailwind CSS v4 (CSS-first `@theme` tokens in `src/index.css`)
- GSAP (`CardSwap`), ogl + three (`WarpText`), Canvas 2D (`SideRays`, `ClickSpark`)
- `react-icons` for skill logos

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint     # eslint
npm run preview  # serve the production build
```

## Editing content

All copy, links, and project data live in `src/data/` — no component edits needed:

- `profile.js` — name, handle, status, avatar paths, email/GitHub/LinkedIn/resume links
- `navigation.js` — CardNav menu groups and links
- `projects.js` — featured/secondary projects (swap stack uses `featured: true`)
- `skills.jsx` — skill categories + LogoLoop tech logos

Static assets go in `public/`:

- `images/profile/avatar.webp` — replace the placeholder `avatar.svg`
- `images/projects/*.webp` — project screenshots
- `resume.pdf` — resume download

## Deploying to GitHub Pages

The repo includes `.github/workflows/deploy.yml`, which builds and publishes on every push to `main`.

1. Push this repo to GitHub (a new or existing repo).
2. Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Push/merge to `main` (or run the workflow manually via **Actions** tab).

The `base: './'` Vite setting keeps asset paths relative, so the site works under `https://<user>.github.io/<repo>/`.

## Placeholders still to replace

Search the `src/data/` files for `your-name` / `example.com` and update email, GitHub, LinkedIn, project, and resume URLs when ready.

## Structure

```
src/
  components/        React Bits components + own UI
    navigation/      PortfolioNav (CardNav wrapper)
    hero/            Hero (SideRays, WarpText, ProfileCard, ClickSpark)
    projects/        FeaturedSwap (CardSwap) + ProjectCard grid
    skills/          SkillsSection (LogoLoop + categories)
    sections/        About, Journey, Proof, Contact
    ui/              Button, SectionHeading
  data/              profile, navigation, projects, skills
  hooks/             usePrefersReducedMotion, useScrollToSection
  pages/Home.jsx     page assembly
  index.css          theme tokens + global styles
```