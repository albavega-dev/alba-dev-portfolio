# Alba Dev Portfolio

[![CI](https://github.com/albavega-dev/alba-dev-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/albavega-dev/alba-dev-portfolio/actions/workflows/ci.yml)

Alba Dev Portfolio is Alba Vega's personal developer portfolio. It brings together her professional experience, frontend and full-stack background, technical toolkit, personal interests and custom interface work.

## About the project

This is a custom-built portfolio interface rather than a template. The public V1 focuses on three areas: Home, About Me and CV.

About Me contains the technical toolkit and the interactive Beyond the Code journal. The CV presents professional experience, education and downloadable English and Spanish CV documents.

The visual language uses a soft pink and lavender palette with editorial and scrapbook-inspired details, while keeping the content structured and easy to scan.

## Live site

[albavega.vercel.app](https://albavega.vercel.app/)

## Version

The current first public release is V1.0.0.

The site is deployed on Vercel.

## Highlights

- Responsive navigation with route-aware interactions and a custom animated divider.
- Rough Notation highlights for the primary navigation links.
- A responsive toolkit layout with measured desktop masonry placement.
- The interactive Beyond the Code journal, with desktop, tablet and phone-specific reading modes.
- Keyboard-accessible journal controls, visible focus states and reduced-motion handling.
- A custom CV timeline covering professional experience, education and early beginnings.
- Downloadable English and Spanish CV documents.

## Tech stack

### Core

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### UI and interaction

- Tabler Icons
- Rough Notation
- `react-vertical-timeline-component`
- Custom CSS and SVG interactions

### Code quality

- ESLint
- TypeScript compilation as part of the production build
- Focused Vitest + React Testing Library suite with 5 tests

## Project structure

```text
src/
├── components/
│   ├── about/       # Toolkit, journal and About-specific interactions
│   ├── layout/      # Navbar, footer, shared containers and route behavior
│   └── ui/          # Reusable interface components
├── pages/           # Route-level page content
│   ├── about/
│   ├── cv/
│   ├── experience/
│   ├── home/
│   └── projects/
└── index.css        # Global tokens, typography and base styles

public/              # Stable public assets and downloadable CV PDFs
```

Pages own route-level content. Shared application structure lives in `components/layout`, while the About and CV folders contain feature-specific interactions and styles.

## Accessibility and responsive design

The interface uses semantic landmarks, keyboard-accessible controls, visible `focus-visible` states and ARIA attributes where they add useful context. Decorative images and SVGs are excluded from assistive technology, while links retain semantic destinations and accessible names.

Interactive motion responds to `prefers-reduced-motion`. The toolkit returns to normal document flow at smaller widths, and the journal switches between desktop spread, single-page and phone reader presentations according to viewport size.

## Getting started

Prerequisites: Node.js and npm.

```bash
npm install
npm run dev
```

Vite starts the local development server for the portfolio.

## Available scripts

```bash
npm run dev      # Start the Vite development server
npm run lint     # Run ESLint
npm run test     # Run the focused Vitest test suite
npm run build    # TypeScript build followed by the Vite production build
npm run preview  # Preview the production build locally
```

## CI and validation

GitHub Actions validates pull requests targeting `main` with:

```bash
npm ci
npm run lint
npm run test
npm run build
```

## Contact

- [LinkedIn](https://www.linkedin.com/in/alba-vega-calzado-7b976611a/)
- [Email](mailto:avegac14@gmail.com)
