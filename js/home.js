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

// ============================================================
// ABOUT SECTION — SCROLL FADE-IN
// ============================================================
gsap.from('.about__text > *', {
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.12,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about',
    start: 'top 75%',
  }
});

gsap.from('.about__stat', {
  opacity: 0,
  x: 40,
  duration: 0.7,
  stagger: 0.15,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about__stats',
    start: 'top 80%',
  }
});

// ============================================================
// SPLIT SECTION — CLIP-PATH REVEAL ON SCROLL ENTER
// ============================================================
gsap.from('.split__side--left', {
  clipPath: 'inset(0 50% 0 0)',
  duration: 1.2,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.split', start: 'top 80%' }
});
gsap.from('.split__side--right', {
  clipPath: 'inset(0 0 0 50%)',
  duration: 1.2,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.split', start: 'top 80%' }
});
gsap.from('.split__content', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power3.out',
  scrollTrigger: { trigger: '.split', start: 'top 70%' }
});

// ============================================================
// FEATURED — PARALLAX DEPTH ON SCROLL
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
