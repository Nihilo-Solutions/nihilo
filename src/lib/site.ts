export const SITE_NAME = "Nihilo Solutions";
export const SITE_EMAIL = "sam@nihilosolutions.com";
export const SITE_URL = "https://nihilosolutions.com";

/**
 * The Microsoft Bookings page for the discovery call.
 *
 * The plain `/book/` form is deliberate: it is what Microsoft's own embed code
 * takes, and the share link's `?ismsaljsauthenabled` parameter is not needed
 * for framing.
 *
 * A Bookings page only renders inside an iframe when it allows anonymous
 * booking. If it requires sign-in the frame comes up blank, because Microsoft's
 * login screen refuses to be framed. `BookingEmbed` therefore always renders an
 * "open in a new tab" link, and the contact page keeps a form below it. Set this
 * to an empty string to fall back to the labelled placeholder.
 */
export const BOOKING_URL =
  "https://outlook.office.com/book/NihiloSolutionsDiscoveryCall@nihilosolutions.com/";
