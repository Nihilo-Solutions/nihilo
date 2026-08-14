/* ==========================================================================
   Nihilo Solutions - shared site behaviour
   --------------------------------------------------------------------------
   INTEGRATION CONFIG
   Replace the two placeholder values below with the live URLs. Nothing else
   in the site needs to change: every "Book a call" button and the intake page
   read from here.

     BOOKING_URL  Shared discovery-call calendar for Jake and Ish.
                  Calendly, Microsoft Bookings, or any embeddable scheduler.
                  Use the direct embed URL, e.g.
                    https://calendly.com/nihilo/discovery
                    https://outlook.office365.com/book/NihiloSolutions@.../

     MS_FORM_URL  Microsoft Form for "Tell us about your business".
                  In Forms use Collect responses > Embed and copy the src of
                  the generated iframe, e.g.
                    https://forms.office.com/Pages/ResponsePage.aspx?id=XXXX&embed=true

   While a value is left as REPLACE_ME the page renders a labelled placeholder
   instead of a broken frame, and the fallback path stays available.
   ========================================================================== */

var NIHILO = {
  BOOKING_URL: 'REPLACE_ME',
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
