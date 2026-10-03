# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Vivestand: a static front-end MVP for a platform that matches injured athletes with recovery products, doctors and online consultations. Product intent and feature scope live in `DOC.MD` (bilingual EN/AR); read it before making assumptions about what a page should do.

There is no package manager, build step, linter or test suite. Do not add frameworks, dependencies or build tooling unless explicitly asked.

## Preview

```bash
python3 -m http.server 8000   # from repo root, then open http://localhost:8000/src/Home/home.html
```

Opening an `.html` file directly in a browser also works. Verification is visual: render the changed page and check that its relative links resolve from that page's folder.

## Architecture

- Each page is a standalone screen in its own folder under `src/` with a paired `.html` + `.css` (e.g. `src/Doctors/doctors.html` + `doctors.css`). There is no app shell; pages link to each other with relative `../Folder/page.html` paths and images via `../../images/`.
- Shared CSS lives in `src/Components/` and is linked before the page CSS, in this order: `tokens.css` (always first), `header.css`, `footer.css`, and `chat.css` (Doctors and Online only). The header/footer **markup** is not shared: it is copy-pasted into every page, so a nav change means editing every HTML file. Login and Signup link only `tokens.css`.
- `tokens.css` is the single source for the palette (`--navy`, `--blue-1`…`--blue-5`, `--pink`…`--pink-4`, `--white`, `--text`) and the font (`--font-body`, Delius from Google Fonts). It also sets `body` font-family and makes form controls inherit it, so pages must not set `font-family` themselves; each page only loads the Delius `<link>`. Page-only variables stay in that page's own `:root` (e.g. Equipment's `--line`, `--muted`). `test.html` at the root is the palette reference, not a live page.
- JavaScript is inline `<script>` at the bottom of pages (no `.js` files), with data hardcoded in JS objects:
  - Home → Injuries: `goToInjury(type)` navigates to `injuries.html?injury=<type>`; `injuries.html` reads the query param and renders from an `injuryData` object keyed by that type. New injury types need both a Home card and an `injuryData` entry with a matching key.
  - Doctors: specialty filter plus a client-side "Chat with Doctor" chatbot widget.
  - Equepment: product catalog rendered from a `sports` array.
  - Online_session: consultation countdown timer.
- Visual language: dark navy/blue gradients, pink accent buttons, card-based sections. `src/Home/home.html` is the reference for layout and navigation.
- Recovery is an RTL Arabic page with LTR English blocks; use logical properties (`padding-inline-start`, `border-inline-start`) rather than left/right there.

## Gotchas

- `src/Equepment/` is misspelled; keep the existing spelling in paths.
- `src/Professional/` holds `pave_your_well.html` (nav label "Pave Your Well").
- `images/` contains a malformed filename (`55ce97ac... (1).jpgllllllllllll.jpg`); don't reference it.
- UI is English (`lang="en"`); git commit messages are written in Arabic.
