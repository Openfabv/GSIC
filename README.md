# Gati Silicon Integrated Chips (GISC) — Website

A static site (plain HTML/CSS/JS, no build step) for GISC — free to deploy on GitHub Pages.

## Deploy on GitHub Pages (free)

1. **Create a new GitHub repo** — e.g. `gisc-site` (public repos get free Pages hosting; private repos need GitHub Pro).
2. **Push these three files** (`index.html`, `styles.css`, `script.js`) to the root of the `main` branch:
   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Initial GISC site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/gisc-site.git
   git push -u origin main
   ```
3. **Enable Pages**: on GitHub, go to the repo → **Settings → Pages** → under "Build and deployment", set **Source** to `Deploy from a branch` → choose branch `main`, folder `/ (root)` → **Save**.
4. Your site goes live at:
   ```
   https://<your-username>.github.io/gisc-site/
   ```
   It usually takes 1–2 minutes to build after each push.

### Custom domain (optional)
If you later buy a domain (e.g. `gatisilicon.com`), add a `CNAME` file in the repo root containing just the domain name, then point your DNS `A`/`CNAME` records at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Editing content

- **Products/IP cards** — edit the `<article class="card">` blocks inside `index.html` under `<section id="products">`.
- **Roadmap phases** — edit `<div class="phase">` blocks under `<section id="roadmap">`.
- **GitHub repo links** — currently placeholders (`https://github.com/`) in the "Open Source" section and the hero's GitHub button — swap in your real repo URLs once they exist.
- **Contact email** — update the `mailto:` link in `<section id="contact">`.
- **Colors/fonts** — all design tokens live at the top of `styles.css` under `:root`.

## Notes
- No build tools, no npm install — it's plain static HTML/CSS/JS, so GitHub Pages serves it directly.
- Respects `prefers-reduced-motion` and has visible keyboard focus states.
- Fully responsive down to mobile, including a slide-out nav menu.
