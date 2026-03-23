# On Track Page — Design Spec

**Date:** 2026-03-23
**Status:** Approved
**Scope:** `on-track.html` — the On Track page for marcellopaniccia.com

---

## 1. Overview

The On Track page prioritises visual impact and cinematic feel over pure data density. Photography and motion carry the page; race data and stats support rather than dominate. Inspired by the home page's aesthetic — full-width photography, GSAP scroll animations, Lenis smooth scroll — but with richer editorial content (defining moments, in-car footage, countdown).

Tone: athlete portfolio meets racing editorial. Cool and visually driven first, informative second.

---

## 2. Section Order

1. Hero
2. Stats Grid
3. Countdown to Next Race
4. Defining Moments
5. GoPro / In-Car Clips
6. Race Results
7. Photo Gallery
8. Car & Team
9. Social CTA
10. Footer (global)

---

## 3. Section Designs

### 3.1 Hero

- Full-viewport (`100vh`) background photo: `IMG_0110.jpg` (pack race start)
- Dark overlay gradient (bottom-heavy) so heading is legible
- GSAP parallax: same implementation as home page hero — photo lags behind scroll (moves up slower than viewport)
- **Overline:** `MAZDA MX-5 CUP USA · 2025` — Switzer, uppercase, wide letter-spacing, muted white
- **Heading:** `ON TRACK` — Gambarino, large (~10–14vw), white, with a short red (`#C32323`) underline bar beneath
- GSAP stagger entrance on load: overline fades in first, then heading letters stagger up
- No CTAs needed — hero is purely cinematic

---

### 3.2 Stats Grid

- Dark surface background (`#111111`)
- 4 cards in a single row (2×2 on mobile):
  | Stat | Value |
  |---|---|
  | RACES ENTERED | Placeholder (e.g. 12) |
  | CAR NUMBER | #19 |
  | SERIES | MX-5 CUP USA |
  | SEASON | 2025 |
- Count-up animation on ScrollTrigger enter for true metrics only (RACES ENTERED and SEASON count from 0; CAR NUMBER and SERIES fade in as static identifiers — no count-up)
- Each card: overline label (Switzer, muted, uppercase) + large number/value (Gambarino)
- Accent colors: red for CAR NUMBER, green for RACES ENTERED, white for SERIES and SEASON

---

### 3.3 Countdown to Next Race

- Full-width section, near-black background
- Large typographic countdown: `DD : HH : MM : SS` — Gambarino, very large (~8vw), white
- Small labels beneath each unit: `DAYS · HOURS · MINUTES · SECONDS` — Switzer, muted
- Below the clock: circuit name + date in red, e.g. `CIRCUIT DE LA SARTHE · APRIL 12, 2025`
- If the hardcoded target date has already passed when the page loads, automatically display `SEASON COMPLETE` in the same large Gambarino style instead of the clock. In this state: the `DD : HH : MM : SS` numerals and unit labels are hidden; the circuit name/date line below the clock is also hidden.
- JavaScript `setInterval` drives the countdown; target date is hardcoded (updated manually each round)
- GSAP fade + scale entrance on scroll enter

---

### 3.4 Defining Moments

- Section heading: `DEFINING MOMENTS` — Switzer, uppercase, overline-style, muted
- 3–4 "chapters" in alternating two-column layout (text left / image right, then image left / text right)
- Each chapter:
  - **Number:** large ghost numeral (e.g. `01`) centered horizontally behind the full chapter row (behind both columns regardless of layout direction), very low opacity, Gambarino
  - **Title:** short bold statement (e.g. *"First podium."*) — Gambarino, ~3rem
  - **Label:** date + circuit — Switzer, muted, uppercase, small
  - **Body:** 2–3 sentences of placeholder text
  - **Image:** one of the available on-track photos (see asset list below)
- All placeholder content — Marcello replaces after launch
- GSAP ScrollTrigger: each chapter fades + slides up on enter, image has mild parallax

**Chapter photo assignments (placeholder):**
| Chapter | Photo |
|---|---|
| 01 | `IMGC1342.jpg` |
| 02 | `IMGC1321.jpg` |
| 03 | `IMGC1190.jpg` |
| 04 | `73-_DSC8837.jpg` |

---

### 3.5 GoPro / In-Car Clips

- Dark fullscreen section, near-black background
- Section label: `IN THE CAR` — Switzer, uppercase, muted overline
- Horizontal scroll strip: 3 video placeholder slots side by side
- Each slot:
  - Fixed aspect ratio container (16:9), dark surface background with a subtle border
  - Centered play icon (SVG, white, ~48px) as placeholder
  - Short label below: e.g. `RACE START · ROUND 1` — Switzer, muted, small
  - On hover: border color shifts to red, play icon scales up slightly
- Videos are `<video>` tags with empty `src` as placeholders; Marcello drops in `src` attributes later. YouTube `<iframe>` embeds are a post-launch swap option if needed.
- Navigation: the strip is an `overflow-x: scroll` flex row with `scroll-snap-type: x mandatory`; each clip container uses `scroll-snap-align: start`. Arrow buttons scroll by exactly one card width (card + gap). Drag-to-scroll works natively via the overflow container.
- GSAP fade entrance on scroll enter

---

### 3.6 Race Results

- Section heading: `RACE RESULTS` — Switzer, uppercase
- Vertical card timeline: each card = one race round
- Card fields: Round number · Circuit name · Date · Position · Notes (optional, e.g. "P3 — fastest lap")
- Cards stack vertically with a left border accent (red `#C32323` for top-3 finishes, `rgba(255,255,255,0.15)` for all others)
- All placeholder data — build 8 realistic-looking dummy race entries to represent a typical MX-5 Cup USA season
- GSAP stagger: cards fade + slide up sequentially on scroll enter
- Simple, readable layout — not a full table, more editorial card style

---

### 3.7 Photo Gallery

- Section heading: `GALLERY` — Switzer, uppercase
- Dynamic masonry grid layout (CSS columns, 3 columns desktop / 2 tablet / 1 mobile)
- Photos: all available on-track assets — `IMGC0457.jpg`, `IMG_0110.jpg` (reused from hero), `IMGC1342.jpg`, `IMGC1321.jpg`, `IMGC1190.jpg`, `73-_DSC8837.jpg`, `IMG_9359.jpg`, `IMG_9317.jpg`, `21-_DSC6438.jpg`, `169-_DSC8016.jpg`
- GSAP ScrollTrigger stagger: images fade in as they enter the viewport
- Hover: subtle zoom (scale 1.03) with a short transition
- No lightbox for now (can be added post-Paper review)

---

### 3.8 Car & Team

- Two-column layout: left = photos, right = info
- **Left:** stacked car photo + livery shot (use `IMGC0457.jpg` and `IMG_0110.jpg` as placeholders until real livery shots are available)
- **Right:**
  - Overline: `THE MACHINE` — Switzer, uppercase, muted (consistent with all other section overlines)
  - Heading: `Mazda MX-5 Cup` — Gambarino
  - Key specs (small card grid, 2×2):
    - Engine: 2.0L Skyactiv-G
    - Power: ~160 hp
    - Series: Mazda MX-5 Cup USA
    - Car: #19
  - Short team blurb placeholder (2–3 sentences — Marcello fills in)
- GSAP fade + slide entrance on scroll enter

---

### 3.9 Social CTA

- Full-width dark section
- Large heading: `FOLLOW THE SEASON.` — Gambarino, ~5–6vw
- Two large icon+link buttons: Instagram (`@marcello.m.p`) · Facebook (`marcello.paniccia.2025`)
- Use the existing `.btn.btn--red` class from `global.css`
- GSAP fade entrance on scroll enter

---

## 4. Assets

All asset paths are relative to the page root: `optimized marcello photos/<filename>`

| File | Used in |
|---|---|
| `IMG_0110.jpg` | Hero, Gallery, Car & Team |
| `IMGC0457.jpg` | Car & Team |
| `IMGC1342.jpg` | Defining Moments ch.1, Gallery |
| `IMGC1321.jpg` | Defining Moments ch.2, Gallery |
| `IMGC1190.jpg` | Defining Moments ch.3, Gallery |
| `73-_DSC8837.jpg` | Defining Moments ch.4, Gallery filler |
| `IMG_9359.jpg`, `IMG_9317.jpg`, `21-_DSC6438.jpg`, `169-_DSC8016.jpg` | Gallery filler |

---

## 5. Animation Summary

| Section | Animation |
|---|---|
| Hero | Stagger letter entrance (load), parallax photo (scroll) |
| Stats Grid | Count-up numbers (ScrollTrigger enter) |
| Countdown | Fade + scale entrance, live JS countdown |
| Defining Moments | Fade + slide up per chapter, image parallax |
| GoPro Clips | Fade entrance, hover border/icon effect |
| Race Results | Stagger card reveal |
| Gallery | Stagger fade-in per image |
| Car & Team | Fade + slide entrance |
| Social CTA | Fade entrance |

---

## 6. Files

| File | Responsibility |
|---|---|
| `on-track.html` | Page markup — all 10 sections, nav, footer; load GSAP and Lenis using the same script import strategy as `index.html`. Page title: `On Track — Marcello Paniccia`. |
| `css/on-track.css` | On Track-specific section styles |
| `js/on-track.js` | All GSAP animations + countdown JS for this page. `global.js` handles Lenis init and the Lenis-ScrollTrigger proxy globally — `on-track.js` does not need to re-initialise scroll. |
| `css/global.css` | Shared (no changes needed) |
| `js/global.js` | Shared (no changes needed) |

---

## 7. Placeholder Content

All of the following is placeholder — Marcello replaces after launch:

- Defining Moments text (titles, dates, body copy)
- GoPro clip sources
- Race results data
- Car & Team blurb
- Countdown target date

---

## 8. Out of Scope

- Lightbox for gallery (post-Paper review)
- Live race data feed / API integration
- Video autoplay or custom video player
