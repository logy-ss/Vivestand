# AGENTS.md - Vivestand

## Project type
Static HTML/CSS site — no build tools, bundler, package manager, or JS framework.

## Structure
- `src/` — all pages, each in its own folder with paired `.html` + `.css`
  - `Home/`, `Login/`, `Signup/`, `Doctors/`, `Professional/`, `Online_session/`, `Recovery/`, `Injuries/`, `Equepment/`
  - `contact_us.html` + `contact_us.css` (top-level in `src/`, no folder)
- `images/` — shared assets (logo, photos)
- `test.html` — color palette reference (design system doc, not a live page)
- `DOC.MD` / `DOC.pdf` — project spec (bilingual EN/AR)

## Conventions
- Each page is a standalone HTML file linking its sibling CSS via `<link rel="stylesheet" href="pagename.css">`.
- Inter-page navigation uses relative `../` paths (e.g. `../Doctors/doctors.html`).
- CSS variables define the design system — repeated in each CSS file, not a shared stylesheet. Key palette:
  - `--navy: #0B1F3A`, `--blue-1: #123E6B`, `--blue-2: #1F6FB3`, `--pink: #E42264`
  - `--white: #F9FCFF`, `--text: #102235`
- Font: Playfair Display (Google Fonts) in Home; Arial fallback elsewhere.
- No JavaScript yet — pages are static HTML only (MVP phase).

## How to preview
Open any `.html` file directly in a browser, or use a local server:
```bash
python3 -m http.server 8000   # from repo root, then visit /src/Home/home.html
```

## Gotchas
- `Equepment/` is misspelled in the repo (should be "Equipment"). Match the existing spelling when adding files there.
- `contact_us.html` is a stub — body contains only placeholder Arabic text.
- `images/` has one oddly-named file (`55ce97ac2a9b7a52052cae0caaa1b169 (1).jpgllllllllllll.jpg`) — avoid referencing it; use `logo.png` instead.
- Arabic content appears in commit messages and `DOC.MD`. The UI itself is currently English-only per `lang="en"` on all pages.

## Languages
- UI: English
- Spec doc (`DOC.MD`): bilingual English/Arabic
- Git commit messages: Arabic
