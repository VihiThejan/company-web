import industriesData from '@/lib/industriesData';
import { projectData } from '@/lib/projectData';
import { SITE_URL } from '@/lib/seo';

// Served at /sitemap.xml and built at deploy time.
// Add any new top-level page to STATIC_PATHS; industry and portfolio
// pages are picked up from their data files automatically.
const STATIC_PATHS = [
  '/',
  '/technology',
  '/marketing',
  '/design',
  '/qa-services',
  '/portfolio',
  '/industries',
  '/aboutus',
  '/team',
  '/careers',
  '/careers/visionary-challenge',
  '/contactus',
  '/privacy-policy',
  '/terms-conditions',
];

export default function sitemap() {
  const paths = [
    ...STATIC_PATHS,
    ...industriesData.map((industry) => `/industries/${industry.slug}`),
    ...Object.keys(projectData).map((slug) => `/portfolio/${slug}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path === '/' ? '' : path}` }));
}
