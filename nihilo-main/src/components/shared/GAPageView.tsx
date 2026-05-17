'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function GAPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).gtag) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    (window as any).gtag('event', 'page_view', {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
