# Portfolio

A personal portfolio site for a UI/UX Designer, Developer, and Research-Driven Problem Solver. Built with Next.js (App Router), TypeScript, Tailwind CSS, and a Material Design 3 (warm amber) design language. Light/dark mode, tab-based navigation, and a project showcase that's one file edit away from your next case study.

## Tech

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 with MD3 design tokens
- **Theming:** `next-themes` (system / light / dark, persisted)
- **Deployment:** Production-ready Docker image (Next.js `standalone` output)

## Quick start (npm)

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

The site runs on [http://localhost:3000](http://localhost:3000).

### Other scripts

| Script           | What it does                                              |
| ---------------- | --------------------------------------------------------- |
| `npm run dev`    | Start the Next.js dev server with hot reload              |
| `npm run build`  | Produce a production build (writes `.next/standalone/…`)  |
| `npm run start`  | Serve the production build on `localhost:3000`            |
| `npm run lint`   | Run ESLint (Next.js + TypeScript ruleset)                 |

## Quick start (Docker)

Requires Docker (with the Compose v2 plugin).

```bash
docker compose up --build
```

The image uses a multi-stage build:

1. **deps** — installs npm dependencies
2. **builder** — runs `next build` to produce `.next/standalone`
3. **runner** — copies the standalone server into a slim `node:22-alpine` image and runs it as a non-root user

After the build completes the site is available at [http://localhost:3000](http://localhost:3000). To stop the container, press `Ctrl+C` and then run `docker compose down`.

To rebuild after pulling new changes:

```bash
docker compose up --build --force-recreate
```

## Editing your content

Almost everything that's visible on the site lives in two files:

### `src/data/profile.ts`

Personalize the Introduction tab — your name, headline, about copy, skills, tools, experience, education, and contact links.

### `src/data/projects.ts`

Add a new project by appending an object to the `projects` array:

```ts
{
  id: "your-project-slug",
  title: "Project Title",
  kind: "Web App",        // optional category label
  year: "2026",
  summary: "One-line summary shown on the card.",
  what_it_does: "Longer description shown in the modal.",
  role: "UI/UX Designer", // shown on the card
  role_detail: "What you specifically did, in detail.",
  tools: ["Figma", "React", "TypeScript"],
  outcomes: [
    "Concrete outcome #1",
    "Concrete outcome #2",
  ],
  links: [
    { kind: "github", url: "https://github.com/you/repo" },
    { kind: "demo", url: "https://your-demo.com" },
  ],
  // image: "/images/your-screenshot.png",  // optional, see below
}
```

Save the file and the dev server will hot-reload.

### Screenshots

Drop image files into `public/images/` and set `image: "/images/file.png"` on the project. Until you do, each card renders a deterministic gradient placeholder based on the project title, so the layout always feels complete.

### Design tokens (color, radius, elevation)

The MD3 palette and shape/elevation tokens live in `src/app/globals.css` under the `:root` and `.dark` blocks. To change the accent, edit the `--md-primary*` values in both blocks.

## Project structure

```
.
├── src/
│   ├── app/                    # Next.js App Router (layout, page, globals.css)
│   ├── components/             # Reusable UI components
│   ├── data/
│   │   ├── profile.ts          # Personalize the Introduction tab here
│   │   └── projects.ts         # Add / edit project cards here
│   └── lib/                    # Small utilities
├── public/                     # Static assets (images, etc.)
├── Dockerfile                  # Multi-stage production image
├── docker-compose.yml          # One-command run for the prod build
├── next.config.ts              # standalone output for Docker
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

## Light & dark mode

The theme is controlled by `next-themes` and persists in `localStorage`. Toggling uses the icon button in the header. The default is `system`, which follows OS preference.

## Accessibility

- Pill tabs use `role="tablist"` / `role="tab"` / `role="tabpanel"`
- Modal traps Escape and restores focus to the trigger on close
- Focus rings are MD3-tinted and visible on every interactive control
- All color tokens have light + dark variants tested for contrast

## License

Personal use. Customize it, ship it, make it yours.
