# AGENTS.md - Vivestand

Instructions for coding agents working in this repository (kept identical to CLAUDE.md).

## Project

Vivestand: a static front-end demo for a platform that matches injured athletes with recovery plans, doctors, online consultations and second-hand sports gear. Product intent lives in `DOC.MD` (bilingual EN/AR) and `faq.md`; what the site does today, and its **Limits**, live in `README.md`.

There is no server, package manager, build step, linter or test suite. Do not add frameworks, dependencies or build tooling unless explicitly asked.

## Kid-simple rules (keep them)

The code is written so a curious 12-year-old could read any file top to bottom and explain it back. Keep it that way:

- **JS style:** plain `function` declarations with verb names (`showSpecialty`, `addToCart`, `placeOrder`), `for` loops and `if`s, text built with `+`. No arrow functions, `.map`/`.forEach`/`.reduce`, template strings, classes or clever one-liners.
- **One short comment** above anything a kid would ask "why?" about, in kid words.
- **Numbers at the top** in CAPITALS with a "why" comment (`const SESSION_SECONDS = 600; // 10 × 60`).
- **Never `innerHTML`** with data or user text: build elements and set `textContent` (each file that needs it has its own small `makeElement`).
- **Repetition beats abstraction** when it keeps a file readable on its own: each form page has its own `showProblem`, and each shop page its own `formatPrice`.
- **Validate with plain `if`s** where a user will hit the problem (empty field, email without @, date in the past) and show a friendly message in the page's `.form-message`. Forms use `novalidate` so our messages show, not the browser's.
- **Plain links over JS:** if a click only opens another page, make it an `<a href>` (Home injury cards, sport cards, "Consult Now").
- **No libraries.** The only outside thing is the Delius font from Google Fonts.
- Every simplification that removes safety or capability goes in `README.md` → **Limits**.

## Preview and check

```bash
python3 -m http.server 8000   # from repo root, then open http://localhost:8000/ (redirects to src/Home/home.html)
```

Verification is by hand in a browser: walk the flows you touched (forms with empty fields, the cart, the Online steps) and check the browser console shows no errors.

## Architecture

- Each page is a folder under `src/` with `page.html` + `page.css`, plus `page.js` when it has behaviour. Scripts load at the end of `<body>` with `<script src>`. No inline `<script>` or `onclick=""`. Pages link with relative paths (`../Doctors/doctors.html`) and images via `../../images/`. The root `index.html` only redirects to Home.
- Shared files in `src/Components/`, linked before the page's own files:
  - `tokens.css` (always first): the palette (`--navy`, `--blue-1`…`--blue-5`, `--pink`…`--pink-4`, `--white`, `--text`) and `--font-body` (Delius). It sets the body font and makes form controls inherit it, so pages never set `font-family`. Each page loads the Delius `<link>`. Page-only variables stay in that page's `:root` (Equipment's `--line`, `--muted`, `--success`).
  - `header.css`, `footer.css`. Header/footer **markup** is copy-pasted into every page, so a nav change means editing every HTML file (including the 🛒 cart link). Login and Signup have no header.
  - `chat.css` + `chat.js`: the canned-reply chat, used by Doctors and Online.
  - `cart-count.js`: `loadCart()`, `saveCart()`, `showCartCount()`. The cart is a list in `localStorage["vivestand-cart"]` of `{ sport, mark, name, price, quantity }`. Loaded on every page with a header; Equipment and Cart also use its functions.
- Data is hard-coded at the top of the page's JS:
  - `injuries.js` → `INJURIES`, keyed by the name Home puts in `?injury=`. A new injury needs a Home card **and** an `INJURIES` entry with the same key.
  - `equepment.js` → `SPORTS` and `PRODUCTS` (keyed by sport id, prices in EGP). `?sport=` picks the sport; no or unknown sport shows the sport list.
- Online (`online.js`) is 4 steps in one page shown by `showStep(n)`: questions → 10-minute timer → pricing → booking.
- Visual language: navy/blue gradients, pink primary buttons, cards. `src/Home/home.html` is the layout reference.
- Recovery is an RTL Arabic page with LTR English blocks; use logical properties (`padding-inline-start`, `border-inline-start`) there.

## Gotchas

- `src/Equepment/` is misspelled; keep the existing spelling in paths.
- `src/Professional/` holds `pave_your_well.html` (nav label "Pave Your Well").
- `images/` contains a malformed filename (`55ce97ac... (1).jpgllllllllllll.jpg`); don't reference it.
- UI is English (`lang="en"`, except Recovery); git commit messages are written in Arabic.
- Track work in `ISSUES.md`.
