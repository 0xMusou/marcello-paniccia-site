// home.js — home page GSAP animations
// Note: lenis is defined in global.js which loads first

// ============================================================
// HERO ENTRANCE ANIMATION
// ============================================================
(function initHero() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo('.hero__portrait',
      { opacity: 0, y: 80, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.1, delay: 0.2 })
    .fromTo('.hero__age',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.7')
    .fromTo('.hero__name-line[data-line="1"]',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.9 },
      '-=0.5')
    .fromTo('.hero__name-line[data-line="2"]',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.9 },
      '-=0.65')
    .to('.hero__page-links a',
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
      '-=0.5')
    .to('.hero__race-badge',
      { opacity: 1, duration: 0.9 },
      '-=0.4')
    .fromTo('.hero__next-race',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.6');
})();

// ============================================================
// HERO — MOUSE PERSPECTIVE PARALLAX (portrait + background)
// ============================================================
(function initHeroParallax() {
  const portrait = document.querySelector('.hero__portrait');
  const bg = document.querySelector('.hero__photo');
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Portrait: stronger effect
  const portraitRotate = 5;
  const portraitShift = 18;
  // Background: subtle counter-movement for depth
  const bgShift = 8;
  const bgScale = 1.05; // slight oversize so shift doesn't reveal edges

  if (bg) gsap.set(bg, { scale: bgScale });

  hero.addEventListener('mousemove', function (e) {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    if (portrait) {
      gsap.to(portrait, {
        rotateY: x * portraitRotate,
        rotateX: -y * portraitRotate,
        x: x * portraitShift,
        y: y * portraitShift,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }

    if (bg) {
      gsap.to(bg, {
        x: -x * bgShift,
        y: -y * bgShift,
        duration: 1,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }
  });

  hero.addEventListener('mouseleave', function () {
    if (portrait) {
      gsap.to(portrait, {
        rotateY: 0, rotateX: 0, x: 0, y: 0,
        duration: 0.8, ease: 'power2.out', overwrite: 'auto'
      });
    }
    if (bg) {
      gsap.to(bg, {
        x: 0, y: 0,
        duration: 1, ease: 'power2.out', overwrite: 'auto'
      });
    }
  });
})();

// ============================================================
// ABOUT SECTION — SCROLL ENTRANCE
// ============================================================
gsap.from('.about__text > *', {
  opacity: 0,
  y: 50,
  duration: 0.9,
  stagger: 0.14,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about',
    start: 'top 70%',
  }
});

// Stats: each value counts up from below with stagger
gsap.from('.about__stat', {
  opacity: 0,
  y: 60,
  duration: 0.8,
  stagger: 0.18,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about__stats',
    start: 'top 80%',
  }
});

// Ghost number drifts in slowly
gsap.from('.about__ghost', {
  opacity: 0,
  x: 80,
  duration: 1.4,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.about',
    start: 'top 75%',
  }
});

// ============================================================
// SPLIT SECTION — STAGGERED REVEAL
// ============================================================
const splitTl = gsap.timeline({
  scrollTrigger: { trigger: '.split', start: 'top 75%' }
});

splitTl
  .from('.split__side--left', {
    opacity: 0,
    x: -60,
    duration: 1.0,
    ease: 'power4.out',
  })
  .from('.split__side--right', {
    opacity: 0,
    x: 60,
    duration: 1.0,
    ease: 'power4.out',
  }, '-=0.7')
  .from('.split__ghost', {
    opacity: 0,
    scale: 0.8,
    duration: 1.0,
    stagger: 0.15,
    ease: 'power2.out',
  }, '-=0.6');

gsap.from('.split__content', {
  opacity: 0,
  y: 40,
  duration: 0.9,
  stagger: 0.2,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.split', start: 'top 70%' }
});

// ============================================================
// SPLIT — PULSE EFFECT ON HOVER
// ============================================================
(() => {
  const split = document.querySelector('.split');
  const pulse = document.querySelector('.split__pulse');
  const glow  = document.querySelector('.split__pulse-glow');
  const leftS = document.querySelector('.split__side--left');
  const rightS = document.querySelector('.split__side--right');
  if (!split || !pulse || !leftS || !rightS) return;

  let interval = null;
  let rafId = null;
  let hoveredSide = null;

  // Compute the two endpoints of the visible divider line.
  // Right panel's left clip-path edge: polygon(8% 0, …, 0 100%)
  // Coords relative to .split
  function getDivider() {
    const rOff = rightS.offsetLeft;          // right element's left edge relative to split
    const rW   = rightS.offsetWidth;
    const sW   = split.offsetWidth;
    const sH   = split.offsetHeight;
    // Top of divider: 8% into the right element from its left edge
    const topX = rOff + rW * 0.08;
    // Bottom of divider: 0% (the left edge of the right element)
    const botX = rOff;
    return { topX, botX, sW, sH };
  }

  function updateGlow() {
    if (!glow) return;
    const { topX, botX, sW, sH } = getDivider();
    const midX = (topX + botX) / 2;
    // Radial glow centered on the divider midpoint, toward hovered side
    const dir = hoveredSide === 'left' ? -1 : 1;
    const cx = midX + dir * 40;
    glow.style.background =
      `radial-gradient(ellipse 200px ${sH * 0.8}px at ${cx}px ${sH / 2}px, ` +
      `rgba(255,255,255,0.14), transparent 70%)`;
  }

  function spawnLine() {
    const { topX, botX, sW, sH } = getDivider();

    const el = document.createElement('div');
    el.className = 'split__pulse-line';

    // Use CSS clip-path to draw the line as a thin skewed strip
    // matching the divider diagonal exactly: top at topX, bottom at botX
    el.style.left = '0';
    el.style.width = sW + 'px';
    el.style.clipPath =
      `polygon(${topX}px 0, ${topX + 1}px 0, ${botX + 1}px 100%, ${botX}px 100%)`;

    // Travel toward the hovered side
    const dist = sW * 0.04 + Math.random() * sW * 0.03;
    const travel = hoveredSide === 'left' ? -dist : dist;
    el.style.setProperty('--tx', travel + 'px');

    pulse.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }

  // Continuously update positions during flex transition
  function trackDivider() {
    updateGlow();
    rafId = requestAnimationFrame(trackDivider);
  }

  function startPulse(side) {
    hoveredSide = side;
    split.classList.add('is-hovering');
    if (interval) clearInterval(interval);
    if (rafId) cancelAnimationFrame(rafId);
    trackDivider();
    spawnLine();
    interval = setInterval(spawnLine, 320);
  }

  function stopPulse() {
    clearInterval(interval);
    cancelAnimationFrame(rafId);
    interval = null;
    rafId = null;
    hoveredSide = null;
    split.classList.remove('is-hovering');
  }

  leftS.addEventListener('mouseenter',  () => startPulse('left'));
  rightS.addEventListener('mouseenter', () => startPulse('right'));
  split.addEventListener('mouseleave', stopPulse);
})();

// ============================================================
// FEATURED — PARALLAX + EDITORIAL ENTRANCE
// ============================================================
gsap.to('.featured__photo', {
  yPercent: 15,
  ease: 'none',
  scrollTrigger: {
    trigger: '.featured',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  }
});

// Quote lines stagger in
gsap.from('.featured__quote-line', {
  opacity: 0,
  y: 50,
  duration: 0.9,
  stagger: 0.15,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.featured',
    start: 'top 45%',
  }
});

// Link fades in
gsap.from('.featured__link', {
  opacity: 0,
  x: -20,
  duration: 0.7,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.featured',
    start: 'top 40%',
  }
});

// ============================================================
// COUNTDOWN
// ============================================================
(function initHomeCountdown() {
  const TARGET_DATE = new Date('2026-09-15T09:00:00Z');

  const clockEl    = document.getElementById('js-home-countdown-clock');
  const completeEl = document.getElementById('js-home-countdown-complete');
  const daysEl     = document.getElementById('js-home-cd-days');
  const hoursEl    = document.getElementById('js-home-cd-hours');
  const minsEl     = document.getElementById('js-home-cd-mins');
  const secsEl     = document.getElementById('js-home-cd-secs');

  if (!clockEl) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const diff = TARGET_DATE - Date.now();
    if (diff <= 0) {
      clockEl.style.display    = 'none';
      completeEl.style.display = 'block';
      clearInterval(timer);
      return;
    }
    daysEl.textContent  = pad(Math.floor(diff / 86400000));
    hoursEl.textContent = pad(Math.floor((diff % 86400000) / 3600000));
    minsEl.textContent  = pad(Math.floor((diff % 3600000)  / 60000));
    secsEl.textContent  = pad(Math.floor((diff % 60000)    / 1000));

    // Pulse the seconds on each tick
    if (secsEl) {
      secsEl.classList.add('tick');
      setTimeout(() => secsEl.classList.remove('tick'), 300);
    }
  }

  const timer = setInterval(tick, 1000);
  tick();
})();

// Staggered entrance — each unit slides up in sequence
const cdTl = gsap.timeline({
  scrollTrigger: { trigger: '.countdown', start: 'top 70%' }
});
cdTl
  .to('.countdown__inner', {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power3.out',
  })
  .from('.countdown__unit', {
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.1,
    ease: 'power4.out',
  }, '-=0.3')
  .from('.countdown__sep', {
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: 'power2.out',
  }, '-=0.6')
  .from('.countdown__meta', {
    opacity: 0,
    y: 15,
    duration: 0.6,
    ease: 'power3.out',
  }, '-=0.3');

// ============================================================
// SOCIAL CTA — COLLAGE STAGGER
// ============================================================
// Photos scatter in from different directions
const photoEntrances = [
  { x: -60, y: 40, rotation: -6 },
  { x: 30, y: -50, rotation: 4 },
  { x: -20, y: 60, rotation: -3 },
  { x: 50, y: 30, rotation: 5 },
];
document.querySelectorAll('.social-cta__photo').forEach(function (photo, i) {
  const e = photoEntrances[i] || photoEntrances[0];
  gsap.from(photo, {
    opacity: 0,
    x: e.x,
    y: e.y,
    rotation: e.rotation,
    scale: 0.85,
    duration: 1,
    delay: i * 0.12,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.social-cta__collage',
      start: 'top 85%',
    }
  });
});

// Header entrance — heading lines stagger
gsap.from('.social-cta__eyebrow', {
  opacity: 0, y: 20, duration: 0.6, ease: 'power3.out',
  scrollTrigger: { trigger: '.social-cta__header', start: 'top 80%' }
});
gsap.from('.social-cta__heading', {
  opacity: 0, y: 40, duration: 0.9, ease: 'power3.out',
  scrollTrigger: { trigger: '.social-cta__header', start: 'top 80%' }
});
gsap.from('.social-cta__buttons', {
  opacity: 0, y: 20, duration: 0.7, delay: 0.2, ease: 'power3.out',
  scrollTrigger: { trigger: '.social-cta__header', start: 'top 80%' }
});

// Collage mouse-reactive parallax drift
(function initCollageDrift() {
  const collage = document.querySelector('.social-cta__collage');
  if (!collage) return;
  const photos = collage.querySelectorAll('.social-cta__photo');
  const depths = [0.3, 0.5, 0.2, 0.4]; // different depth per photo

  collage.addEventListener('mousemove', function (e) {
    const rect = collage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    photos.forEach(function (photo, i) {
      var d = depths[i] || 0.3;
      gsap.to(photo, {
        x: x * 20 * d,
        y: y * 15 * d,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });
  });

  collage.addEventListener('mouseleave', function () {
    photos.forEach(function (photo) {
      gsap.to(photo, { x: 0, y: 0, duration: 1, ease: 'power2.out', overwrite: 'auto' });
    });
  });
})();
