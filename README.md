# Personal site

A small static site. No build step, no dependencies, no framework. Open
`index.html` or serve the folder:

```bash
python3 -m http.server 8000
```

## Pages

```
index.html                        landing: intro, work list, also built, education, experience, tools; contact is the footer
projects/records-search.html      Public Records Search
projects/fantasy-edge.html        Fantasy Edge
projects/knock.html               Knock
projects/llm-evaluation.html      LLM Evaluation Framework
projects/chassis.html             Chassis
projects/sideline.html            Sideline
projects/touse.html               Touse
projects/cartographer.html        Cartographer (also built)
projects/job-search-agent.html    Job Search Agent (also built)
projects/midterm-forecast.html    2026 Midterm Forecast (also built)
styles.css                        one stylesheet for every page
script.js                         theme toggle + current-section marker; nothing depends on it
images/                           screenshots, captured by running each project locally
```

The index carries a short summary per project and links out to a detail page.
The detail pages hold the actual engineering: the problem, the approach, the
part that was hard, and the limits.

All content lives in the HTML. There is no data object to render from, so the
pages work with JavaScript disabled and search engines index the real text.

## House style

- **Write it the way you'd say it.** Contractions (I'm, it's, doesn't), short
  sentences, no "X rather than Y" contrasts, and no lines written to sound wise.
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

## Deploying to GitHub Pages

The repo is served from a project path (`/portfolio-website/`), and every asset
reference is relative, so it works from a subpath without changes.

**Bump `ASSET_V` whenever `styles.css` or `script.js` changes.** Those files are
linked as `styles.css?v=N`. Without the version, a browser that cached an older
`styles.css` at the same URL keeps serving it against the new markup, and the
page renders as unstyled HTML on a stale background. That is a real failure mode
this site already hit once, and a hard refresh only fixes it for whoever does it.

`.nojekyll` is present so Pages publishes the files as-is instead of running
them through Jekyll.

## Typefaces

Two IBM Plex faces: Plex Serif for the name and headings, Plex Sans for
everything else, labels included. Labels are in sentence case at normal letter
spacing, not small tracked capitals. Code uses the system's own monospace face,
so Plex Mono isn't loaded at all.

Labels inside the SVG diagrams are positioned by hand, so check for collisions
after editing any `.dg-band` or `.dg-src` text.

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

The name and the links (Email, GitHub, LinkedIn, Résumé on request) on one
line, then a short intro in `.intro`, which is also the `#about` anchor. The
links wrap under the name when the line runs out of room. There's no portrait
for now; `.portrait` is still in the stylesheet for when one goes back in.

The résumé isn't posted on the site. Its link, here and in every footer, opens
an email asking for it.

One trap if you add it back: `.portrait` needs `height: auto`. The
`height="200"` attribute is a presentational hint, and without `height: auto`
both dimensions are definite and `aspect-ratio: 1 / 1` is silently ignored.

## Layout

Project pages and roles use a two-column grid: a sticky metadata rail
(`.project-aside`) and a body column capped at a reading measure. Below `52rem`
the rail collapses into an inline row above the heading. The index lists
projects more lightly: each `.work-item` is a row with a sentence or two and its
links, and the screenshot beside it; the facts, numbers and stack are on the
project pages. The knobs are on `:root`:

| Token | Purpose |
|---|---|
| `--wrap` | Outer page width |
| `--aside` | Metadata rail width |
| `--measure` | Reading measure for body text |

Two specificity traps are worth knowing before editing `styles.css`:

- `.project-body p:not([class])` carries the default paragraph margin. A new
  classed paragraph inside a project body needs its own rule scoped under
  `.project-body`, or it will pick up nothing.
- `.project:first-of-type` zeroes the top padding, which is wrong on a detail
  page. `.project.project-page` exists to outrank it.

## Adding a project

1. Copy an existing file in `projects/` and change the slug and content.
2. Fix the previous/next links in `.pager` on the neighbouring pages.
3. Add an `<article class="work-item">` row to `#work` in `index.html`: a
   sentence or two, its links and the screenshot.

## Figures

Three kinds, all defined in `styles.css` and all wider than the reading
measure (`--measure-wide`):

- `figure.diagram` wraps an inline `<svg>`. Diagrams carry no colour of their
  own: they use the `.dg-*` classes, which read from the theme tokens, so they
  work in light and dark without a second copy.
- `figure.code-figure` wraps `<pre><code>`. Keep lines under about 60
  characters or they will scroll horizontally.
- `figure.shot` wraps a screenshot in `images/`, linked to the full-size file.

Screenshots were captured by running each project locally, with two
exceptions. Knock's come from its public sample at knockapply.com/demo (a
made-up person, so no one's real job search is on the page), except Today,
which the sample doesn't have: that one is the screenshot in Knock's own
README, the same made-up person on a local run, with the top bar cropped off.
And the Fantasy Edge scoreboard was taken from the live sample league at
edgefantasy.us. Two notes if you
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
