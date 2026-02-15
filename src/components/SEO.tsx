import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'profile';
    noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    ogImage = 'https://nihilosolutions.com/logo.png',
    ogType = 'website',
    noindex = false
}) => {
    const siteTitle = 'Nihilo Solutions';
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
    const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

    return (
        <Helmet>
            {/* Basic Internal Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
};

export default SEO;
