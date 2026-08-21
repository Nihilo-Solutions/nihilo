import { BOOKING_URL, SITE_EMAIL } from "@/lib/site";

/**
 * The discovery-call scheduler.
 *
 * Always renders a way out of the frame. A Microsoft Bookings page that
 * requires sign-in comes up blank when framed, and a blank box with no escape
 * hatch silently costs bookings.
 */
export function BookingEmbed() {
  if (!BOOKING_URL) {
    return (
      <div className="rounded-md border border-dashed border-dark-line p-6 text-center">
        <p className="text-base font-medium text-on-dark">Booking calendar</p>
        <p className="mt-2 text-sm text-on-dark-muted">
          Set <code>BOOKING_URL</code> in <code>src/lib/site.ts</code> to mount the live
          scheduler here.
        </p>
        <p className="mt-4 text-sm">
          <a
            className="text-on-dark underline decoration-accent"
            href={`mailto:${SITE_EMAIL}?subject=Discovery%20call`}
          >
            Email us to arrange a time
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      <iframe
        src={BOOKING_URL}
        title="Book a 30-minute discovery call with Nihilo Solutions"
        loading="lazy"
        className="min-h-[34rem] w-full rounded-md border-0 bg-on-dark"
      />
      <p className="text-center text-[0.8125rem] text-on-dark-muted">
        Not loading?{" "}
        <a className="text-on-dark underline decoration-accent" href={BOOKING_URL} target="_blank" rel="noopener">
          Open the booking page in a new tab
        </a>
      </p>
    </div>
  );
}
