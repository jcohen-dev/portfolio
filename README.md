# Josh Cohen — Portfolio

Source code for my personal portfolio, live at [jcohen-dev.github.io/Portfolio](https://jcohen-dev.github.io/Portfolio/).

UX/UI Designer and Front-End Developer focused on building intuitive, visually polished interfaces. This site highlights selected work, including the GoCloud ServiceDesk tool, where I led front-end development and UI implementation.

## Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 with custom Material Design 3 tokens (warm amber palette)
- **Theming:** `next-themes` with light/dark/system support
- **Deployment:** Static export to GitHub Pages via GitHub Actions

## Project structure

```
src/
├── app/                    # Next.js App Router (layout, page, globals.css)
├── components/             # Reusable UI components
├── data/
│   ├── profile.ts          # Hero, about, skills, experience, education, contact
│   └── projects.ts         # Project cards
└── lib/                    # Small utilities
public/                     # Static assets
.github/workflows/          # GitHub Pages deploy workflow
```

## Local development

```bash
npm install
npm run dev
```

Site runs at http://localhost:3000.

To produce a static build matching the deployed version: `STATIC_EXPORT=true npm run build` (writes to `out/`).

## Contact

- **Email:** jcohendev@gmail.com
- **LinkedIn:** [linkedin.com/in/josh-cohen-dev](https://linkedin.com/in/josh-cohen-dev)
