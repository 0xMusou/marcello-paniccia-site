# CLAUDE.md — Marcello Paniccia Site

## Design Context

### Users
Racing fans and media following the Mazda MX-5 Cup series. They arrive curious — they want to feel the driver's energy, check results, and stay connected to the season. The experience should feel like flipping through a motorsport editorial, not browsing a stats page.

### Brand Personality
**Intense · Fast · Authentic**

Young Canadian driver with real hunger — nothing manufactured. The brand should feel like the sport itself: high-stakes, visceral, and honest. Polished for the grid, not the boardroom.

### Aesthetic Direction
- **Dark-first**: #0a0a0a background, everything layered against near-black
- **Red as energy**: #C32323 is the heartbeat — used sparingly but with intention
- **Green as contrast**: #1E9156 for secondary moments (off-track, lifestyle)
- **Type as design**: Gambarino (display serif) for headlines — editorial, not athletic grotesque. Switzer for body.
- **Photos do the work**: Full-bleed, high-contrast imagery. Gradients serve the photo.
- **Anti-reference**: No generic sports templates, no stock-photo heroes, no blue gradients.

### Design Principles
1. **Restraint amplifies impact** — Use red once and it hits hard. Every element: type size, spacing, animation, contrast.
2. **Speed without gimmick** — Animations serve momentum, never for show. GSAP, Lenis, parallax all in service of feeling.
3. **Photography is the hero** — Layouts exist to frame photos. Give images room. Overlays enhance, never obscure.
4. **Editorial over athletic** — Motorsport magazine spread, not team website. Asymmetric layouts, staggered type, varied photo shapes.
5. **Authentic over perfect** — The site should have a point of view. Marcello is 21, Canadian, fighting for every position — the design carries that weight.

### Tech Stack
- Vanilla HTML/CSS/JS (no framework)
- GSAP 3 + ScrollTrigger, Lenis smooth scroll
- Fonts: Gambarino (OTF local), Switzer (OTF local)
- CSS custom properties — key tokens in `css/global.css`
- Targeting Webflow migration — keep structure clean and transferable
- Accessibility: basic (keyboard nav + alt text, no formal WCAG required)
