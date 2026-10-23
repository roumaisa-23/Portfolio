# Roumaisa Abbasi, Front-End Developer Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide icons.

## Run it locally
```
npm install
npm run dev
```
Open the address Vite prints (usually http://localhost:5173).

## Build for hosting
```
npm run build
```
Upload the `dist` folder to Netlify, Vercel or GitHub Pages.

## Replace the placeholders

| What | Where |
|---|---|
| GitHub link | `src/data/site.js` (`github`). Your CV has no GitHub, so it is hidden until you add one. LinkedIn is already set from your CV. |
| Email, location, availability label | `src/data/site.js` |
| Resume | Replace `public/Roumaisa_Abbasi_CV.pdf` (your CV is already there). |
| Project text, stack, features | `src/data/projects.js` |
| Live and code links | `src/data/projects.js` (`live`, `repo`). Empty = the button is hidden. |
| Project screenshots | Put images in `public/projects/`, then set `image` and `imageAlt` in `projects.js`. Until then an "Illustrative interface preview" is shown. |
| Skills | `src/data/skills.js` |
| Experience and education | `src/data/experience.js` and `src/data/site.js` |

While running `npm run dev`, each project card shows a yellow "Dev note" listing the fields I could not confirm from your CV (contribution, stack, links). It does not appear in the production build, so fix the text before you deploy.

## Make the contact form send real email
1. Create a free form at https://formspree.io and copy its endpoint URL.
2. Copy `.env.example` to `.env` and paste the URL after `VITE_FORM_ENDPOINT=`.
3. Restart `npm run dev` (on Netlify/Vercel, add `VITE_FORM_ENDPOINT` as an environment variable).

Until then the form validates the fields and tells the visitor it is not connected yet. It never shows a fake "sent" message.
