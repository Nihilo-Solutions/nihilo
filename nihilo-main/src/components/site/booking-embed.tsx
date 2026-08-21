import { BOOKING_URL, SITE_EMAIL } from "@/lib/site";
import { BookCallLink } from "@/components/site/book-call-link";

/**
 * The discovery-call scheduler. Always renders a way out of the frame: a
 * Bookings page that requires sign-in comes up blank when framed, and a blank
 * box with no escape hatch silently costs bookings.
 */
export function BookingEmbed() {
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
        <BookCallLink placement="embed_escape" className="text-on-dark underline decoration-accent">
          Open the booking page in a new tab
        </BookCallLink>
        , or email{" "}
        <a className="text-on-dark underline decoration-accent" href={`mailto:${SITE_EMAIL}`}>
          {SITE_EMAIL}
        </a>
        .
      </p>
    </div>
  );
}
