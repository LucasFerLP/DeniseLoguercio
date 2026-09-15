---
name: Denise Lo Guercio — Portfolio de Arte
description: Grabados presentados con la disciplina de una grilla suiza y el vocabulario técnico de la propia imprenta.
colors:
  paper: "#f6f7f6"
  paper-line: "#dcdedb"
  ink: "#151513"
  ink-soft: "rgb(21 21 19 / 62%)"
  proof: "#c1341c"
  paper-dark: "#121210"
  paper-line-dark: "rgb(246 247 246 / 14%)"
  ink-dark: "#f6f7f6"
  ink-soft-dark: "rgb(246 247 246 / 64%)"
  proof-dark: "#ff5a3c"
  scrim: "#121210"
  scrim-text: "rgb(246 247 246 / 70%)"
  scrim-accent: "#ff5a3c"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 13vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.03em"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.625rem – 0.875rem"
    fontWeight: 400
    letterSpacing: "0.08em – 0.14em"
    fontFeature: "uppercase"
spacing:
  gallery-gutter: "24px"
components:
  gallery-hover-mark:
    textColor: "{colors.proof}"
  footer-link:
    textColor: "{colors.ink}"
  footer-link-hover:
    textColor: "{colors.proof}"
  nav-link:
    textColor: "{colors.ink}"
  nav-link-hover:
    textColor: "{colors.proof}"
---

# Design System: Denise Lo Guercio — Portfolio de Arte

## Overview

**Creative North Star: "Registration Grid"**

The system carries printmaking's own technical vocabulary — registration crosses, crop marks, and edition numbering — as the site's typographic and interaction language instead of decorative chrome. The premise is that a printmaker's website should read like an object from the print world, not a generic portfolio template. Cool unprinted-paper white replaces the warm cream/ivory that this category defaults to; a single proof-mark red is reserved entirely for the active/hover state, never used decoratively.

The gallery itself is a true masonry (CSS multi-column, `break-inside-avoid`), each plate shown at its own natural aspect ratio with zero cropping — a deliberate revision of the system's original strict modular grid, made when that grid's fixed cells forced letterboxing/cropping trade-offs the brief explicitly rejected. The registration-mark vocabulary, the reserved accent, and the flat hairline language are what "Registration Grid" actually names; the literal grid mechanism is not the point and was swapped out once it stopped serving the plates.

Confirmed visual rejection: no cream/ivory grounds, no soft serif "artist template" display type, no decorative kicker/eyebrow labels, no card chrome (shadows, rounded corners) anywhere in the system.

**Key Characteristics:**
- Cool paper-white ground, near-black ink, one restrained proof-red accent used only on interaction.
- Objective grotesque display type (Archivo) paired with a technical mono (JetBrains Mono) for all labels and numbering.
- A true masonry column layout — every plate shown complete, at its own aspect ratio, never cropped and never letterboxed.
- Hairline rules stand in for both dividers and depth; no shadows, no gradients, no rounded corners.
- Motion is quiet and precise: staggered fade/rise on entrance, a fast registration-mark hover strike on interaction.

## Colors

Two neutrals and one reserved accent; the accent's rarity is the entire point.

### Primary
- **Proof Red** (`#c1341c`): reserved exclusively for the active/hover state — the gallery hover mark, link hover/active states, the text-selection color, and the focus ring. Never appears at rest.

### Neutral
- **Paper** (`#f6f7f6`): the page ground. A cool, barely-there off-white — deliberately not cream or ivory — read as uncoated stock under daylight gallery light.
- **Paper Line** (`#dcdedb`): hairline dividers, grid gutters' implicit edge, borders. Always 1px, never thicker.
- **Ink** (`#151513`): primary text and the display wordmark. A soft near-black, not pure `#000`.
- **Ink Soft** (`rgb(21 21 19 / 62%)`): secondary/label text, tinted from ink itself (never a separate gray), used for the mono kicker and footer copy. Verified ≥4.5:1 against Paper.

### Named Rules
**The One Red Rule.** Proof Red appears only in response to interaction (hover, active, focus, selection). A page with Proof Red visible at rest is a bug, not a variant.

## Theme ("Negativo")

The whole system is one set of semantic tokens (`--paper`, `--paper-line`, `--ink`, `--ink-soft`, `--proof`), not two hardcoded palettes. A `.dark` class on `<html>`, toggled by the nav's `ThemeToggle`, redefines those five CSS custom properties; every component already reads them (`bg-paper`, `text-ink`, etc.), so nothing else has to know a theme exists. Persisted to `localStorage` (`theme: 'light' | 'dark'`), applied before paint by a `beforeInteractive` `next/script` in the root layout so there is no flash. Default is Paper/light — the toggle never reads `prefers-color-scheme`; only an explicit prior click switches it.

- **Dark values:** Paper → `#121210` (not pure black), Ink → `#f6f7f6`, Paper Line → `rgb(246 247 246 / 14%)`, Ink Soft → `rgb(246 247 246 / 64%)`, Proof → `#ff5a3c` (brightened — the light-mode `#c1341c` only reads ~3.3:1 on the dark ground, short of the 4.5:1 text needs; `#ff5a3c` clears ~5.9:1).
- **The name is about the *surface*, not the plates.** "Negativo" names the flip of the site's own paper/ink — the artwork itself never gets a filter, an invert, or any other color alteration, in either theme. A grabado is paper-white and ink-black exactly as scanned; the point of dark mode is that ground now reads as a dark gallery wall the plate hangs on, not that the print itself changes. This was tried the other way (inverting the plate to a literal photographic negative) and reversed — the artwork's real colors are non-negotiable, full stop.
- **The gallery hover index label is the one place that must NOT use the theme token.** `mix-blend-mode: difference` needs a source color that is always light regardless of theme (difference against near-black is a no-op — the label would vanish in dark mode). It's hardcoded `#f6f7f6`, not `text-ink`/`text-paper`. This is unrelated to the plate itself, which (per the rule above) is never touched.

### Named Rules
**The Fixed Scrim Rule.** The Lightbox is a deliberately dark image-viewing surface in *both* themes — it does not swap with the page. It uses its own fixed tokens (`--scrim` `#121210`, `--scrim-text` `rgb(246 247 246 / 70%)`, `--scrim-accent` `#ff5a3c`), never `--paper`/`--ink`/`--proof`.

**The Untouched Plate Rule.** Theme never alters a plate's color — no invert, no hue/color filter, in either mode. The existing hover micro-lift (`brightness(1.04)`, a pre-existing interaction cue, not a theme effect) is the one exception and applies identically regardless of theme.

## Typography

**Display Font:** Archivo (objective grotesque; weights 400–700 loaded)
**Body/Label Font:** JetBrains Mono (technical, tracked, always uppercase when used as a label)

**Character:** A confident, print-literate grotesque paired with a technical monospace that does the job registration numbers and colophon lines do on an actual print — never used as a "tech" costume, only for genuine labels and numbering.

### Hierarchy
- **Display** (600, `clamp(3rem, 13vw, 6rem)`, line-height 0.94, tracking -0.03em): the hero wordmark only. Capped at 6rem — it never grows past that regardless of viewport.
- **Label** (400, 0.625rem–0.875rem, tracking 0.08em–0.14em, uppercase, JetBrains Mono): subtitle under the hero name, footer colophon line, the nav links, the per-piece "N.0X" hover mark. This is the system's only secondary text role; there is no separate "body" role because the site carries no paragraph copy. The smallest step (10–11px) is reserved for the two tightest contexts — the gallery hover index and the mobile nav bar — never for anything meant to be read at a glance from a distance.

### Named Rules
**The No-Eyebrow Rule.** Label type never precedes a heading as a kicker. It only follows (as a subtitle) or stands alone (footer, hover mark).

## Layout

Single scrolling page under a fixed nav bar: compact hero → dense asymmetric gallery grid → about → colophon footer. No additional routes; every nav link is an in-page anchor.

- **Nav:** fixed to the viewport top, `h-14` mobile / `h-16` desktop, Paper background with a Paper Line bottom hairline, `z-50`. Internally a `grid-cols-[2.25rem_1fr_2.25rem]`: the `ThemeToggle` in the fixed-width left cell, the link group centered in the middle `1fr` cell, and an equal-width empty spacer on the right — the spacer exists purely so the links stay optically centered on the *viewport*, not just the remaining space next to the toggle. Links are centered at every breakpoint. `html` carries `scroll-padding-top: 4rem` so anchor jumps never land under the bar.
- **Hero:** no forced viewport height — the section sizes to its content (name, subtitle, hairline rule) with `pt-24`→`pt-32` top padding to clear the fixed nav, and a modest bottom padding so the gallery's first row is visible without scrolling on most screens. Generous horizontal padding (`px-6` mobile → `px-14` desktop) persists; the whitespace economy moved from "tall empty hero" to "tight nav + short hero."
- **Shared container.** Nav, Hero, Gallery, About, and Footer all wrap their content in `mx-auto max-w-[1800px]` plus the exact same horizontal padding scale (`px-6` → `sm:px-10` → `md:px-14`), so their left/right edges align on every breakpoint *and* on very large monitors — beyond ~1912px wide, the content column centers instead of stretching edge to edge indefinitely. This is load-bearing: never give one section a different outer max-width, a different padding scale, or apply the container classes directly to an element that is itself a flex item of a `flex`/`flex-col` parent (`mx-auto` cancels flex `stretch` sizing there — wrap the content in its own inner `div` instead, the way Gallery/About/Footer/Hero all do).
- **Gallery.** True masonry via CSS multi-column: `columns-1` → `sm:columns-2` → `md:columns-3` → `lg:columns-4`, `gap-6` (24px, the one gutter in the system as wide as the macro whitespace elsewhere — a masonry gutter has to read as air, not a registration hairline). Each plate is a `break-inside-avoid` figure with `mb-6`; the image itself is `next/image` with its real `width`/`height` (from `lib/artworks.ts`) and `w-full h-auto` — no `fill`, no forced aspect-ratio, no `object-cover`. Columns use the browser default `column-fill: balance`; do not override it to `auto` — without an explicit container height `auto` pours every item into the first column and leaves the rest empty (verified, not a hypothetical). Balance mode's ragged, unequal-height column bottoms are correct masonry behavior, not a bug to chase.
- **About:** a single heading + one status line under it; no forced bio copy (none was supplied — see PRODUCT.md's Evidence on Hand). Same horizontal padding rhythm as the other sections.
- **Footer:** simple flex row (stacks on mobile), colophon line left, Instagram link right.

## Elevation & Depth

Flat by design — no shadows anywhere in the system. Depth is conveyed entirely through hairline rules (`Paper Line`, 1px) and the hover state's scale/brightness lift on gallery images. A system using registration marks as its visual grammar earns flatness; a shadow would read as an unrelated, borrowed material.

### Named Rules
**The Flat-By-Default Rule.** No `box-shadow` anywhere. Separation comes from whitespace and hairlines only.

## Shapes

No rounded corners anywhere (`border-radius: 0` throughout, the Tailwind default). Every edge is a hard rectangle, consistent with the grid/registration-mark language. The one drawn glyph, the registration mark icon, is the sole circular form in the system and exists specifically because it represents a real printmaking mark — it is the exception that proves the rule, not a precedent for rounding anything else.

## Components

### Gallery Item (signature component)
- **Shape:** no fixed box at all — the figure is exactly the size of the plate it holds (`w-full h-auto`, real aspect ratio), no radius, no border at rest. The whole figure is a `<button>` — clicking any plate opens it in the Lightbox.
- **Hover (pointer: fine only):** image scales to 1.035 and brightens to 1.04, identically in both themes (see The Untouched Plate Rule), over 260ms (`cubic-bezier(0.23, 1, 0.32, 1)`); simultaneously a drawn SVG registration mark (circle + cross, Proof Red) fades in at the top-left corner and a mono "N.0X" index label fades in bottom-right, `mix-blend-mode: difference` against a hardcoded `#f6f7f6` (see Theme — this one can't use the theme token) so it stays legible over any artwork.
- **Entrance:** fades/rises in (`opacity 0→1`, `y 24→0`) on scroll, once, staggered by up to ~180ms across the visible batch.

### Lightbox (signature component)
- **Purpose:** full plate viewing on click, keyboard (←/→/Esc) and touch navigable, one at a time.
- **Backdrop:** solid `bg-scrim` (fixed dark, both themes — see Theme above), no blur/glass. Justified because it is a protected-focus, image-viewing state (not a decorative modal). Click anywhere outside the plate closes it.
- **Plate:** `object-contain`, capped at `88vw`/`80vh` (`85vh` from `sm`), never cropped, real `width`/`height` passed to `next/image` from `lib/artworks.ts` to avoid layout shift. Rendered in its true colors regardless of theme (see The Untouched Plate Rule) — the fixed dark `scrim` behind it is what makes it pop, not a filter on the image.
- **Close control:** the same drawn registration-mark glyph as the gallery hover mark, in `scrim-accent`, top-right, with a small "CERRAR — ESC" mono caption beneath it in `scrim-text` — the control language stays inside the system's own vocabulary rather than borrowing a generic "×" glyph.
- **Prev/Next:** drawn chevron SVGs (never a Unicode arrow), `scrim-text` at rest brightening to `scrim-accent` on hover/focus, positioned at the vertical center of the left/right edges; wrap around at the ends.
- **Index label:** bottom-left, "N.0X" in `scrim-text`, the same numbering as the hover mark — the lightbox is a zoomed continuation of the grid, not a different vocabulary.
- **Motion:** backdrop fades (`opacity`, 250ms); the plate itself enters/exits from `scale(0.97)` + fade (300ms, `cubic-bezier(0.23, 1, 0.32, 1)`) — never `scale(0)`. Driven by Motion's `AnimatePresence` since this is a mount/unmount transition.
- **Behavior:** traps body scroll while open, moves focus to the close control on open and returns it to the triggering plate's button on close, closes on `Escape` or a backdrop click (not on a click on the plate itself).

### Nav Link (signature component)
- **Style:** Ink text, Label typography, no underline at rest.
- **Hover (pointer: fine only):** text shifts to Proof Red and a 1px underline draws in left-to-right (`scaleX(0)→1`, `transform-origin: left`, 220ms `cubic-bezier(0.23, 1, 0.32, 1)`) — the same "mark strikes in" grammar as the gallery hover mark, applied to type.
- **Focus-visible:** the underline draws in exactly as on hover, independent of pointer capability, so keyboard users get the same affordance.
- **Active:** `scale(0.97)` press feedback.

### Footer Link
- **Style:** Ink text, Paper Line underline at rest.
- **Hover:** text and underline shift to Proof Red.
- **Active:** `scale(0.97)` press feedback.

### Theme Toggle (signature component)
- **Icon:** the registration mark again — the toggle draws its state from the same vocabulary as the hover mark and the Lightbox close control, never a sun/moon glyph. A center dot fills in (`RegistrationMark active`) when dark mode is on — the mark reads as "struck"/registered, empty when not.
- **Position:** left cell of the nav's 3-column grid (see Layout), always at a fixed `h-9 w-9`, so it never competes with or displaces the centered link group at any width.
- **Behavior:** `aria-pressed` reflects state; `title`/`aria-label` say what clicking does next ("Negativo" / "Cambiar a modo claro"), not what the icon is.

### Hero Entrance (signature motion)
- Wordmark, subtitle, and baseline rule fade/rise in with a ~120ms stagger, `duration: 0.7s`, easing `cubic-bezier(0.23, 1, 0.32, 1)`. The baseline rule additionally grows in from `scaleX(0)` (`transform-origin: left`) over 0.9s. Respects `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`.

## Do's and Don'ts

### Do:
- **Do** keep Proof Red exclusive to interactive/active states.
- **Do** use JetBrains Mono, uppercase, tracked, for every label/numbering role — never for body prose (there is none).
- **Do** let the masonry columns produce a ragged bottom edge; balance mode's unequal column heights are the correct output, not a layout bug.
- **Do** gate every hover effect behind `(hover: hover) and (pointer: fine)`.
- **Do** show every plate complete and uncropped — real `width`/`height`, `w-full h-auto`, never `fill` or a forced `aspect-ratio` — in both the grid and the Lightbox.
- **Do** draw every icon (registration mark, chevron, close control) as SVG paths in the system's own stroke weight — never a Unicode glyph or emoji standing in for one.
- **Do** build any new themed element on the `--paper`/`--ink`/`--paper-line`/`--ink-soft`/`--proof` tokens so dark mode is automatic — never a hardcoded hex outside the token set.
- **Do** keep the Lightbox on its own fixed `--scrim`/`--scrim-text`/`--scrim-accent` tokens; it stays dark in both themes by design.

### Don't:
- **Don't** add a kicker/eyebrow label above any heading.
- **Don't** introduce shadows, gradients, rounded corners, or card chrome — the system is flat and rectangular by commitment.
- **Don't** let the display wordmark exceed `6rem` at any breakpoint.
- **Don't** invent per-piece titles, prices, or edition data — none was provided; the numbering shown (N.01…N.09) is a display index, not claimed edition data.
- **Don't** crop a plate (`object-cover`) anywhere to make it fit a cell or a viewport — the layout adapts to the plate, never the other way around.
- **Don't** set `column-fill: auto` on the gallery's column container without also giving it an explicit height — verified to collapse every item into the first column.
- **Don't** use a sun/moon icon (or any icon outside the registration-mark family) for the theme toggle.
- **Don't** derive the default theme from `prefers-color-scheme` — default is always Paper/light until the user explicitly toggles.
- **Don't** filter, invert, or otherwise recolor an artwork image for any theme — confirmed and reverted once already; see The Untouched Plate Rule.
