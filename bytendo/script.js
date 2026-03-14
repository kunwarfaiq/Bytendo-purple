/**
 * ================================================================
 * BYTENDO — Main JavaScript
 * Cloned from: https://nubien.framer.website/
 * Brand: "Nubien" replaced with "Bytendo" throughout
 * ================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initStickyNav();
  initMobileNav();
  initScrollAnimations();
  initParallax();
  initMarqueePause();
  initSmoothScroll();
  initFooterYear();
});

function initCustomCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let mouseX = 0; let mouseY = 0; let ringX = 0; let ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + 'px'; dot.style.top  = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px'; ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const interactiveElements = document.querySelectorAll('a, button, [role="button"], .glass-card, input, textarea');
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => { dot.classList.add('is-hovering'); ring.classList.add('is-hovering'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('is-hovering'); ring.classList.remove('is-hovering'); });
  });

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
}

function initStickyNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const SCROLL_THRESHOLD = 50;
  window.addEventListener('scroll', () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('scrolled');
      nav.setAttribute('aria-label', 'Main navigation (scrolled)');
    } else {
      nav.classList.remove('scrolled');
      nav.setAttribute('aria-label', 'Main navigation');
    }
  }, { passive: true });
}

function initMobileNav() {
  const hamburger  = document.querySelector('.nav__hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

function initScrollAnimations() {
  const observerConfig = { threshold: 0.12, rootMargin: '0px 0px -60px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerConfig);
  document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right').forEach((el) => observer.observe(el));
}

function initParallax() {
  const PARALLAX_FACTOR = 0.3;
  const parallaxElements = document.querySelectorAll('.hero__bg-glow, [data-parallax]');
  if (parallaxElements.length === 0) return;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxElements.forEach((el) => {
      const offset = scrollY * PARALLAX_FACTOR * -1;
      el.style.transform = 'translateY(' + offset + 'px) translateX(-50%)';
    });
  }, { passive: true });
}

function initMarqueePause() {
  const marquees = document.querySelectorAll('.marquee');
  marquees.forEach((marquee) => {
    const track = marquee.querySelector('.marquee__track');
    if (!track) return;
    marquee.addEventListener('touchstart', () => { track.style.animationPlayState = 'paused'; }, { passive: true });
    marquee.addEventListener('touchend', () => { track.style.animationPlayState = 'running'; }, { passive: true });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      e.preventDefault();
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const OFFSET_EXTRA = 24;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - OFFSET_EXTRA;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
  });
}

function initFooterYear() {
  const yearSpan = document.getElementById('footer-year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}
