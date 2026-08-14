/* ==========================================================================
   Nihilo Solutions - shared site behaviour
   --------------------------------------------------------------------------
   INTEGRATION CONFIG
   Replace the two placeholder values below with the live URLs. Nothing else
   in the site needs to change: every "Book a call" button and the intake page
   read from here.

     BOOKING_URL  Shared discovery-call calendar for Jake and Ish. Currently
                  the Microsoft Bookings page for "Nihilo Solutions Discovery
                  Call". The plain /book/ URL is used because that is the form
                  Microsoft's own embed code takes; the ?ismsaljsauthenabled
                  parameter on the share link is not needed for embedding.

                  NOTE: Microsoft Bookings pages only render inside an iframe
                  when the booking page is set to allow anonymous booking. If
                  the page requires sign-in, the frame will come up blank, as
                  Microsoft's login screen refuses to be framed. Every booking
                  section also renders an "open in a new tab" link for that
                  case; if the frame is blank on the live site, drop the embed
                  and link out instead.

     MS_FORM_URL  Microsoft Form for "Tell us about your business".
                  In Forms use Collect responses > Embed and copy the src of
                  the generated iframe, e.g.
                    https://forms.office.com/Pages/ResponsePage.aspx?id=XXXX&embed=true

   While a value is left as REPLACE_ME the page renders a labelled placeholder
   instead of a broken frame, and the fallback path stays available.
   ========================================================================== */

var NIHILO = {
  BOOKING_URL: 'https://outlook.office.com/book/NihiloSolutionsDiscoveryCall@nihilosolutions.com/',
  MS_FORM_URL: 'REPLACE_ME'
};

(function () {
  'use strict';

  var isSet = function (v) { return !!v && v !== 'REPLACE_ME' && v.indexOf('http') === 0; };
  var root = document.documentElement;

  /* ---------------------------------- theme ------------------------------- */
  var saved = null;
  try { saved = localStorage.getItem('nihilo-theme'); } catch (e) {}
  var prefersLight = window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches;
  if (saved === 'light' || (!saved && prefersLight)) root.setAttribute('data-theme', 'light');

  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var light = root.getAttribute('data-theme') !== 'light';
      if (light) root.setAttribute('data-theme', 'light');
      else root.removeAttribute('data-theme');
      try { localStorage.setItem('nihilo-theme', light ? 'light' : 'dark'); } catch (e) {}
    });
  }

  /* ----------------------------------- nav -------------------------------- */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 30); };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
  }

  var menuBtn = document.getElementById('menuToggle');
  var menu = document.getElementById('mobileMenu');
  if (menuBtn && menu) {
    var setMenu = function (open) {
      menu.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    menuBtn.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
    addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* mark the current page in the nav */
  var norm = function (path) { return path.replace(/\.html$/, '').replace(/\/$/, '') || '/'; };
  var here = norm(location.pathname);
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var target = a.getAttribute('href') || '';
    if (target.indexOf('#') === 0) return;
    if (norm(target.split('#')[0]) === here) a.setAttribute('aria-current', 'page');
  });

  /* --------------------------------- reveal ------------------------------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ----------------------------------- faq -------------------------------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var open = item.classList.contains('open');
      item.classList.toggle('open', !open);
      q.setAttribute('aria-expanded', open ? 'false' : 'true');
      a.style.maxHeight = open ? null : a.scrollHeight + 'px';
    });
  });

  /* --------------------------- booking / form embeds ---------------------- */
  function mountEmbed(slot) {
    var kind = slot.getAttribute('data-embed');
    var url = kind === 'booking' ? NIHILO.BOOKING_URL : NIHILO.MS_FORM_URL;
    if (!isSet(url)) return false;

    var frame = document.createElement('iframe');
    frame.src = url;
    frame.title = kind === 'booking'
      ? 'Book a 30-minute call with Nihilo Solutions'
      : 'Tell us about your business';
    frame.setAttribute('loading', 'lazy');
    frame.setAttribute('allow', 'camera; microphone; geolocation');
    slot.innerHTML = '';
    slot.appendChild(frame);

    /* Always give a way out of the frame. Microsoft Bookings and some
       schedulers refuse to render when framed, and a blank box with no escape
       hatch would silently cost bookings. */
    var esc = document.createElement('p');
    esc.className = 'embed-escape';
    esc.innerHTML = 'Not loading? <a href="' + url + '" target="_blank" rel="noopener">Open the ' +
      (kind === 'booking' ? 'booking page' : 'form') + ' in a new tab ↗</a>';
    slot.appendChild(esc);

    slot.hidden = false;
    slot.classList.add('mounted', 'in');
    return true;
  }

  document.querySelectorAll('.embed-slot[data-embed]').forEach(function (slot) {
    var mounted = mountEmbed(slot);
    /* when the booking URL is live, point every book button straight at it too */
    if (mounted) slot.setAttribute('data-mounted', 'true');
  });

  /* Book buttons: if a booking URL is configured and we are not already on a
     page that embeds it, open the scheduler directly. Otherwise fall through
     to the /contact#book anchor already in the markup. */
  if (isSet(NIHILO.BOOKING_URL) && !document.querySelector('.embed-slot[data-embed="booking"]')) {
    document.querySelectorAll('[data-book]').forEach(function (el) {
      el.setAttribute('href', NIHILO.BOOKING_URL);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
  }

  /* fallback intake form is only shown while the Microsoft Form is not set */
  var fallback = document.getElementById('formFallback');
  if (fallback && isSet(NIHILO.MS_FORM_URL)) fallback.hidden = true;
})();
