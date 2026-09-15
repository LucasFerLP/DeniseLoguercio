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
  mat: "#ffffff"
  mat-dark: "#1c1c19"
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
- Hairline rules stand in for both dividers and depth; no shadows, no gradients, no rounded corners — with one deliberate, narrow exception: `backdrop-blur` on the Studio Carousel's controls, for legibility over a photo, never as ambient decoration.
- Motion is quiet and precise: the wordmark wipes in like ink rolled onto paper, everything else staggers in with a plain fade/rise, hover is a fast registration-mark strike.

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
- **About:** heading + status line on the left, the Studio Carousel on the right (`md:flex-row`, stacked on mobile). No forced bio copy (none was supplied — see PRODUCT.md's Evidence on Hand). Same horizontal padding rhythm as the other sections.
- **Footer:** simple flex row (stacks on mobile), colophon line left, Instagram link right.

## Elevation & Depth

Flat by design almost everywhere — no shadows on any UI chrome (nav, buttons, links, the gallery grid). Depth there is conveyed entirely through hairline rules (`Paper Line`, 1px) and the hover state's scale/brightness lift on gallery images. A system using registration marks as its visual grammar earns flatness; a shadow on a button or a link would read as an unrelated, borrowed material.

The one deliberate exception is physical, not decorative: the Studio Carousel's passepartout mat carries `shadow-sm`, because it represents an actual mounted photograph sitting slightly off the page — the same logic a real print-in-a-mat has a faint cast shadow. That single soft, blurred shadow (never a hard offset "sticker" shadow) is load-bearing for the mat reading as an object rather than a color swap; it does not open the door to shadows on buttons, cards, or nav chrome.

### Named Rules
**The Flat-By-Default Rule.** No `box-shadow` on UI chrome — nav, links, buttons, the gallery grid. Separation there comes from whitespace and hairlines only. (The Studio Carousel's mat is the one named exception; see below.)

**The Legibility-Glass Exception.** `backdrop-blur` exists in exactly one place: the Studio Carousel's controls, which sit directly on top of a photograph whose tone is unpredictable. This is legibility, not decoration — glass earns its place only where a control must stay readable over genuinely variable content underneath it, never as an ambient "premium" texture on a surface that could just as well be solid. It never gets rounded corners or its own shadow (that would be importing the whole iOS material, not solving the contrast problem), and it's built from the system's own `paper`/`paper-line` tokens at partial opacity, not a new white/black pulled from outside the palette — so it still reads as this system's glass, calibrated in, not a borrowed one pasted on.

**The Passepartout Exception.** The Studio Carousel's photo sits inside a solid `--mat` card (`#ffffff` light / `#1c1c19` dark — deliberately *not* the same value as `--paper`, so the mat visibly separates from the page), a hairline `paper-line` border, and one soft `shadow-sm`. This is the system's only card-with-shadow, justified because these are documentary photos framed like a physical print, not UI chrome. It does not license shadows or "card" treatment anywhere else.

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

### Studio Carousel (signature component)
- **Purpose:** portrait photos of the artist at work, in the About section, next to the (currently placeholder) bio text.
- **Passepartout:** the whole carousel sits inside a `--mat` card (`p-3`/`sm:p-4`, `border-paper-line`, `shadow-sm` — see The Passepartout Exception) so the photo reads as a mounted print, not a bleed image fused with the page.
- **Frame:** inside the mat, `aspect-[4/5]`, `object-cover`, sharp corners — the one place in the system a photo (not a plate) is deliberately cropped to a fixed shape, since these are documentary photos, not the artwork itself; The Whole Plate Rule governs grabados, not this.
- **Controls:** prev/next chevrons in the Legibility-Glass treatment (`backdrop-blur-md`, `bg-paper/30`, `border-paper-line/50`) — translucent enough to always sit on the photo without a solid patch, opaque enough to stay readable regardless of what's underneath. Rest opacity 0.85, hover/focus → opacity 1 + border shifts to Proof Red (the same interactive-accent cue as everywhere else), press → `scale(0.92)`.
- **Index:** "01 / 04" lives *below* the mat, right-aligned, `tracking-[0.2em]`, no background, no border — a signature under a framed print, not a floating badge. It moved out from inside the frame entirely; it never overlaps the photo.
- **Motion:** slides cross-fade with a small directional slide (28px, 450ms, `--ease-in-out-strong`) driven by `AnimatePresence`; direction is tracked so next/prev always slide the correct way. The carousel itself fades/rises in on scroll like the gallery figures.
- **Interaction:** click/tap the chevrons, drag/swipe the photo (`drag="x"`, snaps back outside a velocity/distance threshold), or arrow keys when focused. No autoplay — this is browsed, not performed at the visitor.

### Theme Toggle (signature component)
- **Icon:** the registration mark again — the toggle draws its state from the same vocabulary as the hover mark and the Lightbox close control, never a sun/moon glyph. A center dot fills in (`RegistrationMark active`) when dark mode is on — the mark reads as "struck"/registered, empty when not.
- **Position:** left cell of the nav's 3-column grid (see Layout), always at a fixed `h-9 w-9`, so it never competes with or displaces the centered link group at any width.
- **Behavior:** `aria-pressed` reflects state; `title`/`aria-label` say what clicking does next ("Negativo" / "Cambiar a modo claro"), not what the icon is.

### Hero Entrance (signature motion)
- **Wordmark:** a `clip-path` wipe, `inset(0 100% 0 0)` → `inset(0 0% 0 0)`, 700ms, `cubic-bezier(0.77, 0, 0.175, 1)` (`--ease-in-out-strong`) — the name is set left-to-right like ink rolled onto paper by a brayer, not faded in. This is the one place `--ease-in-out-strong` is used: a wipe is an on-screen sweep, not a simple appear, so it takes the "moving/morphing" curve rather than `--ease-out-strong`. Deliberately a single technique, not layered with an opacity fade — mixing the two reads as muddy, not more sophisticated.
- Subtitle and baseline rule fade/rise in ~120ms after, `duration: 0.7s`, `--ease-out-strong`. The rule additionally grows in from `scaleX(0)` (`transform-origin: left`) over 0.9s.
- **Reduced motion:** `MotionConfig reducedMotion="user"` auto-neutralizes transform-based variants (the subtitle/rule's `y`/`scaleX`) but does *not* touch `clip-path` — it isn't a transform. The wordmark explicitly checks `useReducedMotion()` and swaps to the same plain opacity fade the subtitle uses when the OS prefers reduced motion.

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
- **Do** build `backdrop-blur`/glass from the existing `paper`/`paper-line` tokens at partial opacity if you ever add another instance — never a bare `bg-white/30` or `bg-black/30` pulled from outside the palette.
- **Do** use the `--mat` token (not `--paper`) for the Studio Carousel's passepartout — it's deliberately a different value so the mounted photo separates from the page.

### Don't:
- **Don't** add a kicker/eyebrow label above any heading.
- **Don't** introduce shadows, gradients, rounded corners, or card chrome on UI elements (nav, buttons, links, gallery grid) — the system is flat and rectangular by commitment there. (The Studio Carousel's mat is the one named exception — see The Passepartout Exception.)
- **Don't** let the display wordmark exceed `6rem` at any breakpoint.
- **Don't** invent per-piece titles, prices, or edition data — none was provided; the numbering shown (N.01…N.11) is a display index, not claimed edition data.
- **Don't** crop a plate (`object-cover`) anywhere to make it fit a cell or a viewport — the layout adapts to the plate, never the other way around.
- **Don't** set `column-fill: auto` on the gallery's column container without also giving it an explicit height — verified to collapse every item into the first column.
- **Don't** use a sun/moon icon (or any icon outside the registration-mark family) for the theme toggle.
- **Don't** derive the default theme from `prefers-color-scheme` — default is always Paper/light until the user explicitly toggles.
- **Don't** filter, invert, or otherwise recolor an artwork image for any theme — confirmed and reverted once already; see The Untouched Plate Rule.
- **Don't** add `backdrop-blur`/glass anywhere else in the system "to match" the carousel controls — it is a legibility fix for one specific case (a control over unpredictable photo content), not a texture the rest of the site earns. A glass card floating over the flat paper ground is exactly the borrowed-material failure The Flat-By-Default Rule exists to block.
- **Don't** round the corners or add a shadow to the carousel's glass controls — that would import the whole iOS-glass material instead of solving the one contrast problem it exists for.
- **Don't** crop a grabado plate to a fixed aspect ratio the way the Studio Carousel crops its photos — the carousel photos are documentary, not the artwork; The Whole Plate Rule still governs every grabado.
