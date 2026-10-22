import { SITE_URL } from '@/lib/seo';

// Served at /robots.txt: let search engines crawl everything and tell them
// where the sitemap is.
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
