# Personal site

A small static site. No build step, no dependencies, no framework. Open
`index.html` or serve the folder:

```bash
python3 -m http.server 8000
```

## Pages

```
index.html                        landing: intro, work index, education, experience, tools, contact
projects/touse.html               01  Touse
projects/cartographer.html        02  Cartographer
projects/llm-evaluation.html      03  LLM Evaluation Framework
projects/midterm-forecast.html    04  2026 Midterm Forecast
styles.css                        one stylesheet for every page
script.js                         theme toggle + current-section marker; nothing depends on it
images/                           screenshots, captured by running each project locally
```

The index carries a short summary per project and links out to a detail page.
The detail pages hold the actual engineering: the problem, the approach, the
part that was hard, and the honest limits.

All content lives in the HTML. There is no data object to render from, so the
pages work with JavaScript disabled and search engines index the real text.

## House style

- **No em dashes.** Use a colon, a comma, a semicolon, or parentheses, or split
  the sentence. This is deliberate and applies to every page.
- Claims are specific and checkable. Numbers come from the project they
  describe.
- Do not link something a visitor cannot open without saying so. Private
  repositories and offline deployments are labelled as such, in a `.note` span.

## Shared markup

The six pages each carry their own copy of the `<head>`, sub-nav, and footer.
Changing any of the following means editing all six files:

- the font `<link>` and favicon `<link>` tags
- `.subnav` links
- `.site-footer` contents

Project pages use `../` prefixes for assets and `projects/<slug>.html` links to
each other; the index uses no prefix.

## Typefaces

The IBM Plex superfamily throughout: Plex Serif for headings and lead text, Plex
Sans for body, Plex Mono for labels, metadata, stack lines, and code. One
designer, drawn for a technology company, and deliberately not the brand faces
the AI labs use.

Note that Plex Mono is wider than most monospaced faces. Labels inside the SVG
diagrams are positioned by hand, so check for collisions after editing any
`.dg-band` or `.dg-src` text.

## Theme

Light is the default: every page ships `data-theme="light"` on `<html>`. The
toggle in the sub-nav switches to dark and stores the choice in
`localStorage`, and an inline script in `<head>` re-applies it before first
paint so a returning reader never sees a flash of the wrong theme.

The OS preference is honoured only for a reader who has never used the toggle
and whose page somehow carries no `data-theme` at all. Both palettes are
defined in the "Theme" blocks at the top of `styles.css`.

To drop dark mode entirely, delete the toggle markup, the
`:root[data-theme="dark"]` block, and the `prefers-color-scheme` block.

## Masthead

Two parts. A grid with the name, standfirst, and contact block on the left and
the portrait on the right, then a full-width facts strip underneath spanning
both columns. The strip is what keeps the header from growing a hole: the
portrait makes the right column tall, so putting the facts beside it left dead
space under the text.

Two traps if you edit it:

- `.portrait` needs `height: auto`. The `height="200"` attribute is a
  presentational hint, and without `height: auto` both dimensions are definite
  and `aspect-ratio: 1 / 1` is silently ignored.
- The facts strip sits inside its own `.wrap` so its rule aligns with the text
  column. Putting `.wrap` on the `<dl>` itself and then setting a `margin`
  shorthand kills the auto centering.

## Layout

Projects and roles use a two-column grid: a sticky metadata rail
(`.project-aside`) and a body column capped at a reading measure. Below `52rem`
the rail collapses into an inline row above the heading. The knobs are on
`:root`:

| Token | Purpose |
|---|---|
| `--wrap` | Outer page width |
| `--aside` | Metadata rail width |
| `--measure` | Reading measure for body text |

Two specificity traps are worth knowing before editing `styles.css`:

- `.project-body p:not([class])` carries the default paragraph margin. A new
  classed paragraph inside a project body needs its own rule scoped under
  `.project-body`, or it will pick up nothing.
- `.project:first-of-type` zeroes the top padding, which is right on the index
  and wrong on a detail page. `.project.project-page` exists to outrank it.

## Adding a project

1. Copy an existing file in `projects/`, change the slug and content, and fix
   the `NN / NN` counter on every project page.
2. Fix the previous/next links in `.pager` on the neighbouring pages.
3. Add an `<article class="project work-item">` block to `#work` in
   `index.html`.

## Figures

Three kinds, all defined in `styles.css` and all wider than the reading
measure (`--measure-wide`):

- `figure.diagram` wraps an inline `<svg>`. Diagrams carry no colour of their
  own: they use the `.dg-*` classes, which read from the theme tokens, so they
  work in light and dark without a second copy.
- `figure.code-figure` wraps `<pre><code>`. Keep lines under about 60
  characters or they will scroll horizontally.
- `figure.shot` wraps a screenshot in `images/`, linked to the full-size file.

Screenshots were captured by running each project locally. Two notes if you
recapture them: the midterm frontend container serves the built SPA with no
API proxy, so `/api/*` returns `index.html` and the UI renders `0` and `NaN`
unless something proxies to the backend the way Caddy does in production. And
populating Touse fully needs the market-data ETL, so its screenshot is the one
committed in that repo under `frontend/public/screenshots/`.

## Favicons

`favicon.svg` is the source. The raster versions are generated from it:

```bash
rsvg-convert -w 32  -h 32  favicon.svg -o favicon-32x32.png
rsvg-convert -w 180 -h 180 favicon.svg -o apple-touch-icon.png
```

## Printing

`@media print` is defined: the page prints as a clean CV with the nav, footer,
and link underlines removed, and projects and roles set not to break across
pages.
