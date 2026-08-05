/* ==========================================================================
   SYNOVIXURA TECH — SCRIPT
   Small, dependency-free interactions. Organized by feature so each piece
   can be edited or removed independently.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close the mobile menu after a nav link is tapped */
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Sticky header shadow on scroll ---------- */
  var header = document.getElementById('siteHeader');
  if (header) {
    var toggleHeaderState = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    toggleHeaderState();
    window.addEventListener('scroll', toggleHeaderState, { passive: true });
  }

  /* ---------- Scroll reveal ---------- */
  var revealItems = document.querySelectorAll('.reveal');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(function (el, index) {
      /* Small stagger so grouped items don't all fade in at once */
      el.style.transitionDelay = (index % 4) * 60 + 'ms';
      observer.observe(el);
    });
  }

  /* ---------- Hero console readout (index page signature element) ---------- */
  var workflowsEl = document.getElementById('consoleWorkflows');
  var responseEl = document.getElementById('consoleResponse');

  if (workflowsEl && responseEl && !prefersReducedMotion) {
    setInterval(function () {
      var workflows = 120 + Math.floor(Math.random() * 20);
      var response = 110 + Math.floor(Math.random() * 40);
      workflowsEl.textContent = workflows;
      responseEl.textContent = response + 'ms';
    }, 2200);
  }

  var sparklineBars = document.querySelectorAll('#sparkline span');
  if (sparklineBars.length && !prefersReducedMotion) {
    setInterval(function () {
      sparklineBars.forEach(function (bar) {
        var height = 30 + Math.floor(Math.random() * 65);
        bar.style.setProperty('--h', height + '%');
      });
    }, 2800);
  }

});