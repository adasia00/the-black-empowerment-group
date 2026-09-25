# The Black Empowerment Group

A standalone website built with Next.js 15, React, TypeScript, and custom CSS.

## Pages

- `/` — Home, executive summary, impact statement, about us, and future outlook
- `/services` — Portfolio of services
- `/gallery` — Slideshow-ready gallery
- `/contact-us` — Project inquiry form

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To create a production build, run `npm run build`, then `npm start`.

## Design palette

- Black: `#000000`
- Gold: `#7F6000`
- Platinum: `#D9D9D9`

The contact form is currently a front-end preview and does not deliver submissions. Connect a form endpoint or email service before collecting inquiries.

## GitHub Pages

The project is configured for static export. The included GitHub Actions workflow deploys the `main` branch to GitHub Pages at `/the-black-empowerment-group/`. Set the repository's Pages source to **GitHub Actions** in its settings.
