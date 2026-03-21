// ============================================================
// LENIS SMOOTH SCROLL + GSAP INTEGRATION
// ============================================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
});

// Wire Lenis into GSAP ticker — ScrollTrigger must read
// smooth-scrolled position, not native scroll position
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// ============================================================
// NAV SCROLL BEHAVIOR
// ============================================================
const nav = document.querySelector('.nav');
lenis.on('scroll', ({ scroll }) => {
  nav.classList.toggle('scrolled', scroll > 60);
});
