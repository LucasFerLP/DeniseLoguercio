# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + Tailwind CSS, deployed to Vercel.

## Users

Visitors discovering Denise Lo Guercio's printmaking work — primarily through her Instagram (@deniseloguercio_-) — including gallery curators, potential collectors/buyers, and fellow artists. They arrive wanting to see the work itself with minimal friction.

## Product Purpose

A personal portfolio site for Denise Lo Guercio, an artist who makes grabados (prints/engravings). It exists to present her work with the quality and quiet confidence of a gallery presentation, and to give people a place to point to beyond her Instagram feed.

## Positioning

Not a generic "artist template" — a portfolio built around the specific texture and physicality of printmaking (grabados), where the work itself is the entire argument. No sales copy, no marketing language competing with the images.

## Operating Context

Single-page (for now) portfolio: hero introduction, a gallery of works, a simple footer. No CMS, no blog, no shop — this is a first version meant to exist and be linkable.

## Capabilities and Constraints

- 9 real photographs of finished grabados are available at `assets/grabado-1.jpeg` … `assets/grabado-9.jpeg` and must be used as the actual gallery content (no placeholders, no stock/generated art).
- No case studies, prices, dimensions, edition sizes, or materials are provided per piece — do not fabricate this metadata. If per-piece detail is desired later, it is a future iteration.
- No artist bio/statement text was provided — do not invent one. The hero uses her name and "Portfolio de Arte" as a subtitle, per explicit instruction.
- No email or contact form was requested; only the Instagram link belongs in the footer.
- Site is Spanish-language (matching the brief and the artist's audience).

## Brand Commitments

- Name: Denise Lo Guercio.
- Instagram: @deniseloguercio_- (linked exactly as given).
- No existing logo, palette, or type system — this is a first visual identity for the site.

## Evidence on Hand

- 9 grabado photographs in `assets/` (grabado-1.jpeg … grabado-9.jpeg), to be optimized and served from `public/`.
- No other copy, bio, press, or testimonials on hand.

## Product Principles

1. The work is the interface — layout, motion, and type exist to let the grabados read clearly, never to compete with them.
2. Restraint over decoration — generous whitespace and a quiet type system over any "artistic" chrome.
3. Real content only — no filler bios, fake testimonials, or placeholder metadata; ship what is actually known and leave the rest out.
4. Motion is purposeful, not decorative — entrance and hover animations should feel considered (Motion/Framer-Motion-driven, easing-conscious), never gratuitous.

## Accessibility & Inclusion

No specific requirement provided; standard web accessibility (semantic structure, alt text per artwork, visible focus states, sufficient contrast) applies by default.
