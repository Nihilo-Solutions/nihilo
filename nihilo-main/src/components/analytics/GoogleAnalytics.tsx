'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // The gtag('config') call below already sends the page_view for the first
    // load. Skip the effect's initial run so that view isn't counted twice;
    // fire only on subsequent client-side navigations.
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    // page_location is what GA4 keys the page dimension off. Sending page_path
    // alone left every client-side navigation attributed to whichever URL the
    // visitor first landed on, which undercounts inner pages and overcounts the
    // entry page. window.location.href also carries the query string, so UTM
    // parameters survive a client-side nav without needing useSearchParams and
    // the Suspense boundary that would force.
    window.gtag?.('event', 'page_view', {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
