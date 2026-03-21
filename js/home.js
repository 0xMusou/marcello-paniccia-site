// home.js — home page GSAP animations
// Note: lenis is defined in global.js which loads first

// ============================================================
// HERO ENTRANCE ANIMATION
// ============================================================
(function initHero() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to('.hero__overline',
      { opacity: 1, y: 0, duration: 0.7, delay: 0.2 })
    .fromTo('.hero__name-line[data-line="1"]',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.9 },
      '-=0.3')
    .fromTo('.hero__name-line[data-line="2"]',
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.9 },
      '-=0.65')
    .to('.hero__tagline', { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
    .to('.hero__ctas',    { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');

  // Scroll button scrolls to marquee section
  document.querySelector('.hero__scroll-btn')
    ?.addEventListener('click', () => lenis.scrollTo('.marquee'));
})();
