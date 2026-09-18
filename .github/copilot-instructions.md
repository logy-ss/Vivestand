# Project Guidelines

## Code Style
- Keep this project as a static HTML/CSS front-end. Prefer small, page-focused changes over introducing frameworks or build tooling.
- Match the existing structure: each feature has its own folder under `src/` with a dedicated HTML and CSS file (for example, `src/Home/home.html` and `src/Home/home.css`).
- Reuse the current design tokens and naming patterns from the homepage styles: a palette defined in `:root`, clear section classes, and compact component naming.
- Use relative paths for navigation between pages, consistent with the current pattern: `../Doctors/doctors.html`, `../Login/login.html`, and similar.
- Keep markup semantic and accessible: use meaningful headings, labels, and alt text for images.

## Architecture
- The site is organized as a collection of landing-page modules, not a single app shell. Preserve this separation unless a cross-cutting change is explicitly required.
- The primary product docs live in [../DOC.MD](../DOC.MD). Use that document as the source of business context and feature intent.
- The homepage in [../src/Home/home.html](../src/Home/home.html) is the best reference for navigation, layout patterns, and visual language.
- Treat each page as a standalone screen with local styling; only create shared CSS when a style is clearly reused across multiple pages.

## Build and Test
- This workspace does not currently include a package manager, build step, or automated test suite.
- For local preview, run a simple static server from the project root, for example:
  - `python -m http.server 8000`
- Open the generated page in a browser, or open the page directly from the workspace for quick visual review.
- When changing a page, verify the relevant HTML/CSS rendering in the browser and check that any links still resolve correctly from the page’s folder.

## Conventions
- Use the same visual system across pages: dark navy/blue gradients, pink accent buttons, and soft card-based sections.
- Keep page-specific CSS in the same folder as the HTML file unless the change clearly belongs to a shared global style.
- Preserve the established naming and file layout patterns already present under `src/`.
- For new pages, follow the existing static-page patterns: top navigation, content section blocks, and a page-local CSS file.
- Avoid adding heavy JavaScript frameworks, package dependencies, or build configuration unless the project explicitly requires them.

## Working Style
- Prefer surgical edits that match the current structure and tone.
- If you need more context about the product or requirements, read [../DOC.MD](../DOC.MD) before making architectural assumptions.
- Keep instructions brief and project-specific; do not duplicate general frontend guidance already covered by editor defaults.
