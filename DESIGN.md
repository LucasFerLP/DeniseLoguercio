---
name: Denise Lo Guercio — Portfolio de Arte
description: Grabados presentados con la disciplina de una grilla suiza y el vocabulario técnico de la propia imprenta.
colors:
  paper: "#f6f7f6"
  paper-line: "#dcdedb"
  ink: "#151513"
  ink-soft: "rgb(21 21 19 / 62%)"
  proof: "#c1341c"
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
  gallery-gutter: "12px"
  gallery-gutter-md: "16px"
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

The system translates the Swiss International Style poster grid — one disciplined module ordering a series — through printmaking's own technical vocabulary: registration crosses, crop marks, and edition numbering become the site's typographic and structural language instead of decorative chrome. The premise is that a printmaker's website should read like an object from the print world, not a generic portfolio template. Cool unprinted-paper white replaces the warm cream/ivory that this category defaults to; a single proof-mark red is reserved entirely for the active/hover state, never used decoratively. The grid is strict and asymmetric by design (large plates paired with stacked smaller ones), never an arbitrary Pinterest masonry.

Confirmed visual rejection: no cream/ivory grounds, no soft serif "artist template" display type, no decorative kicker/eyebrow labels, no card chrome (shadows, rounded corners) anywhere in the system.

**Key Characteristics:**
- Cool paper-white ground, near-black ink, one restrained proof-red accent used only on interaction.
- Objective grotesque display type (Archivo) paired with a technical mono (JetBrains Mono) for all labels and numbering.
- A strict, asymmetric CSS grid (dense-packed, large/small module rhythm) rather than free-flowing masonry.
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

- **Nav:** fixed to the viewport top, `h-14` mobile / `h-16` desktop, solid Paper background with a Paper Line bottom hairline, `z-50`. Links are centered as a group at every breakpoint (mobile and desktop alike). `html` carries `scroll-padding-top: 4rem` so anchor jumps never land under the bar.
- **Hero:** no forced viewport height — the section sizes to its content (name, subtitle, hairline rule) with `pt-24`→`pt-32` top padding to clear the fixed nav, and a modest bottom padding so the gallery's first row is visible without scrolling on most screens. Generous horizontal padding (`px-6` mobile → `px-14` desktop) persists; the whitespace economy moved from "tall empty hero" to "tight nav + short hero."
- **Shared container.** Nav, Hero, Gallery, About, and Footer all wrap their content in `mx-auto max-w-[1800px]` plus the exact same horizontal padding scale (`px-6` → `sm:px-10` → `md:px-14`), so their left/right edges align on every breakpoint *and* on very large monitors — beyond ~1912px wide, the content column centers instead of stretching edge to edge indefinitely. This is load-bearing: never give one section a different outer max-width, a different padding scale, or apply the container classes directly to an element that is itself a flex item of a `flex`/`flex-col` parent (`mx-auto` cancels flex `stretch` sizing there — wrap the content in its own inner `div` instead, the way Gallery/About/Footer/Hero all do).
- **Gallery:** CSS grid, `grid-flow-row-dense`, 2 columns on mobile → 4 columns from `md` (768px) up. Items are one of three module shapes — `sm` (1×1), `tall` (1×2, for portrait-oriented plates), `lg` (2×2) — assigned per artwork to roughly match its own aspect ratio; dense packing closes every gap automatically. Row height is viewport-relative (`26vw` mobile → `15vw` desktop). The *inner* gap between images stays tight (12px → 16px, a technical registration gap) — only the inner gutter is tighter than the macro whitespace elsewhere, never the outer margin.
- **Gallery image mat.** Every cell reserves an 8px (12px from `sm`) inset around the artwork — a `<button>` padding, not the image's own margin — and the image sits inside it at `object-contain`. The plate is never cropped; the reserved inset reads as a paper mat/passe-partout, consistent with how prints are actually framed. Module shape is chosen to *minimize* visible mat, never to justify cropping.
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
- **Shape:** hard-edged rectangle, `object-fit: contain` inside a padded mat (see Layout), no radius, no border at rest. The whole cell is a `<button>` — clicking any plate opens it in the Lightbox.
- **Hover (pointer: fine only):** image scales to 1.035 and brightens to 1.04 over 260ms (`cubic-bezier(0.23, 1, 0.32, 1)`); simultaneously a drawn SVG registration mark (circle + cross, Proof Red) fades in at the top-left corner and a mono "N.0X" index label (solid Ink Soft — it sits in the paper mat, not over the artwork, so no blend-mode trick is needed) fades in bottom-right. Both use plain CSS transitions, gated behind `@media (hover: hover) and (pointer: fine)` so touch devices never get a false sticky hover.
- **Entrance:** fades/rises in (`opacity 0→1`, `y 24→0`) on scroll, once, staggered by up to ~180ms across the visible batch.

### Lightbox (signature component)
- **Purpose:** full plate viewing on click, keyboard (←/→/Esc) and touch navigable, one at a time.
- **Backdrop:** solid Ink, no blur/glass — the one deliberately dark surface in an otherwise flat-paper system, justified because it is a protected-focus, image-viewing state (not a decorative modal). Click anywhere outside the plate closes it.
- **Plate:** `object-contain`, capped at `88vw`/`80vh` (`85vh` from `sm`), never cropped, real `width`/`height` passed to `next/image` from `lib/artworks.ts` to avoid layout shift.
- **Close control:** the same drawn registration-mark glyph as the gallery hover mark, in Proof Red, top-right, with a small "CERRAR — ESC" mono caption beneath it — the control language stays inside the system's own vocabulary rather than borrowing a generic "×" glyph.
- **Prev/Next:** drawn chevron SVGs (never a Unicode arrow), Paper at 70% opacity at rest brightening to Proof Red on hover/focus, positioned at the vertical center of the left/right edges; wrap around at the ends.
- **Index label:** bottom-left, "N.0X" in Paper at 70%, the same numbering as the hover mark — the lightbox is a zoomed continuation of the grid, not a different vocabulary.
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

### Hero Entrance (signature motion)
- Wordmark, subtitle, and baseline rule fade/rise in with a ~120ms stagger, `duration: 0.7s`, easing `cubic-bezier(0.23, 1, 0.32, 1)`. The baseline rule additionally grows in from `scaleX(0)` (`transform-origin: left`) over 0.9s. Respects `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`.

## Do's and Don'ts

### Do:
- **Do** keep Proof Red exclusive to interactive/active states.
- **Do** use JetBrains Mono, uppercase, tracked, for every label/numbering role — never for body prose (there is none).
- **Do** keep the gallery grid dense-packed (`grid-flow-row-dense`) so `lg`/`tall`/`sm` modules never leave gaps.
- **Do** gate every hover effect behind `(hover: hover) and (pointer: fine)`.
- **Do** show every plate at `object-contain`, full and uncropped, in both the grid and the Lightbox — the padded mat is the cost of that promise, not a defect.
- **Do** draw every icon (registration mark, chevron, close control) as SVG paths in the system's own stroke weight — never a Unicode glyph or emoji standing in for one.

### Don't:
- **Don't** add a kicker/eyebrow label above any heading.
- **Don't** introduce shadows, gradients, rounded corners, or card chrome — the system is flat and rectangular by commitment.
- **Don't** let the display wordmark exceed `6rem` at any breakpoint.
- **Don't** invent per-piece titles, prices, or edition data — none was provided; the numbering shown (N.01…N.09) is a display index, not claimed edition data.
- **Don't** crop a plate (`object-cover`) anywhere to make it fit a cell or a viewport — resize the cell/module, never the image.
