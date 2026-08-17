import { NextRequest, NextResponse } from 'next/server';

interface PageSpeedCategoryResult {
  score: number | null;
}

interface PageSpeedResponse {
  lighthouseResult?: {
    categories: {
      performance?: PageSpeedCategoryResult;
      seo?: PageSpeedCategoryResult;
    };
  };
  categories?: {
    performance?: PageSpeedCategoryResult;
    seo?: PageSpeedCategoryResult;
  };
}

interface AssessmentScores {
  speed: number;
  seo: number;
  mobile: number;
}

const toScore = (val: number | null | undefined): number =>
  val != null ? Math.round(val * 100) : 0;

async function fetchPageSpeedScores(url: string): Promise<AssessmentScores> {
  const apiKey = process.env.PAGESPEED_API_KEY;
  const base = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
  const params = new URLSearchParams({ url });
  if (apiKey) params.set('key', apiKey);

  const [desktopRes, mobileRes] = await Promise.all([
    fetch(`${base}?${params}&strategy=desktop`),
    fetch(`${base}?${params}&strategy=mobile`),
  ]);

  if (!desktopRes.ok || !mobileRes.ok) {
    throw new Error(
      `PageSpeed API error: desktop=${desktopRes.status} mobile=${mobileRes.status}`,
    );
  }

  const [desktop, mobile]: [PageSpeedResponse, PageSpeedResponse] = await Promise.all([
    desktopRes.json(),
    mobileRes.json(),
  ]);

  const desktopCats = desktop.lighthouseResult?.categories ?? desktop.categories ?? {};
  const mobileCats = mobile.lighthouseResult?.categories ?? mobile.categories ?? {};

  return {
    speed: toScore(desktopCats.performance?.score),
    seo: toScore(desktopCats.seo?.score),
    mobile: toScore(mobileCats.performance?.score),
  };
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { website } = (await req.json()) as { website?: string };

    if (!website) {
      return NextResponse.json({ error: 'website is required' }, { status: 400 });
    }

    let url = website.trim();
    if (!/^https?:\/\//i.test(url)) url = `https://${url}`;

    const scores = await fetchPageSpeedScores(url);
    return NextResponse.json({ scores });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('[assess] error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
