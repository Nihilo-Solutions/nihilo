import type { CSSProperties } from 'react';

type LogoVariant = 'lockup' | 'icon';

interface LogoProps {
  variant?: LogoVariant;
  width?: number | string;
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
}

/**
 * Concept 03 N-Aperture logo, primary horizontal lockup or icon mark.
 * Source: ~/Desktop/nihilo/design/design_system/NIHILO_BRAND_KIT.md section 5.
 *
 * Strokes and text use currentColor so the parent controls the foreground.
 * The azure aperture dot is hardcoded #2D6BFF per brand rule:
 * "Never recolor the azure dot."
 */
export default function Logo({
  variant = 'lockup',
  width,
  className,
  style,
  ariaLabel = 'Nihilo Solutions',
}: LogoProps) {
  const sizeStyle: CSSProperties = {
    width: width ?? (variant === 'lockup' ? '180px' : '48px'),
    height: 'auto',
    ...style,
  };

  if (variant === 'icon') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 80 80"
        fill="none"
        role="img"
        aria-label={ariaLabel}
        className={className}
        style={sizeStyle}
      >
        <rect x="8" y="8" width="64" height="64" rx="3" stroke="currentColor" strokeWidth="1.25" fill="none" opacity="0.4" />
        <rect x="22" y="18" width="6" height="44" fill="currentColor" />
        <rect x="52" y="18" width="6" height="44" fill="currentColor" />
        <path d="M28 18 L58 62 L58 54 L28 18 Z" fill="currentColor" />
        <rect x="36" y="36" width="8" height="8" fill="#0B0D14" />
        <rect x="38" y="38" width="4" height="4" fill="#2D6BFF" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 80"
      fill="none"
      role="img"
      aria-label={ariaLabel}
      className={className}
      style={sizeStyle}
    >
      <g transform="translate(8 8)">
        <rect x="0" y="0" width="64" height="64" rx="3" stroke="currentColor" strokeWidth="1.25" fill="none" opacity="0.4" />
        <rect x="14" y="10" width="6" height="44" fill="currentColor" />
        <rect x="44" y="10" width="6" height="44" fill="currentColor" />
        <path d="M20 10 L50 54 L50 46 L20 10 Z" fill="currentColor" />
        <rect x="28" y="28" width="8" height="8" fill="#0B0D14" />
        <rect x="30" y="30" width="4" height="4" fill="#2D6BFF" />
      </g>
      <text x="92" y="46" fontFamily="var(--font-display)" fontSize="34" fontWeight="600" letterSpacing="-0.04em" fill="currentColor">
        nihilo
      </text>
      <text x="93" y="63" fontFamily="var(--font-mono)" fontSize="9" fontWeight="500" letterSpacing="0.4em" fill="currentColor" opacity="0.55">
        SOLUTIONS
      </text>
    </svg>
  );
}
