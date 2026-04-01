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
// FOOTER — parallax reveal + entrance animation
// ============================================================
(function initFooter() {
  const footer = document.querySelector('.footer');
  if (!footer) return;

  // Measure footer height and set CSS var so body padding-bottom matches
  function setFooterHeight() {
    document.documentElement.style.setProperty('--footer-h', footer.offsetHeight + 'px');
  }
  setFooterHeight();
  window.addEventListener('resize', setFooterHeight);

  // Staggered fade-in of footer children as footer becomes visible
  const els = footer.querySelectorAll('.footer__sig, .footer__rule, .footer__nav, .footer__social, .footer__copy');
  gsap.set(els, { opacity: 0, y: 20 });

  ScrollTrigger.create({
    trigger: footer,
    start: 'top bottom',
    onEnter: () => {
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      });
    },
    once: true,
  });
})();

// ============================================================
// NAV SCROLL BEHAVIOR
// ============================================================
const nav = document.querySelector('.nav');
if (nav) {
  const hero = document.querySelector('.hero');
  lenis.on('scroll', ({ scroll }) => {
    const threshold = hero ? hero.offsetHeight : window.innerHeight;
    nav.classList.toggle('scrolled', scroll > threshold);
  });
}
