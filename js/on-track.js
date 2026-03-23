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
