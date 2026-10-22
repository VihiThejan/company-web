// Shared SEO settings for every page.
// Change SITE_URL if the site ever moves to a different domain.

export const SITE_URL = 'https://vihiitsolutions.com';
export const SITE_NAME = 'VIHI IT Solutions';

export const DEFAULT_TITLE = 'VIHI IT Solutions – Software & IT Services in Sri Lanka';
export const DEFAULT_DESCRIPTION =
  'VIHI IT Solutions builds custom software, web and mobile apps, cloud systems and digital marketing for businesses in Sri Lanka and beyond.';

// Image shown when a page is shared on LinkedIn, WhatsApp, Facebook, X, etc.
// (src/app/opengraph-image.png).
const SHARE_IMAGE = {
  url: '/opengraph-image.png',
  width: 1200,
  height: 630,
  alt: SITE_NAME,
};

/**
 * Metadata for one page: its own title, description and canonical URL,
 * plus matching link-preview (Open Graph / Twitter) tags.
 *
 * The site name is added to the title, e.g. "Careers" -> "Careers | VIHI IT
 * Solutions", unless the title is already long enough that Google would cut
 * it off.
 */
export function pageMetadata({ title, description, path }) {
  let fullTitle = DEFAULT_TITLE;
  if (title) {
    const withBrand = `${title} | ${SITE_NAME}`;
    fullTitle = withBrand.length <= 65 ? withBrand : title;
  }
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}

/** Trim a long description to a search-friendly length (~160 characters). */
export function clampDescription(text, max = 160) {
  const clean = (text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

// The company's social profiles. Used for the footer icons and for the
// structured data below. Add Instagram, YouTube or X here once those
// accounts exist; nothing else needs changing.
export const SOCIAL_PROFILES = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/vihi-it-solutions/' },
  { label: 'Facebook', url: 'https://www.facebook.com/vihiitsolutions' },
];

const ORG_ID = `${SITE_URL}/#organization`;
const LOGO = `${SITE_URL}/brand/vihi-logo-512.png`;
const EMAIL = 'info@vihiitsolutions.com';
const PHONE = '+94724444082';
const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '239/9, Uduwana Temple Road, Uduwana',
  addressLocality: 'Homagama',
  addressRegion: 'Western Province',
  postalCode: '10200',
  addressCountry: 'LK',
};

// Company details for Google's knowledge panel and local results, using only
// details that already appear on the contact page. Each entity is its own
// JSON-LD block (rather than one @graph) because many SEO checkers cannot read
// @graph and report it as an error. The Organization and ProfessionalService
// blocks share one @id, so Google treats them as the same company.
export const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO,
    description: DEFAULT_DESCRIPTION,
    foundingDate: '2023',
    email: EMAIL,
    telephone: PHONE,
    address: ADDRESS,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: EMAIL,
      telephone: PHONE,
      availableLanguage: 'English',
    },
    sameAs: SOCIAL_PROFILES.map((profile) => profile.url),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    image: LOGO,
    email: EMAIL,
    telephone: PHONE,
    address: ADDRESS,
    areaServed: 'Worldwide',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
  },
];
