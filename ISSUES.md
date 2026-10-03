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
