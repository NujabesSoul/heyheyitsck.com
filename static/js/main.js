/* ========================================
   main.js — heyheyitsck.com
   The little bit of client-side glue this site
   needs: scroll fade-ins, the mobile menu, and
   active-nav highlighting — plus three quieter
   touches: a commonplace quote that changes per
   visit, a memento-mori grid, and a command
   palette you can summon with ` or /.
   Vanilla JS, no dependencies. Keep it light.
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


/* Commonplace book: every quote is rendered into the page,
   and we reveal one at random on each load. With JS off the
   first quote is already showing, so nothing breaks. */
(function () {
  var quotes = document.querySelectorAll('.commonplace-quote');
  if (quotes.length < 2) return;

  var pick = Math.floor(Math.random() * quotes.length);
  quotes.forEach(function (quote, i) {
    quote.classList.toggle('hidden', i !== pick);
  });
})();


/* Memento mori — life in weeks.
   One dot per week of a ~90-year life, the lived ones filled,
   with a decimal-years counter ticking underneath. The birthdate
   rides in on data-born (from hugo.toml), so there's exactly one
   place to change it. */
(function () {
  var grid = document.getElementById('memento-grid');
  if (!grid) return;

  var born = new Date(grid.getAttribute('data-born') + 'T00:00:00');
  if (isNaN(born)) return;

  var years = parseInt(grid.getAttribute('data-years'), 10) || 90;
  var totalWeeks = years * 52;
  var msPerWeek = 7 * 24 * 60 * 60 * 1000;
  /* 365.2425 is the average year length once you count leap years */
  var msPerYear = 365.2425 * 24 * 60 * 60 * 1000;

  var weeksLived = Math.floor((Date.now() - born) / msPerWeek);

  /* Build all 4,680-ish dots off-DOM, then drop them in at once. */
  var dots = document.createDocumentFragment();
  for (var i = 0; i < totalWeeks; i++) {
    var dot = document.createElement('span');
    dot.className = 'memento-dot';
    if (i < weeksLived) dot.classList.add('lived');
    else if (i === weeksLived) dot.classList.add('now');
    dots.appendChild(dot);
  }
  grid.appendChild(dots);

  var counter = document.getElementById('memento-counter');
  if (!counter) return;

  /* Some people would rather things hold still. Honor that — give
     them the number without the relentless tick. */
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counter.textContent = ((Date.now() - born) / msPerYear).toFixed(2);
    return;
  }

  /* Otherwise let it run. The motion is the point: the clock
     never actually stops, and that's the whole idea. */
  function tick() {
    counter.textContent = ((Date.now() - born) / msPerYear).toFixed(6);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();


/* Command palette — a terminal you can summon with ` or /.
   It navigates the site, says a little about each page, and
   gets out of the way on Esc. The page map comes from the JSON
   the partial renders, so this file doesn't hardcode it. */
(function () {
  var overlay = document.getElementById('cmd-overlay');
  var input = document.getElementById('cmd-input');
  var output = document.getElementById('cmd-output');
  var registry = document.getElementById('cmd-pages');
  if (!overlay || !input || !output || !registry) return;

  var pages = JSON.parse(registry.textContent || '[]');
  var lastFocus = null;

  /* Don't hijack the key when someone's actually typing somewhere. */
  function isTyping() {
    var el = document.activeElement;
    if (!el) return false;
    return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable;
  }

  function isOpen() {
    return !overlay.hidden;
  }

  function open() {
    lastFocus = document.activeElement;
    overlay.hidden = false;
    /* let the browser paint hidden=false before we fade in */
    requestAnimationFrame(function () { overlay.classList.add('open'); });
    input.value = '';
    input.focus();
  }

  function close() {
    overlay.classList.remove('open');
    overlay.hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* Drop a line into the scrollback. */
  function print(text, kind) {
    var line = document.createElement('div');
    if (kind) line.className = 'cmd-' + kind;
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function findPage(name) {
    name = (name || '').toLowerCase();
    for (var i = 0; i < pages.length; i++) {
      if (pages[i].name === name) return pages[i];
    }
    return null;
  }

  function run(raw) {
    var line = raw.trim();
    if (!line) return;

    print('ck@heyheyitsck:~$ ' + line, 'echo');

    var parts = line.split(/\s+/);
    var cmd = parts[0].toLowerCase();
    var arg = parts[1];

    if (cmd === 'help') {
      print('available commands:');
      print('  whoami         who is this');
      print('  ls             list the pages');
      print('  cat <page>     read a page\'s blurb');
      print('  open <page>    go to a page');
      print('  clear          wipe the screen');
      print('  help           this');
    } else if (cmd === 'whoami') {
      print(overlay.getAttribute('data-whoami'));
    } else if (cmd === 'ls') {
      print(pages.map(function (p) { return p.name; }).join('   '));
    } else if (cmd === 'cat') {
      var page = findPage(arg);
      if (page) print(page.blurb);
      else print('cat: ' + (arg || '') + ': no such page. try \'ls\'.', 'error');
    } else if (cmd === 'open') {
      var dest = findPage(arg);
      if (dest) {
        print('opening ' + dest.name + '…', 'hint');
        window.location.href = dest.path;
      } else {
        print('open: ' + (arg || '') + ': no such page. try \'ls\'.', 'error');
      }
    } else if (cmd === 'clear') {
      output.innerHTML = '';
    } else {
      print('command not found: ' + cmd + '. try \'help\'.', 'error');
    }
  }

  /* One global listener: ` or / opens it (unless you're typing),
     Enter runs the command, Esc backs out. */
  document.addEventListener('keydown', function (e) {
    if (!isOpen() && (e.key === '`' || e.key === '/') && !isTyping()) {
      e.preventDefault();
      open();
      return;
    }
    if (!isOpen()) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      run(input.value);
      input.value = '';
    }
  });

  /* Clicking the dim backdrop (but not the box) dismisses it. */
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
})();
