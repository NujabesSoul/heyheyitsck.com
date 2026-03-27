/* ========================================
   main.js — heyheyitsck.com
   Three things: scroll animations, mobile
   menu, and active nav highlighting.
   Nothing else. Keep it light.
   ======================================== */


/* Scroll-triggered fade-ins using IntersectionObserver.
   Elements with .fade-in get .visible when they enter the viewport. */
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
})();


/* Hamburger menu only kicks in below tablet width */
(function () {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  /* Tapping a nav link closes the menu */
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
})();


/* Highlight the active nav link on the landing page
   based on which section is currently in view. Only
   runs on the homepage where sections have IDs. */
(function () {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  if (sections.length === 0) return;

  window.addEventListener('scroll', function () {
    var scrollPos = window.scrollY;
    var current = '';

    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      /* Match both #section anchors and /page/ links */
      if (href === '#' + current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
})();
