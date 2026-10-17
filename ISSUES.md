# Issues

## #1 [bug] Style audit fixes — mobile layout, consistency, cleanup

Status: closed (2026-10-03) — plus site-wide Delius font via src/Components/tokens.css

Audit of all `src/**/*.css` (2026-10-03). Fix in two passes:

**Pass A — shared components**
- Header has no mobile layout; nav overflows viewport on 7 pages (`src/Components/header.css`).
- Chat widget CSS duplicated in Doctors + Online; Online version overflows phones (380px fixed width).
- `.container` not defined for footer on Contact; Recovery/Equipment footers drift.
- Palette `:root` copied into 10 files and already drifted (Equipment lacks `--pink-3`).

**Pass B — per-page**
- Pave Your Well: mobile overrides lose specificity; hero `min-height: 100%` doesn't resolve (blank band).
- Recovery: RTL lists use physical left/right props; missing box-sizing reset; Segoe UI font; sticky header.
- Login/Signup/Contact: no body gutter on phones, login input font-size < 16px, button colour/font mismatch.
- Injuries: `.btn-recovery` unstyled.
- Contrast: white on `--blue-3` header gradients (2.59:1), `--blue-3` rest-day headings.
- Online: inline `style=` with hardcoded hex; Equipment off-palette hex.
- Cleanup: duplicate `.home-hero`, dead rules, Contact `calc(100vh - 88px)`.

## #2 [refactor] Kid-simple JS + cart, booking and working forms

Status: closed (2026-10-07). Note: the Online page had no doctor name (the lookup never ran), so "Dr. Ahmed El-Shaer" is now written in its HTML.

Make every script readable top to bottom by a 12-year-old: one `.js` file per page, plain functions and loops, no `innerHTML` with user text.

- Move inline scripts and `onclick=""` into per-page `.js` files; shared `src/Components/chat.js` and `src/Components/cart-count.js`.
- Doctors: "Consult Now" becomes a plain link to Online. Online: drop the unused doctor lookup and saved answers; add step 4 (pick date & time, confirm).
- Chat works on Doctors and Online; safe text, 200-character cap.
- Equipment: one product list per sport with EGP prices; unknown sport shows the sport list; "Add to cart".
- New Cart page: quantities with −/+, total, delivery form (name, phone, address) and a demo order confirmation. Cart link with count in every header.
- Login, Signup, Contact: real forms with empty-field and email checks and a demo "thanks" message.
- Root `index.html` redirects to `src/Home/home.html`.
- README with a Limits section; CLAUDE.md and AGENTS.md rewritten with the kid-simple rules.

## #3 [bug] Desktop layout: header on one row, no wasted side space

Status: closed (2026-10-07)

- Header wrapped its 7 links onto two uneven rows even at 1920px. Now one row from 1201px up, links on their own row at ≤1200px, centred on phones. Buttons read "Sign Up" / "Log In" everywhere.
- Pages capped content at 860–1200px (five different caps) and the header at 1320px, leaving 38–79% of a 1920px screen empty and the logo out of line with the content. Now one `--page-width` (1440px) and `--page-gutter` in `tokens.css` with a shared `.container`, used by header, footer and every page.
- Card grids re-balanced so rows come out even (Home 5 per row, Equipment 7, Doctors 5, Pave Your Well 4 or 3 and the 7-day plan in one row); doctor groups centre a short last row.

## #4 [docs] Showcase kit: documentation, poster, slides

Status: closed (2026-10-17)

- `docs/` holds the Aswan Projects Showcase 2026 kit: `vivestand-documentation.md` + PDF, a 1000×2000 mm poster, a 9-slide deck, the user-flow and page-parts diagrams, and 19 screenshots of the real site.
- Every number is checked against the code (20 injuries, 61 doctors, 14 sports, 252 listings, 11 pages).
- Lines starting with ✏️ are for Logien to write or rewrite. `python docs/build.py` rebuilds the PDFs and counts the ✏️ lines left (needs `playwright` and `markdown-it-py`, not app dependencies).

## #5 [bug] "Back to Exercises" link is broken on Pave Your Well

Status: open

- `src/Professional/pave_your_well.html` line 464 links to `pave%20your%20well.html#exercises-section`, a file that doesn't exist. It should be `pave_your_well.html#exercises-section`.
