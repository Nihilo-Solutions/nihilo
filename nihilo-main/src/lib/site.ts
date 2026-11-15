export const SITE_NAME = "Nihilo Solutions";
export const SITE_EMAIL = "sam@nihilosolutions.com";
export const SITE_URL = "https://nihilosolutions.com";

/**
 * The Microsoft Bookings page for the discovery call. Every "Book a call" and
 * "Book a discovery call" button points here.
 *
 * The plain `/book/` form is what Microsoft's own embed code takes; the share
 * link's `?ismsaljsauthenabled` parameter is not needed for framing.
 *
 * A Bookings page only renders inside an iframe when it allows anonymous
 * booking. If it requires sign-in the frame comes up blank, because Microsoft's
 * login screen refuses to be framed, so `BookingEmbed` always renders an open
 * in a new tab link alongside it.
 */
export const BOOKING_URL =
  "https://outlook.office.com/book/NihiloSolutionsDiscoveryCall@nihilosolutions.com/";
