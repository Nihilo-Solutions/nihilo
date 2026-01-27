import type { Metadata } from 'next';

const siteConfig = {
  name: 'Nihilo Solutions',
  description: 'Secure, tenant-local RAG pipelines and agentic automation on Azure & AWS. Production-ready enterprise AI.',
  url: 'https://nihilosolutions.com',
  ogImage: 'https://nihilosolutions.com/logo.png',
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: 'website',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    icons: {
      icon: '/logo.png',
      apple: '/logo.png',
    },
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export { siteConfig };
