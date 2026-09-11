'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    _hsq?: unknown[];
  }
}

interface HubSpotProps {
  portalId: string;
}

/**
 * HubSpot serves the loader from a region-specific host, and the account is on
 * na2. A portal that moves region needs this changed too, not just the id.
 */
const HUBSPOT_REGION = 'na2';

export function HubSpot({ portalId }: HubSpotProps) {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // The loader records the first page view by itself. Skip the effect's
    // initial run so that view is not counted twice, then report each
    // client-side navigation, which HubSpot does not observe on its own.
    // Without this every inner page is attributed to whichever URL the visitor
    // first landed on, the same way GA4 behaved before its tracker was fixed.
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    const hsq = (window._hsq = window._hsq ?? []);
    // setPath has to land before trackPageView, or the view is recorded against
    // the previous path. The search string goes with it so campaign parameters
    // survive a client-side nav.
    hsq.push(['setPath', `${pathname}${window.location.search}`]);
    hsq.push(['trackPageView']);
  }, [pathname]);

  if (!portalId) return null;

  // The id is not decorative: HubSpot's own install check and several of its
  // embeds look for a script tagged hs-script-loader.
  return (
    <Script
      id="hs-script-loader"
      src={`https://js-${HUBSPOT_REGION}.hs-scripts.com/${portalId}.js`}
      strategy="afterInteractive"
    />
  );
}
