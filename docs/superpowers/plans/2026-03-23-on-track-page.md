# On Track Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete `on-track.html` page with all 10 sections, CSS styles, and GSAP/JS animations.

**Architecture:** Vanilla HTML/CSS/JS matching the existing home page pattern. Three new files: `on-track.html`, `css/on-track.css`, `js/on-track.js`. Global files (`css/global.css`, `js/global.js`) are not modified. Lenis and ScrollTrigger are already initialized by `global.js` — `on-track.js` only declares animations. CDN scripts load in the same order as `index.html`.

**Tech Stack:** HTML5, CSS custom properties, GSAP 3 + ScrollTrigger (CDN), Lenis v1 (CDN), self-hosted OTF fonts (already loaded via global.css). No build step.

**Note on testing:** This is a static visual site — there are no unit tests. Each task's verification step is: open `on-track.html` in a browser (or dev server) and confirm the section renders and animates as described.

---

## File Map

| File | Responsibility |
|---|---|
| `on-track.html` | All markup: nav (On Track active), 10 sections, footer, script tags |
| `css/on-track.css` | All On Track-specific styles (nothing in global.css is touched) |
| `js/on-track.js` | All GSAP animations + countdown JS + GoPro strip arrow JS |

---

## Task 1: Scaffold — HTML shell + empty CSS/JS files

**Files:**
- Create: `on-track.html`
- Create: `css/on-track.css`
- Create: `js/on-track.js`

- [ ] **Step 1: Create `css/on-track.css`** — empty file with a single comment header

```css
/* on-track.css — On Track page styles */
```

- [ ] **Step 2: Create `js/on-track.js`** — empty file with a single comment header

```js
// on-track.js — On Track page animations
// Note: lenis, gsap, ScrollTrigger are all initialized in global.js
```

- [ ] **Step 3: Create `on-track.html`** — full shell with nav, empty `<main>`, footer, and scripts

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>On Track — Marcello Paniccia</title>

  <link rel="stylesheet" href="css/global.css" />
  <link rel="stylesheet" href="css/on-track.css" />
</head>
<body>

  <!-- NAV -->
  <nav class="nav">
    <a class="nav__logo" href="index.html">
      <img src="optimized marcello photos/signature/white march sig.png" alt="Marcello Paniccia" />
    </a>
    <ul class="nav__links">
      <li><a href="index.html">Home</a></li>
      <li><a href="on-track.html" class="active" aria-current="page">On Track</a></li>
      <li><a href="off-track.html">Off Track</a></li>
      <li><a href="calendar.html">Calendar</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="nav__social">
      <a href="https://instagram.com/marcello.m.p" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://facebook.com/marcello.paniccia.2025" target="_blank" rel="noopener noreferrer">Facebook</a>
    </div>
  </nav>

  <main>
    <!-- sections added per task below -->
  </main>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__top">
        <div class="footer__sig">
          <img src="optimized marcello photos/signature/red march sig.png" alt="" aria-hidden="true" />
        </div>
        <ul class="footer__nav">
          <li><a href="index.html">Home</a></li>
          <li><a href="on-track.html">On Track</a></li>
          <li><a href="off-track.html">Off Track</a></li>
          <li><a href="calendar.html">Calendar</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer__social">
        <a href="https://instagram.com/marcello.m.p" target="_blank" rel="noopener noreferrer">@marcello.m.p</a>
        <a href="https://facebook.com/marcello.paniccia.2025" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    </div>
  </footer>

  <!-- CDN libs — same order as index.html -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/bundled/lenis.min.js"></script>
  <!-- Register ScrollTrigger before any page scripts (global.js does NOT call registerPlugin) -->
  <script>gsap.registerPlugin(ScrollTrigger);</script>
  <script src="js/global.js"></script>
  <script src="js/on-track.js"></script>
</body>
</html>
```

- [ ] **Step 4: Verify in browser** — open `on-track.html`. Should see: nav with "On Track" highlighted, empty dark page, footer. No console errors.

- [ ] **Step 5: Commit**

```bash
git add on-track.html css/on-track.css js/on-track.js
git commit -m "feat: on-track scaffold — html shell, empty css/js"
```

---

## Task 2: Hero Section

**Files:**
- Modify: `on-track.html` (add hero markup inside `<main>`)
- Modify: `css/on-track.css` (hero styles)
- Modify: `js/on-track.js` (hero entrance + parallax animations)

- [ ] **Step 1: Add hero markup** — inside `<main>` in `on-track.html`

```html
<!-- HERO -->
<section class="ot-hero">
  <div class="ot-hero__photo">
    <img src="optimized marcello photos/IMG_0110.jpg" alt="Marcello Paniccia — Mazda MX-5 Cup pack race start" />
  </div>
  <div class="ot-hero__overlay"></div>
  <div class="ot-hero__content container">
    <p class="overline ot-hero__overline">Mazda MX-5 Cup USA &middot; 2025</p>
    <h1 class="ot-hero__heading">
      <span class="ot-hero__word" data-word="ON">ON</span>
      <span class="ot-hero__word" data-word="TRACK">TRACK</span>
    </h1>
    <div class="ot-hero__bar" aria-hidden="true"></div>
  </div>
</section>
```

- [ ] **Step 2: Add hero styles** to `css/on-track.css`

```css
/* ============================================================
   HERO
============================================================ */
.ot-hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding-bottom: clamp(60px, 8vw, 120px);
}

.ot-hero__photo {
  position: absolute;
  inset: -20% 0 -20% 0; /* extra height for parallax travel */
  z-index: 0;
}

.ot-hero__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.ot-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.1) 100%);
  z-index: 1;
}

.ot-hero__content {
  position: relative;
  z-index: 2;
}

.ot-hero__overline {
  opacity: 0;
  transform: translateY(20px);
  margin-bottom: 1rem;
}

.ot-hero__heading {
  font-family: var(--font-display);
  font-size: clamp(5rem, 12vw, 14rem);
  line-height: 0.9;
  font-weight: 400;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  gap: 0.1em;
}

.ot-hero__word {
  display: block;
  opacity: 0;
  transform: translateY(60px);
}

.ot-hero__bar {
  width: 80px;
  height: 5px;
  background: var(--color-red);
  margin-top: 1.5rem;
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left;
}
```

- [ ] **Step 3: Add hero animations** to `js/on-track.js`

```js
// ============================================================
// HERO ENTRANCE + PARALLAX
// ============================================================
(function initHero() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to('.ot-hero__overline', { opacity: 1, y: 0, duration: 0.7, delay: 0.3 })
    .to('.ot-hero__word[data-word="ON"]',    { opacity: 1, y: 0, duration: 0.9 }, '-=0.3')
    .to('.ot-hero__word[data-word="TRACK"]', { opacity: 1, y: 0, duration: 0.9 }, '-=0.65')
    .to('.ot-hero__bar', { opacity: 1, scaleX: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4');

  // Parallax — photo moves up at ~60% of scroll speed
  gsap.to('.ot-hero__photo', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.ot-hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
})();
```

- [ ] **Step 4: Verify** — hero photo fills viewport, gradient overlay darkens bottom, overline + heading animate in on load, red underline bar reveals, photo parallaxes on scroll. No layout overflow.

- [ ] **Step 5: Commit**

```bash
git add on-track.html css/on-track.css js/on-track.js
git commit -m "feat: on-track hero — parallax photo, stagger heading entrance"
```

---

## Task 3: Stats Grid

**Files:**
- Modify: `on-track.html` (add stats section after hero)
- Modify: `css/on-track.css`
- Modify: `js/on-track.js`

- [ ] **Step 1: Add stats markup** — after hero section in `<main>`

```html
<!-- STATS GRID -->
<section class="ot-stats">
  <div class="container ot-stats__grid">
    <div class="ot-stat ot-stat--green">
      <span class="ot-stat__label overline">Races Entered</span>
      <span class="ot-stat__value" data-count="12">0</span>
    </div>
    <div class="ot-stat ot-stat--red">
      <span class="ot-stat__label overline">Car Number</span>
      <span class="ot-stat__value">#19</span>
    </div>
    <div class="ot-stat">
      <span class="ot-stat__label overline">Series</span>
      <span class="ot-stat__value ot-stat__value--sm">MX-5 Cup USA</span>
    </div>
    <div class="ot-stat">
      <span class="ot-stat__label overline">Season</span>
      <span class="ot-stat__value">2025</span>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add stats styles** to `css/on-track.css`

```css
/* ============================================================
   STATS GRID
============================================================ */
.ot-stats {
  background: var(--color-surface);
  padding: var(--section-pad) 0;
}

.ot-stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}

@media (max-width: 700px) {
  .ot-stats__grid { grid-template-columns: repeat(2, 1fr); }
}

.ot-stat {
  padding: clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 3vw, 2.5rem);
  border-right: 1px solid var(--color-border);
  opacity: 0;
  transform: translateY(30px);
}

.ot-stat:last-child { border-right: none; }

.ot-stat__label {
  display: block;
  color: var(--color-muted);
  margin-bottom: 0.75rem;
}

.ot-stat__value {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 1;
  color: var(--color-text);
}

.ot-stat__value--sm {
  font-size: clamp(1.8rem, 3.5vw, 3rem);
}

.ot-stat--red  .ot-stat__value { color: var(--color-red); }
.ot-stat--green .ot-stat__value { color: var(--color-green); }
```

- [ ] **Step 3: Add stats animation** to `js/on-track.js`

```js
// ============================================================
// STATS GRID — FADE IN + COUNT-UP (RACES ENTERED ONLY)
// ============================================================
gsap.to('.ot-stat', {
  opacity: 1,
  y: 0,
  duration: 0.7,
  stagger: 0.12,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.ot-stats',
    start: 'top 75%',
  }
});

// Count-up: RACES ENTERED only (the card with data-count attribute)
const countEl = document.querySelector('.ot-stat__value[data-count]');
if (countEl) {
  const target = parseInt(countEl.dataset.count, 10);
  const obj = { val: 0 };
  gsap.to(obj, {
    val: target,
    duration: 1.5,
    ease: 'power2.out',
    onUpdate: () => { countEl.textContent = Math.round(obj.val); },
    scrollTrigger: {
      trigger: '.ot-stats',
      start: 'top 75%',
    }
  });
}
```

- [ ] **Step 4: Verify** — 4-card row on desktop, 2×2 on mobile. Cards fade up on scroll enter. RACES ENTERED counts up to 12. #19 is red, races count is green. Other two are white, no count-up.

- [ ] **Step 5: Commit**

```bash
git add on-track.html css/on-track.css js/on-track.js
git commit -m "feat: on-track stats grid — count-up animation, accent colors"
```

---

## Task 4: Countdown to Next Race

**Files:**
- Modify: `on-track.html`
- Modify: `css/on-track.css`
- Modify: `js/on-track.js`

- [ ] **Step 1: Add countdown markup** — after stats section

```html
<!-- COUNTDOWN -->
<section class="ot-countdown">
  <div class="container ot-countdown__inner">
    <p class="overline ot-countdown__overline">Next Race</p>

    <!-- Active state: shown when target date is in the future -->
    <div class="ot-countdown__clock" id="js-countdown-clock">
      <div class="ot-countdown__units">
        <div class="ot-countdown__unit">
          <span class="ot-countdown__num" id="js-cd-days">00</span>
          <span class="ot-countdown__label">Days</span>
        </div>
        <span class="ot-countdown__sep" aria-hidden="true">:</span>
        <div class="ot-countdown__unit">
          <span class="ot-countdown__num" id="js-cd-hours">00</span>
          <span class="ot-countdown__label">Hours</span>
        </div>
        <span class="ot-countdown__sep" aria-hidden="true">:</span>
        <div class="ot-countdown__unit">
          <span class="ot-countdown__num" id="js-cd-mins">00</span>
          <span class="ot-countdown__label">Minutes</span>
        </div>
        <span class="ot-countdown__sep" aria-hidden="true">:</span>
        <div class="ot-countdown__unit">
          <span class="ot-countdown__num" id="js-cd-secs">00</span>
          <span class="ot-countdown__label">Seconds</span>
        </div>
      </div>
      <p class="ot-countdown__circuit">Circuit de la Sarthe &middot; April 12, 2025</p>
    </div>

    <!-- Past state: shown when target date has passed -->
    <div class="ot-countdown__complete" id="js-countdown-complete" style="display:none">
      <span class="ot-countdown__complete-text">Season Complete</span>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add countdown styles** to `css/on-track.css`

```css
/* ============================================================
   COUNTDOWN
============================================================ */
.ot-countdown {
  background: var(--color-bg);
  padding: var(--section-pad) 0;
  text-align: center;
}

.ot-countdown__overline {
  color: var(--color-muted);
  margin-bottom: 2.5rem;
  display: block;
}

.ot-countdown__inner {
  opacity: 0;
  transform: scale(0.96);
}

.ot-countdown__units {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 3vw, 3rem);
}

.ot-countdown__unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.ot-countdown__num {
  font-family: var(--font-display);
  font-size: clamp(4rem, 8vw, 9rem);
  line-height: 1;
  color: var(--color-text);
  min-width: 2ch;
  display: block;
}

.ot-countdown__sep {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 7rem);
  color: var(--color-muted);
  align-self: flex-start;
  padding-top: 0.1em;
}

.ot-countdown__label {
  font-family: var(--font-body);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-muted);
}

.ot-countdown__circuit {
  margin-top: 2rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-red);
}

.ot-countdown__complete-text {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 7vw, 8rem);
  color: var(--color-text);
}
```

- [ ] **Step 3: Add countdown JS** to `js/on-track.js`

```js
// ============================================================
// COUNTDOWN — setInterval + past-date fallback
// ============================================================
(function initCountdown() {
  // ⚠️ UPDATE THIS DATE before each race weekend (ISO 8601, local time)
  // Set to a future date during development so you can see the active clock state.
  // Marcello updates this manually each round.
  const TARGET_DATE = new Date('2026-09-15T09:00:00');

  const clockEl    = document.getElementById('js-countdown-clock');
  const completeEl = document.getElementById('js-countdown-complete');
  const daysEl     = document.getElementById('js-cd-days');
  const hoursEl    = document.getElementById('js-cd-hours');
  const minsEl     = document.getElementById('js-cd-mins');
  const secsEl     = document.getElementById('js-cd-secs');

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const diff = TARGET_DATE - Date.now();
    if (diff <= 0) {
      // Target date passed — show "Season Complete"
      clockEl.style.display    = 'none';
      completeEl.style.display = 'block';
      clearInterval(timer);
      return;
    }
    const days  = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins  = Math.floor((diff % 3600000)  / 60000);
    const secs  = Math.floor((diff % 60000)    / 1000);

    daysEl.textContent  = pad(days);
    hoursEl.textContent = pad(hours);
    minsEl.textContent  = pad(mins);
    secsEl.textContent  = pad(secs);
  }

  // Run immediately so there's no blank flash on load
  tick();
  const timer = setInterval(tick, 1000);
})();

// GSAP entrance
gsap.to('.ot-countdown__inner', {
  opacity: 1,
  scale: 1,
  duration: 0.9,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.ot-countdown',
    start: 'top 70%',
  }
});
```

- [ ] **Step 4: Verify** — countdown ticks live. To test past-date state: temporarily set `TARGET_DATE` to a past date (e.g. `new Date('2020-01-01')`) and confirm "Season Complete" shows and clock is hidden; then restore the real date.

- [ ] **Step 5: Commit**

```bash
git add on-track.html css/on-track.css js/on-track.js
git commit -m "feat: on-track countdown — live clock, season complete fallback"
```

---

## Task 5: Defining Moments

**Files:**
- Modify: `on-track.html`
- Modify: `css/on-track.css`
- Modify: `js/on-track.js`

- [ ] **Step 1: Add defining moments markup** — after countdown

```html
<!-- DEFINING MOMENTS -->
<section class="ot-moments">
  <div class="container">
    <p class="overline ot-moments__heading">Defining Moments</p>
  </div>

  <!-- Chapter 01 — text left, image right -->
  <article class="ot-moment ot-moment--text-left">
    <span class="ot-moment__ghost" aria-hidden="true">01</span>
    <div class="ot-moment__text">
      <p class="overline ot-moment__date">2024 &middot; Road America</p>
      <h2 class="ot-moment__title">First podium.</h2>
      <p class="ot-moment__body">
        Placeholder — Marcello will add his own words here. A defining race weekend, a result that
        proved the pace was real and the fight had only just begun.
      </p>
    </div>
    <div class="ot-moment__image">
      <img src="optimized marcello photos/IMGC1342.jpg" alt="Marcello Paniccia on track" />
    </div>
  </article>

  <!-- Chapter 02 — image left, text right -->
  <article class="ot-moment ot-moment--image-left">
    <span class="ot-moment__ghost" aria-hidden="true">02</span>
    <div class="ot-moment__image">
      <img src="optimized marcello photos/IMGC1321.jpg" alt="Marcello Paniccia racing" />
    </div>
    <div class="ot-moment__text">
      <p class="overline ot-moment__date">2024 &middot; Sebring</p>
      <h2 class="ot-moment__title">The breakthrough lap.</h2>
      <p class="ot-moment__body">
        Placeholder — Marcello will fill this in. Every driver has a lap that changes their relationship
        with the car. This was that lap.
      </p>
    </div>
  </article>

  <!-- Chapter 03 — text left, image right -->
  <article class="ot-moment ot-moment--text-left">
    <span class="ot-moment__ghost" aria-hidden="true">03</span>
    <div class="ot-moment__text">
      <p class="overline ot-moment__date">2023 &middot; NOLA Motorsports Park</p>
      <h2 class="ot-moment__title">Debut weekend.</h2>
      <p class="ot-moment__body">
        Placeholder — Marcello will add his account of his first MX-5 Cup race weekend here.
        The start of something serious.
      </p>
    </div>
    <div class="ot-moment__image">
      <img src="optimized marcello photos/IMGC1190.jpg" alt="Marcello Paniccia MX-5 Cup" />
    </div>
  </article>

  <!-- Chapter 04 — image left, text right -->
  <article class="ot-moment ot-moment--image-left">
    <span class="ot-moment__ghost" aria-hidden="true">04</span>
    <div class="ot-moment__image">
      <img src="optimized marcello photos/73-_DSC8837.jpg" alt="Marcello Paniccia racing" />
    </div>
    <div class="ot-moment__text">
      <p class="overline ot-moment__date">2022 &middot; Karting</p>
      <h2 class="ot-moment__title">The last karting season.</h2>
      <p class="ot-moment__body">
        Placeholder — Marcello will describe the end of his karting career and the decision to step up.
        The foundation that made everything else possible.
      </p>
    </div>
  </article>
</section>
```

- [ ] **Step 2: Add defining moments styles** to `css/on-track.css`

```css
/* ============================================================
   DEFINING MOMENTS
============================================================ */
.ot-moments {
  padding: var(--section-pad) 0;
  background: var(--color-bg);
}

.ot-moments__heading {
  color: var(--color-muted);
  margin-bottom: clamp(3rem, 6vw, 6rem);
}

.ot-moment {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 5rem);
  align-items: center;
  /* Use --container-pad from global.css (clamp(24px, 5vw, 80px)) for horizontal padding.
     Fallback must match — using same clamp but in px to stay consistent. */
  padding: clamp(4rem, 7vw, 8rem) var(--container-pad, clamp(24px, 5vw, 80px));
  max-width: var(--container-max);
  margin: 0 auto;
  overflow: hidden;
}

/* Ghost numeral — centered behind both columns */
.ot-moment__ghost {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: clamp(12rem, 25vw, 28rem);
  color: var(--color-text);
  opacity: 0.03;
  pointer-events: none;
  user-select: none;
  line-height: 1;
  z-index: 0;
}

.ot-moment__text,
.ot-moment__image {
  position: relative;
  z-index: 1;
}

.ot-moment__date {
  color: var(--color-muted);
  margin-bottom: 0.75rem;
}

.ot-moment__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  line-height: 1.1;
}

.ot-moment__body {
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 46ch;
}

.ot-moment__image img {
  width: 100%;
  height: clamp(300px, 40vw, 520px);
  object-fit: cover;
}

/* Column order: image-left variant swaps via grid */
.ot-moment--image-left .ot-moment__image { order: -1; }

@media (max-width: 800px) {
  .ot-moment {
    grid-template-columns: 1fr;
  }
  .ot-moment--image-left .ot-moment__image { order: 0; }
}
```

- [ ] **Step 3: Add defining moments animations** to `js/on-track.js`

```js
// ============================================================
// DEFINING MOMENTS — stagger fade+slide, image parallax
// ============================================================
document.querySelectorAll('.ot-moment').forEach((chapter) => {
  // Text content fades + slides up
  gsap.from(chapter.querySelectorAll('.ot-moment__date, .ot-moment__title, .ot-moment__body'), {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: chapter,
      start: 'top 70%',
    }
  });

  // Image mild parallax
  gsap.fromTo(chapter.querySelector('.ot-moment__image img'), {
    yPercent: -6,
  }, {
    yPercent: 6,
    ease: 'none',
    scrollTrigger: {
      trigger: chapter,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
});
```

- [ ] **Step 4: Verify** — 4 chapters alternate layout (text-left / image-right / text-left / image-right). Ghost numerals visible as very faint background. Each chapter animates in as you scroll. Image has mild parallax depth. Stacks to single column on mobile.

- [ ] **Step 5: Commit**

```bash
git add on-track.html css/on-track.css js/on-track.js
git commit -m "feat: on-track defining moments — 4 chapters, ghost numerals, parallax"
```

---

## Task 6: GoPro / In-Car Clips

**Files:**
- Modify: `on-track.html`
- Modify: `css/on-track.css`
- Modify: `js/on-track.js`

- [ ] **Step 1: Add GoPro markup** — after defining moments

```html
<!-- GOPRO / IN-CAR CLIPS -->
<section class="ot-clips">
  <div class="container">
    <p class="overline ot-clips__heading">In The Car</p>
  </div>
  <div class="ot-clips__strip-wrap">
    <!-- Left arrow -->
    <button class="ot-clips__arrow ot-clips__arrow--left" id="js-clips-prev" aria-label="Previous clip">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <polyline points="20,6 10,16 20,26" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Scroll strip -->
    <div class="ot-clips__strip" id="js-clips-strip">
      <div class="ot-clips__card">
        <div class="ot-clips__video-wrap">
          <video src="" preload="none" aria-label="Race Start — Round 1"></video>
          <div class="ot-clips__play" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="white" stroke-width="1.5"/>
              <polygon points="19,14 35,24 19,34" fill="white"/>
            </svg>
          </div>
        </div>
        <p class="ot-clips__label overline">Race Start &middot; Round 1</p>
      </div>

      <div class="ot-clips__card">
        <div class="ot-clips__video-wrap">
          <video src="" preload="none" aria-label="Qualifying Lap"></video>
          <div class="ot-clips__play" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="white" stroke-width="1.5"/>
              <polygon points="19,14 35,24 19,34" fill="white"/>
            </svg>
          </div>
        </div>
        <p class="ot-clips__label overline">Qualifying Lap &middot; Round 4</p>
      </div>

      <div class="ot-clips__card">
        <div class="ot-clips__video-wrap">
          <video src="" preload="none" aria-label="Onboard Highlights"></video>
          <div class="ot-clips__play" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="white" stroke-width="1.5"/>
              <polygon points="19,14 35,24 19,34" fill="white"/>
            </svg>
          </div>
        </div>
        <p class="ot-clips__label overline">Onboard Highlights &middot; Round 7</p>
      </div>
    </div>

    <!-- Right arrow -->
    <button class="ot-clips__arrow ot-clips__arrow--right" id="js-clips-next" aria-label="Next clip">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <polyline points="12,6 22,16 12,26" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</section>
```

- [ ] **Step 2: Add GoPro styles** to `css/on-track.css`

```css
/* ============================================================
   GOPRO / IN-CAR CLIPS
============================================================ */
.ot-clips {
  background: var(--color-bg);
  padding: var(--section-pad) 0;
  overflow: hidden;
}

.ot-clips__heading {
  color: var(--color-muted);
  margin-bottom: 2.5rem;
}

.ot-clips__strip-wrap {
  position: relative;
}

.ot-clips__strip {
  --gap: 1.5rem;
  display: flex;
  gap: var(--gap);
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding: 0 var(--gap);
  opacity: 0;
}

.ot-clips__strip::-webkit-scrollbar { display: none; }

.ot-clips__card {
  flex: 0 0 calc((100vw - 2 * var(--gap)) / 3);
  scroll-snap-align: start;
}

@media (max-width: 900px) {
  .ot-clips__card { flex: 0 0 calc((100vw - 2 * var(--gap)) / 2); }
}

@media (max-width: 560px) {
  .ot-clips__card { flex: 0 0 calc(100vw - 2 * var(--gap)); }
}

.ot-clips__video-wrap {
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: border-color 0.2s;
}

.ot-clips__video-wrap:hover {
  border-color: var(--color-red);
}

.ot-clips__video-wrap video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.ot-clips__play {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.ot-clips__video-wrap:hover .ot-clips__play {
  transform: scale(1.12);
}

.ot-clips__label {
  margin-top: 0.75rem;
  color: var(--color-muted);
  font-size: 0.7rem;
}

/* Arrow buttons */
.ot-clips__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0,0,0,0.55);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s, background 0.2s;
}

.ot-clips__arrow:hover { background: rgba(0,0,0,0.8); }

.ot-clips__arrow--left  { left: 0.5rem; }
.ot-clips__arrow--right { right: 0.5rem; }

/* Hidden state when at scroll boundary */
.ot-clips__arrow[data-hidden="true"] {
  opacity: 0;
  pointer-events: none;
}
```

- [ ] **Step 3: Add GoPro JS** to `js/on-track.js`

```js
// ============================================================
// GOPRO STRIP — arrow navigation + boundary hide
// ============================================================
(function initClips() {
  const strip  = document.getElementById('js-clips-strip');
  const btnPrev = document.getElementById('js-clips-prev');
  const btnNext = document.getElementById('js-clips-next');
  if (!strip) return;

  function getCardWidth() {
    const card = strip.querySelector('.ot-clips__card');
    // --gap is 1.5rem; parseFloat('1.5rem') = 1.5 — must convert to px using root font size
    const remPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
    const gap   = parseFloat(getComputedStyle(strip).getPropertyValue('--gap')) * remPx || 24;
    return card ? card.offsetWidth + gap : 0;
  }

  function updateArrows() {
    const atStart = strip.scrollLeft <= 2;
    const atEnd   = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2;
    btnPrev.dataset.hidden = atStart ? 'true' : 'false';
    btnNext.dataset.hidden = atEnd   ? 'true' : 'false';
  }

  btnPrev.addEventListener('click', () => {
    strip.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
  });
  btnNext.addEventListener('click', () => {
    strip.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
  });
  strip.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows(); // set initial state

  // GSAP entrance
  gsap.to(strip, {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.ot-clips',
      start: 'top 75%',
    }
  });
})();
```

- [ ] **Step 4: Verify** — 3 video placeholders visible with play icons. Left arrow hidden on initial load (at leftmost position). Hover shifts border to red and scales play icon. Arrow buttons scroll by one card width. Drag-to-scroll works. Scrollbar hidden. Responsive: 2-up on tablet, 1-up on mobile.

- [ ] **Step 5: Commit**

```bash
git add on-track.html css/on-track.css js/on-track.js
git commit -m "feat: on-track gopro clips strip — scroll snap, arrow nav, hover effects"
```

---

## Task 7: Race Results

**Files:**
- Modify: `on-track.html`
- Modify: `css/on-track.css`
- Modify: `js/on-track.js`

- [ ] **Step 1: Add race results markup** — after GoPro clips

```html
<!-- RACE RESULTS -->
<section class="ot-results">
  <div class="container">
    <p class="overline ot-results__heading">Race Results</p>
    <div class="ot-results__list">

      <article class="ot-result ot-result--top3">
        <span class="ot-result__round">R1</span>
        <div class="ot-result__info">
          <h3 class="ot-result__circuit">Sebring International Raceway</h3>
          <p class="ot-result__meta">March 15, 2025 &middot; Race 1</p>
        </div>
        <div class="ot-result__position">
          <span class="ot-result__pos">P3</span>
          <span class="ot-result__note">Fastest lap</span>
        </div>
      </article>

      <article class="ot-result">
        <span class="ot-result__round">R2</span>
        <div class="ot-result__info">
          <h3 class="ot-result__circuit">Sebring International Raceway</h3>
          <p class="ot-result__meta">March 16, 2025 &middot; Race 2</p>
        </div>
        <div class="ot-result__position">
          <span class="ot-result__pos">P7</span>
        </div>
      </article>

      <article class="ot-result">
        <span class="ot-result__round">R3</span>
        <div class="ot-result__info">
          <h3 class="ot-result__circuit">NOLA Motorsports Park</h3>
          <p class="ot-result__meta">April 5, 2025 &middot; Race 1</p>
        </div>
        <div class="ot-result__position">
          <span class="ot-result__pos">P11</span>
          <span class="ot-result__note">Contact, P8 &rarr; P11</span>
        </div>
      </article>

      <article class="ot-result ot-result--top3">
        <span class="ot-result__round">R4</span>
        <div class="ot-result__info">
          <h3 class="ot-result__circuit">NOLA Motorsports Park</h3>
          <p class="ot-result__meta">April 6, 2025 &middot; Race 2</p>
        </div>
        <div class="ot-result__position">
          <span class="ot-result__pos">P2</span>
        </div>
      </article>

      <article class="ot-result">
        <span class="ot-result__round">R5</span>
        <div class="ot-result__info">
          <h3 class="ot-result__circuit">Road America</h3>
          <p class="ot-result__meta">May 24, 2025 &middot; Race 1</p>
        </div>
        <div class="ot-result__position">
          <span class="ot-result__pos">P5</span>
        </div>
      </article>

      <article class="ot-result ot-result--top3">
        <span class="ot-result__round">R6</span>
        <div class="ot-result__info">
          <h3 class="ot-result__circuit">Road America</h3>
          <p class="ot-result__meta">May 25, 2025 &middot; Race 2</p>
        </div>
        <div class="ot-result__position">
          <span class="ot-result__pos">P1</span>
          <span class="ot-result__note">Fastest lap</span>
        </div>
      </article>

      <article class="ot-result">
        <span class="ot-result__round">R7</span>
        <div class="ot-result__info">
          <h3 class="ot-result__circuit">Mid-Ohio Sports Car Course</h3>
          <p class="ot-result__meta">June 21, 2025 &middot; Race 1</p>
        </div>
        <div class="ot-result__position">
          <span class="ot-result__pos">P8</span>
        </div>
      </article>

      <article class="ot-result">
        <span class="ot-result__round">R8</span>
        <div class="ot-result__info">
          <h3 class="ot-result__circuit">Mid-Ohio Sports Car Course</h3>
          <p class="ot-result__meta">June 22, 2025 &middot; Race 2</p>
        </div>
        <div class="ot-result__position">
          <span class="ot-result__pos">P6</span>
        </div>
      </article>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Add race results styles** to `css/on-track.css`

```css
/* ============================================================
   RACE RESULTS
============================================================ */
.ot-results {
  background: var(--color-surface);
  padding: var(--section-pad) 0;
}

.ot-results__heading {
  color: var(--color-muted);
  margin-bottom: 2.5rem;
}

.ot-results__list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.ot-result {
  display: grid;
  grid-template-columns: 3rem 1fr auto;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-border);
  border-left: 3px solid rgba(255,255,255,0.15);
  padding-left: 1.5rem;
  opacity: 0;
  transform: translateY(24px);
}

.ot-result--top3 {
  border-left-color: var(--color-red);
}

.ot-result__round {
  font-family: var(--font-body);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-muted);
}

.ot-result__circuit {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.ot-result__meta {
  font-size: 0.8rem;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.ot-result__position {
  text-align: right;
}

.ot-result__pos {
  display: block;
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--color-text);
  line-height: 1;
}

.ot-result--top3 .ot-result__pos {
  color: var(--color-red);
}

.ot-result__note {
  display: block;
  font-size: 0.7rem;
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.2rem;
}
```

- [ ] **Step 3: Add race results animation** to `js/on-track.js`

```js
// ============================================================
// RACE RESULTS — stagger card reveal
// ============================================================
gsap.to('.ot-result', {
  opacity: 1,
  y: 0,
  duration: 0.6,
  stagger: 0.07,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.ot-results',
    start: 'top 70%',
  }
});
```

- [ ] **Step 4: Verify** — 8 result cards stagger in on scroll. Top-3 finishes (P3, P2, P1) have red left border and red position number. Others have faint border. Notes appear on 3 entries. Readable on mobile.

- [ ] **Step 5: Commit**

```bash
git add on-track.html css/on-track.css js/on-track.js
git commit -m "feat: on-track race results — 8 placeholder entries, stagger reveal"
```

---

## Task 8: Photo Gallery

**Files:**
- Modify: `on-track.html`
- Modify: `css/on-track.css`
- Modify: `js/on-track.js`

- [ ] **Step 1: Add gallery markup** — after race results

```html
<!-- PHOTO GALLERY -->
<section class="ot-gallery">
  <div class="container">
    <p class="overline ot-gallery__heading">Gallery</p>
  </div>
  <div class="container ot-gallery__grid">
    <div class="ot-gallery__item"><img src="optimized marcello photos/IMGC0457.jpg"      alt="Marcello Paniccia on track" /></div>
    <div class="ot-gallery__item"><img src="optimized marcello photos/IMG_0110.jpg"       alt="Marcello Paniccia pack start" /></div>
    <div class="ot-gallery__item"><img src="optimized marcello photos/IMGC1342.jpg"       alt="Marcello Paniccia racing" /></div>
    <div class="ot-gallery__item"><img src="optimized marcello photos/IMGC1321.jpg"       alt="Marcello Paniccia MX-5 Cup" /></div>
    <div class="ot-gallery__item"><img src="optimized marcello photos/IMGC1190.jpg"       alt="Marcello Paniccia on track" /></div>
    <div class="ot-gallery__item"><img src="optimized marcello photos/73-_DSC8837.jpg"    alt="Marcello Paniccia racing" /></div>
    <div class="ot-gallery__item"><img src="optimized marcello photos/IMG_9359.jpg"       alt="Marcello Paniccia" /></div>
    <div class="ot-gallery__item"><img src="optimized marcello photos/IMG_9317.jpg"       alt="Marcello Paniccia" /></div>
    <div class="ot-gallery__item"><img src="optimized marcello photos/21-_DSC6438.jpg"    alt="Marcello Paniccia" /></div>
    <div class="ot-gallery__item"><img src="optimized marcello photos/169-_DSC8016.jpg"   alt="Marcello Paniccia" /></div>
  </div>
</section>
```

- [ ] **Step 2: Add gallery styles** to `css/on-track.css`

```css
/* ============================================================
   PHOTO GALLERY
============================================================ */
.ot-gallery {
  background: var(--color-bg);
  padding: var(--section-pad) 0;
}

.ot-gallery__heading {
  color: var(--color-muted);
  margin-bottom: 2.5rem;
}

/* CSS columns masonry */
.ot-gallery__grid {
  columns: 3;
  column-gap: 1rem;
}

@media (max-width: 900px) { .ot-gallery__grid { columns: 2; } }
@media (max-width: 500px) { .ot-gallery__grid { columns: 1; } }

.ot-gallery__item {
  break-inside: avoid;
  margin-bottom: 1rem;
  overflow: hidden;
  opacity: 0;
}

.ot-gallery__item img {
  width: 100%;
  display: block;
  transition: transform 0.4s ease;
}

.ot-gallery__item:hover img {
  transform: scale(1.03);
}
```

- [ ] **Step 3: Add gallery animation** to `js/on-track.js`

```js
// ============================================================
// GALLERY — stagger fade-in per image
// ============================================================
gsap.to('.ot-gallery__item', {
  opacity: 1,
  duration: 0.7,
  stagger: {
    each: 0.07,
    from: 'start',
  },
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.ot-gallery',
    start: 'top 70%',
  }
});
```

- [ ] **Step 4: Verify** — masonry 3-column grid on desktop, 2 on tablet, 1 on mobile. Images stagger fade in on scroll enter. Hover zoom (scale 1.03) works on each image. All 10 photos load correctly.

- [ ] **Step 5: Commit**

```bash
git add on-track.html css/on-track.css js/on-track.js
git commit -m "feat: on-track photo gallery — masonry grid, stagger fade, hover zoom"
```

---

## Task 9: Car & Team

**Files:**
- Modify: `on-track.html`
- Modify: `css/on-track.css`
- Modify: `js/on-track.js`

- [ ] **Step 1: Add car & team markup** — after gallery

```html
<!-- CAR & TEAM -->
<section class="ot-car">
  <div class="container ot-car__inner">
    <!-- Left: stacked photos -->
    <div class="ot-car__photos">
      <img src="optimized marcello photos/IMGC0457.jpg" alt="Mazda MX-5 Cup — Car #19" />
      <img src="optimized marcello photos/IMG_0110.jpg" alt="Marcello Paniccia on track" />
    </div>

    <!-- Right: info -->
    <div class="ot-car__info">
      <p class="overline ot-car__overline">The Machine</p>
      <h2 class="ot-car__heading">Mazda MX-5 Cup</h2>
      <div class="ot-car__specs">
        <div class="ot-car__spec">
          <span class="ot-car__spec-label overline">Engine</span>
          <span class="ot-car__spec-value">2.0L Skyactiv-G</span>
        </div>
        <div class="ot-car__spec">
          <span class="ot-car__spec-label overline">Power</span>
          <span class="ot-car__spec-value">~160 hp</span>
        </div>
        <div class="ot-car__spec">
          <span class="ot-car__spec-label overline">Series</span>
          <span class="ot-car__spec-value">MX-5 Cup USA</span>
        </div>
        <div class="ot-car__spec">
          <span class="ot-car__spec-label overline">Car</span>
          <span class="ot-car__spec-value">#19</span>
        </div>
      </div>
      <p class="ot-car__blurb">
        Placeholder — Marcello will add his team and car details here. The Mazda MX-5 Cup is
        the ultimate spec formula for developing racers. Equal machinery. Pure driver.
        Car #19 is prepared to fight for every position.
      </p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add car & team styles** to `css/on-track.css`

```css
/* ============================================================
   CAR & TEAM
============================================================ */
.ot-car {
  background: var(--color-surface);
  padding: var(--section-pad) 0;
}

.ot-car__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2.5rem, 5vw, 6rem);
  align-items: start;
}

@media (max-width: 800px) {
  .ot-car__inner { grid-template-columns: 1fr; }
}

.ot-car__photos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
  transform: translateX(-30px);
}

.ot-car__photos img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.ot-car__info {
  opacity: 0;
  transform: translateX(30px);
}

.ot-car__overline {
  color: var(--color-muted);
  margin-bottom: 0.75rem;
}

.ot-car__heading {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 2rem;
  line-height: 1.05;
}

.ot-car__specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.ot-car__spec-label {
  display: block;
  color: var(--color-muted);
  font-size: 0.65rem;
  margin-bottom: 0.3rem;
}

.ot-car__spec-value {
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--color-text);
}

.ot-car__blurb {
  color: var(--color-muted);
  line-height: 1.7;
  max-width: 50ch;
}
```

- [ ] **Step 3: Add car & team animation** to `js/on-track.js`

```js
// ============================================================
// CAR & TEAM — fade + slide in from sides
// ============================================================
gsap.to('.ot-car__photos', {
  opacity: 1,
  x: 0,
  duration: 0.9,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.ot-car', start: 'top 70%' }
});

gsap.to('.ot-car__info', {
  opacity: 1,
  x: 0,
  duration: 0.9,
  delay: 0.15,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.ot-car', start: 'top 70%' }
});
```

- [ ] **Step 4: Verify** — two photos stack left, specs + blurb right. Photos slide in from left, info slides in from right on scroll. 2×2 spec grid readable. Stacks to single column on mobile.

- [ ] **Step 5: Commit**

```bash
git add on-track.html css/on-track.css js/on-track.js
git commit -m "feat: on-track car & team — stacked photos, spec grid, slide-in animation"
```

---

## Task 10: Social CTA

**Files:**
- Modify: `on-track.html`
- Modify: `css/on-track.css`
- Modify: `js/on-track.js`

- [ ] **Step 1: Add social CTA markup** — after car & team section, before footer

```html
<!-- SOCIAL CTA -->
<section class="ot-social">
  <div class="container ot-social__inner">
    <h2 class="ot-social__heading">Follow the season.</h2>
    <div class="ot-social__buttons">
      <a
        href="https://instagram.com/marcello.m.p"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn--red btn--icon"
      >
        <!-- Instagram SVG icon -->
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" stroke-width="2"/>
          <circle cx="12" cy="12" r="4" stroke="white" stroke-width="2"/>
          <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
        </svg>
        Instagram
      </a>
      <a
        href="https://facebook.com/marcello.paniccia.2025"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn--red btn--icon"
      >
        <!-- Facebook SVG icon -->
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Facebook
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add social CTA styles** to `css/on-track.css`

```css
/* ============================================================
   SOCIAL CTA
============================================================ */
.ot-social {
  background: var(--color-bg);
  padding: var(--section-pad) 0;
  text-align: center;
}

.ot-social__inner {
  opacity: 0;
  transform: translateY(30px);
}

.ot-social__heading {
  font-family: var(--font-display);
  font-size: clamp(3rem, 6vw, 7rem);
  font-weight: 400;
  color: var(--color-text);
  margin-bottom: 2.5rem;
  line-height: 1;
}

.ot-social__buttons {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Modifier: icon+text button (extends .btn--red from global.css) */
.btn--icon {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
```

- [ ] **Step 3: Add social CTA animation** to `js/on-track.js`

```js
// ============================================================
// SOCIAL CTA — fade + slide up entrance
// ============================================================
gsap.to('.ot-social__inner', {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.ot-social',
    start: 'top 70%',
  }
});
```

- [ ] **Step 4: Verify** — large "Follow the season." heading, two red icon+text buttons (Instagram and Facebook). Buttons open correct URLs in new tab. Section fades + slides up on scroll enter. Buttons stack on narrow screens.

- [ ] **Step 5: Commit**

```bash
git add on-track.html css/on-track.css js/on-track.js
git commit -m "feat: on-track social cta — icon+text buttons, fade entrance"
```

---

## Task 11: Final Review Pass

- [ ] **Step 1: Full page scroll** — open `on-track.html` in browser. Scroll top to bottom. Confirm all 10 sections render correctly and transitions between sections feel visually cohesive.

- [ ] **Step 2: Check nav active state** — "On Track" link should be highlighted. Other links should be normal.

- [ ] **Step 3: Check responsive breakpoints** — resize browser to 900px and 400px wide. Confirm grids reflow: 2×2 stats, single-column moments/car, 2-up clips strip, 2-column gallery, stacked social buttons.

- [ ] **Step 4: Check console** — no JS errors. No 404s on image paths.

- [ ] **Step 5: Countdown test** — temporarily change `TARGET_DATE` to a past date, refresh, confirm "Season Complete" shows and clock is fully hidden. Restore original date.

- [ ] **Step 6: Final commit**

```bash
git add on-track.html css/on-track.css js/on-track.js
git commit -m "feat: on-track page complete — all 10 sections, animations, responsive"
```
