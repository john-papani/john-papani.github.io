# Ioannis Papanikolaou — Portfolio

Personal portfolio website for [john-papani.github.io](https://john-papani.github.io/).

It presents my professional experience, selected projects, volunteering work,  
technical skills, NTUA diploma thesis, and contact information.

![Portfolio preview](https://file%2B.vscode-resource.vscode-cdn.net/c%3A/Users/yiannis.papanikolaou/OneDrive%20-%20Mitsis%20Group/Documents/0CODES_HERE/0mymycode/john-papani.github.io/src/site_image.png)

## Main sections

- About and downloadable CV
- Diploma thesis and publication links
- Work experience and volunteering
- Selected software projects
- Languages, tools, and technologies
- Contact and social links

## Tech stack

- React 18 and React Router
- Material UI
- Tailwind CSS
- GSAP and Framer Motion
- tsParticles
- Create React App
- GitHub Actions and GitHub Pages

## Local development

### Requirements

- Node.js 20
- npm

### Setup

```bash
git clone https://github.com/john-papani/john-papani.github.io.git
cd john-papani.github.io
npm ci
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the local development server |
| `npm test` | Run the test suite in watch mode |
| `npm run build` | Create an optimized production build in `build/` |
| `npm run deploy` | Manually deploy `build/` through the `gh-pages` package |

## Content updates

The main portfolio content is stored in these files:

- `src/data/allprojects.js` — project cards
- `src/data/work_exper.js` — professional experience
- `src/data/volunteering_exper.js` — volunteering experience
- `src/Components/About/About.js` — profile summary
- `src/Components/Diploma/` — diploma thesis content and links
- `src/Components/ContactFooter/ContactFooter.js` — contact details

Images and other visual assets are stored under `src/img/` and `public/`.

## Production deployment

Production deployment is automated with GitHub Actions. Every push to `master`  
triggers the workflow in `.github/workflows/jekyll-gh-pages.yml`, which:

1. Installs dependencies with `npm ci`.
2. Creates the production build with `npm run build`.
3. Uploads the `build/` directory to GitHub Pages.
4. Deploys the new version to production.

```bash
git add .
git commit -m "Update portfolio"
git push origin master
```