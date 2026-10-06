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

Status: done (2026-10-06), waiting for commit. Note: the Online page had no doctor name (the lookup never ran), so "Dr. Ahmed El-Shaer" is now written in its HTML.

Make every script readable top to bottom by a 12-year-old: one `.js` file per page, plain functions and loops, no `innerHTML` with user text.

- Move inline scripts and `onclick=""` into per-page `.js` files; shared `src/Components/chat.js` and `src/Components/cart-count.js`.
- Doctors: "Consult Now" becomes a plain link to Online. Online: drop the unused doctor lookup and saved answers; add step 4 (pick date & time, confirm).
- Chat works on Doctors and Online; safe text, 200-character cap.
- Equipment: one product list per sport with EGP prices; unknown sport shows the sport list; "Add to cart".
- New Cart page: quantities with −/+, total, delivery form (name, phone, address) and a demo order confirmation. Cart link with count in every header.
- Login, Signup, Contact: real forms with empty-field and email checks and a demo "thanks" message.
- Root `index.html` redirects to `src/Home/home.html`.
- README with a Limits section; CLAUDE.md and AGENTS.md rewritten with the kid-simple rules.
