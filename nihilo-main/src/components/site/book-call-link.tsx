"use client";

import { track } from "@vercel/analytics";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";
import { BOOKING_URL } from "@/lib/site";

/**
 * Every "Book a call" on the site. The calendar is on another domain, so a
 * click here is the last thing we can observe: without this event there is no
 * signal at all between a page view and a booked appointment.
 *
 * `placement` says which position earned the click (header, hero, cta_band,
 * footer, faq_end, drawer, embed_escape) and `source_page` says which page it
 * came from, so the two questions worth asking are answerable.
 *
 * `embed_escape` is worth watching on its own: it means someone reached the
 * calendar on /contact and had to use the fallback link, which is how a blank
 * Bookings iframe would show up in the data rather than as silence.
 */
export interface BookCallLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  placement: string;
}

export function BookCallLink({ placement, onClick, children, ...rest }: BookCallLinkProps) {
  const pathname = usePathname();

  return (
    <a
      {...rest}
      href={BOOKING_URL}
      target="_blank"
      rel="noopener"
      onClick={(event) => {
        const payload = { source_page: pathname, placement };
        // Neither of these should ever break the navigation.
        try {
          window.gtag?.("event", "book_call_click", payload);
        } catch {
          /* analytics is not worth an interrupted click */
        }
        try {
          track("book_call_click", payload);
        } catch {
          /* custom events need a paid Vercel plan; ignore when unavailable */
        }
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
