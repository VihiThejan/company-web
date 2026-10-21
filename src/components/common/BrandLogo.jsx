import React from 'react';
import {
  BRAND_ICON_PATH,
  BRAND_WORDMARK_PATH,
  BRAND_VIEWBOX,
  BRAND_HORIZONTAL_TRANSFORMS,
} from '@/lib/brandPaths';

/**
 * VIHI IT Solutions logo.
 *
 * variant:
 *  - "mark"        the circular D·i symbol on its own
 *  - "horizontal"  symbol + wordmark side by side (header, footer)
 *  - "stacked"     symbol above the wordmark (the master lockup)
 *
 * The logo is drawn in currentColor, so set `color` on it (or a parent)
 * to switch between ink and white versions.
 */
export default function BrandLogo({
  variant = 'horizontal',
  height = 40,
  color,
  title = 'VIHI IT Solutions',
  style,
  className,
}) {
  const shared = {
    xmlns: 'http://www.w3.org/2000/svg',
    role: 'img',
    'aria-label': title,
    height,
    className,
    style: { display: 'block', width: 'auto', color, ...style },
  };

  if (variant === 'mark') {
    return (
      <svg viewBox={BRAND_VIEWBOX.mark} {...shared}>
        <title>{title}</title>
        <path fill="currentColor" fillRule="evenodd" d={BRAND_ICON_PATH} />
      </svg>
    );
  }

  if (variant === 'stacked') {
    return (
      <svg viewBox={BRAND_VIEWBOX.stacked} {...shared}>
        <title>{title}</title>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d={BRAND_ICON_PATH + BRAND_WORDMARK_PATH}
        />
      </svg>
    );
  }

  return (
    <svg viewBox={BRAND_VIEWBOX.horizontal} {...shared}>
      <title>{title}</title>
      <path
        fill="currentColor"
        fillRule="evenodd"
        transform={BRAND_HORIZONTAL_TRANSFORMS.icon}
        d={BRAND_ICON_PATH}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        transform={BRAND_HORIZONTAL_TRANSFORMS.wordmark}
        d={BRAND_WORDMARK_PATH}
      />
    </svg>
  );
}
