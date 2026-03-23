// on-track.js — On Track page animations
// Note: lenis, gsap, ScrollTrigger are all initialized in global.js

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
