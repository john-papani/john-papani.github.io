# Ioannis Papanikolaou — Portfolio

Personal portfolio website for [john-papani.github.io](https://john-papani.github.io/).

It presents my professional experience, selected software projects, technical
skills, research and publication work, volunteering, and contact information.

## Highlights

- Responsive professional overview with work experience, research, and skills
- Featured project grid with expandable access to the full project list
- Light and dark themes based on the system preference, with a saved manual toggle
- Native smooth scrolling and accessible, reduced-motion-aware reveal effects
- Responsive navigation, animated cursor, and theme-aware particle background
- Downloadable CV and direct links to GitHub, LinkedIn, publications, and demos

## Tech stack

- React 18 and React Router
- Material UI and Tailwind CSS
- tsParticles and React Animated Cursor
- Native Intersection Observer for scroll reveals
- Create React App
- GitHub Actions and GitHub Pages

## Local development

### Requirements

- Node.js 20
- pnpm (`corepack enable` or `npm install -g pnpm`)

### Setup

```bash
git clone https://github.com/john-papani/john-papani.github.io.git
cd john-papani.github.io
pnpm install --frozen-lockfile
pnpm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
| --- | --- |
| `pnpm start` | Start the local development server |
| `pnpm test` | Run the test suite in watch mode |
| `pnpm test -- --watchAll=false --runInBand` | Run the test suite once |
| `pnpm run build` | Create an optimized production build in `build/` |
| `pnpm run deploy` | Manually deploy `build/` through `gh-pages` |

## Updating portfolio content

The main content is maintained in:

- `src/data/allprojects.js` — project cards
- `src/data/work_exper.js` — professional experience
- `src/data/volunteering_exper.js` — volunteering experience
- `src/Components/Hero/Hero.js` — profile summary and primary links
- `src/Components/Diploma/` — research, thesis, and publication content
- `src/Components/About/LanguageTools.js` — skills and technologies
- `src/Components/ContactFooter/ContactFooter.js` — contact details

Images and other visual assets are stored under `src/img/` and `public/`.

## Production deployment

Every push to `master` triggers `.github/workflows/jekyll-gh-pages.yml`. The
workflow installs dependencies with `pnpm install --frozen-lockfile`, creates the production build, and
deploys the `build/` directory through GitHub Pages.

```bash
git push origin master
```
