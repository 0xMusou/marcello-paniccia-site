# Marcello Paniccia — Personal Racing Website Design Spec

**Date:** 2026-03-21
**Status:** Approved
**Scope:** 5-page personal website for Canadian racing driver Marcello Paniccia

---

## 1. Overview

A cinematic, high-performance personal website for Marcello Paniccia — Canadian Mazda MX-5 Cup USA driver. Inspired by charlesleclerc.com and landonorris.com, the site uses full-screen photography, scroll-driven animations, and bold typography to tell the story of a driver on the rise.

Built in **Vanilla HTML/CSS/JS**, then ported to **Webflow** via MCP server. GSAP handles all scroll and entrance animations. Lenis provides smooth scroll across all pages.

---

## 2. Brand & Design System

### Colors
| Token | Hex | Usage |
|---|---|---|
| Red Primary | `#C32323` | CTAs, marquee strip, On Track accent, active states |
| Red Deep | `#9C1C1C` | Hover states, depth layers, gradients |
| Green Accent | `#1E9156` | Off Track accent, secondary CTAs, stat highlights |
| Background | `#0a0a0a` | Page background |
| Surface | `#111111` | Card/section backgrounds |
| Border | `#222222` | Subtle dividers |
| Text Primary | `#FFFFFF` | Headings, key content |
| Text Muted | `#888888` | Labels, body copy, captions |

### Typography
- **Fonts:** Switzer (self-hosted OTF from `/OTF/`) + Gambarino Regular (self-hosted OTF from `/OTF/Gambarino-Regular.otf`)
- **Display / hero headings:** Gambarino Regular — used for large-scale hero names, section titles, and any editorial/statement text
- **Nav / labels / overlines:** Switzer Regular, uppercase, wide letter-spacing
- **Body copy:** Switzer Regular
- **Supporting headings / UI text:** Switzer Bold / Black (weights loaded as needed)
- **Rule of thumb:** Gambarino for impact and personality, Switzer for everything functional

### Signature Asset
- **File:** `/optimized marcello photos/signature/white march sig.png` (on dark bg)
- **File:** `/optimized marcello photos/signature/red march sig.png` (accent use)
- **Nav logo:** white sig, ~40px tall, top-left
- **Hero watermark:** white sig at ~4% opacity, large, positioned right-center behind name
- **Footer stamp:** red sig, small, as personal mark

### Animation Stack
- **Lenis** — smooth scroll, wraps all pages
- **GSAP + ScrollTrigger** — all scroll-driven animations
- **Patterns used:**
  - Text split stagger on load (hero name)
  - Fade + translateY on scroll enter (sections)
  - Parallax depth (full-width photos)
  - Number count-up (stats)
  - Marquee (infinite horizontal scroll)
  - Clip-path reveal (split section)

---

## 3. Global Layout

### Navigation
- Fixed top, full-width, dark background with subtle blur backdrop
- Left: white signature logo (links to home)
- Center: page links — Home · On Track · Off Track · Calendar · Contact
- Right: hamburger for mobile, or social icons on desktop
- On scroll: border-bottom appears, slight bg opacity increase

### Footer
- Dark background
- Left: `© 2026 Marcello Paniccia`
- Center: nav links
- Right: Instagram (`@marcello.m.p`) · Facebook (`marcello.paniccia.2025`)
- Small red signature stamp centered above copyright line

---

## 4. Pages

### 4.1 Home (`index.html`)

**Section order:**

1. **Hero**
   - Full-viewport, dark background
   - Portrait photo (`217-_DSC4338.jpg` or similar) positioned right, blended into dark bg
   - White signature watermark at ~4% opacity, large, behind text
   - Overline: `MAZDA MX-5 CUP · CANADA · #19` — small, spaced caps
   - Display heading: `MARCELLO` (white) / `PANICCIA` (red), stagger animate in on load
   - Short tagline: "Canadian racing driver. Built for the fight."
   - Two CTAs: `ON TRACK →` (red filled) · `SCROLL ↓` (ghost)

2. **Marquee Strip**
   - Full-width red (`#C32323`) bar
   - Infinite scrolling text: `MAZDA MX-5 CUP USA · MARCELLO PANICCIA · CAR #19 · CANADIAN DRIVER ·`
   - Pauses on hover

3. **The Driver (About)**
   - Two-column layout: bio text left, stat cards right
   - Overline: `THE DRIVER`
   - Heading + 3–4 sentences of bio (karting background, MX-5 Cup, Canadian)
   - Stat cards: `5+ YRS KARTING` (red), `#19` (green), `MX-5 CUP` (white)
   - GSAP ScrollTrigger: fade + slide up on enter

4. **On Track / Off Track Split**
   - Full-viewport-height split: left half = On Track, right half = Off Track
   - Each side has a photo background (race action left, portrait right), dark overlay
   - Left: red accent, heading "Results. Stats. Speed.", `EXPLORE →` CTA
   - Right: green accent, heading "Beyond the helmet.", `EXPLORE →` CTA
   - On hover: each side expands slightly (clip-path or flex animation)
   - Large ghost text background: `RACE` (left) · `LIFE` (right)

5. **Featured Action Shot**
   - Full-width photo (`IMGC0457.jpg` — panning motion blur shot)
   - GSAP parallax depth on scroll
   - Overline + small CTA to On Track page

6. **Instagram Preview Strip**
   - Label: `FOLLOW @MARCELLO.M.P`
   - 4-column grid using any 4 photos from the gallery assets (static for local build, linked to IG profile)
   - Stagger fade-in on scroll enter

7. **Footer** (global)

---

### 4.2 On Track (`on-track.html`)

1. **Hero** — full-viewport action shot, heading `ON TRACK`, overline with series name
2. **Stats Grid** — key numbers: races entered, car number, series, year; count-up animation
3. **Race Results** — card-based timeline of race results (circuit, position, date); hardcoded HTML for local build, updated manually from driverdb data
4. **Photo Gallery** — masonry or horizontal scroll grid of on-track photos
5. **Car / Team Info** — Mazda MX-5 Cup specs, team details, livery photo

---

### 4.3 Off Track (`off-track.html`)

Content is placeholder — Marcello fills in after launch.

1. **Hero** — portrait photo, heading `OFF TRACK`, green accent
2. **Intro Section** — "Beyond the helmet" — short personal intro (placeholder text)
3. **Hobbies** — 3–4 card grid (Trent University, friends, gaming — placeholder cards with icons/images)
4. **Photo Gallery** — lifestyle photos grid (use available portrait shots for now)
5. **FAQ** — accordion component, 4–6 questions; placeholder Q&A
6. **Social CTA** — full-width section: "Follow the journey" → Instagram + Facebook links, large and prominent

---

### 4.4 Calendar (`calendar.html`)

1. **Hero** — heading `CALENDAR`, action shot background
2. **Upcoming Races** — card list: circuit name, date, series, location; green accent for next race
3. **Past Races** — collapsible or separate section for completed rounds
4. **CTA** — link to full results on On Track page

---

### 4.5 Contact (`contact.html`)

1. **Hero** — minimal, dark; heading `GET IN TOUCH`
2. **Contact Form** — name, email, message, submit; red CTA button
3. **Social Links** — Instagram + Facebook, large icon links
4. **Signature** — red signature centered, decorative

---

## 5. Assets

### Photos (all in `/optimized marcello photos/`)
| File | Best use |
|---|---|
| `217-_DSC4338.jpg` | Hero portrait (home), driver profile |
| `184-_DSC3814.jpg` | B&W portrait — Off Track hero or about section |
| `IMGC0457.jpg` | Panning action shot — home featured, On Track |
| `IMG_0110.jpg` | Pack race start — On Track hero |
| `IMGC1342.jpg`, `IMGC1321.jpg`, `IMGC1190.jpg` | On Track gallery |
| `IMG_9359.jpg`, `IMG_9317.jpg` | Gallery filler |
| `73-_DSC8837.jpg`, `21-_DSC6438.jpg`, `169-_DSC8016.jpg` | Professional shots — hero/feature candidates |
| Remaining | Gallery, Off Track, Calendar backgrounds |

### Fonts (all in `/OTF/`)
- Load: Regular, Bold, Black (+ Italic variants as needed)

### Signatures (`/optimized marcello photos/signature/`)
- `white march sig.png` — nav, hero watermark
- `red march sig.png` — footer stamp, Contact page
- `black march sig.png` — reserved for light backgrounds if needed

---

## 6. Tech Stack

| Layer | Tool |
|---|---|
| Markup | Vanilla HTML5 |
| Styles | CSS custom properties + vanilla CSS |
| Animations | GSAP 3 + ScrollTrigger plugin |
| Smooth scroll | Lenis |
| Fonts | Self-hosted OTF via `@font-face` |
| Hosting (local) | Static file server / direct browser open |
| Final deployment | Webflow (via MCP server, applied after local approval) |

GSAP and Lenis loaded via CDN in `<head>`. No build step required.

---

## 7. File Structure

```
D:/claude march site/
├── index.html
├── on-track.html
├── off-track.html
├── calendar.html
├── contact.html
├── css/
│   ├── global.css        (reset, fonts, custom props, nav, footer)
│   └── [page].css        (per-page styles)
├── js/
│   ├── global.js         (Lenis init, nav scroll behavior)
│   └── [page].js         (per-page GSAP animations)
├── OTF/                  (existing — Switzer font files)
└── optimized marcello photos/   (existing — all photo assets)
```

---

## 8. Build Order

Per user agreement: build and approve one page at a time.

1. **Home** (`index.html`) — build first, user reviews and approves
2. **On Track** — after home approved
3. **Off Track** — after On Track approved
4. **Calendar** — after Off Track approved
5. **Contact** — after Calendar approved
6. **Webflow port** — after all pages approved, apply via Webflow MCP server (Webflow-specific workflow is out of scope for the local build plan; handled separately)
