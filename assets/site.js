/* ==========================================================================
   Nihilo Solutions - shared site behaviour
   --------------------------------------------------------------------------
   INTEGRATION CONFIG

     BOOKING_URL  Discovery-call calendar. Currently the Microsoft Bookings
                  page for "Nihilo Solutions Discovery Call". The plain /book/
                  URL is used because that is the form Microsoft's own embed
                  code takes; the ?ismsaljsauthenabled parameter on the share
                  link is not needed for embedding.

                  NOTE: Microsoft Bookings pages only render inside an iframe
                  when the booking page allows anonymous booking. If the page
                  requires sign-in the frame comes up blank, because
                  Microsoft's login screen refuses to be framed. Every booking
                  section therefore also renders an "open in a new tab" link.
                  If the frame is blank on the live site, drop the embed and
                  link out instead.

   While BOOKING_URL is left as REPLACE_ME the page renders a labelled
   placeholder instead of a broken frame, and the email path stays available.
   ========================================================================== */

var NIHILO = {
  BOOKING_URL: 'https://outlook.office.com/book/NihiloSolutionsDiscoveryCall@nihilosolutions.com/'
};

(function () {
  'use strict';

  function isSet(value) {
    return typeof value === 'string' && value && value.indexOf('REPLACE_ME') === -1;
  }

  /* ---- mobile navigation ------------------------------------------------ */

  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');

  if (menuBtn && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    menuBtn.addEventListener('click', function () {
      setOpen(!nav.classList.contains('open'));
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        setOpen(false);
        menuBtn.focus();
      }
    });

    /* Following a link inside the drawer should not leave it open behind the
       new page on browsers that restore scroll position. */
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setOpen(false);
    });
  }

  /* ---- scheduler embed -------------------------------------------------- */

  function mountEmbed(slot) {
    if (!isSet(NIHILO.BOOKING_URL)) return false;

    var frame = document.createElement('iframe');
    frame.src = NIHILO.BOOKING_URL;
    frame.title = 'Book a 30-minute discovery call with Nihilo Solutions';
    frame.setAttribute('loading', 'lazy');
    slot.innerHTML = '';
    slot.appendChild(frame);

    /* Always give a way out of the frame. A blank box with no escape hatch
       would silently cost bookings. */
    var escape = document.createElement('p');
    escape.className = 'embed-escape';
    escape.innerHTML =
      'Not loading? <a href="' + NIHILO.BOOKING_URL + '" target="_blank" rel="noopener">' +
      'Open the booking page in a new tab</a>';
    slot.appendChild(escape);

    slot.setAttribute('data-mounted', 'true');
    return true;
  }

  var embeds = document.querySelectorAll('.embed-slot[data-embed="booking"]');
  embeds.forEach(mountEmbed);

  /* Book buttons: if the calendar is live and this page does not embed it,
     open the scheduler directly. Otherwise fall through to the /contact#book
     anchor already in the markup. */
  if (isSet(NIHILO.BOOKING_URL) && embeds.length === 0) {
    document.querySelectorAll('[data-book]').forEach(function (el) {
      el.setAttribute('href', NIHILO.BOOKING_URL);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
  }
})();
