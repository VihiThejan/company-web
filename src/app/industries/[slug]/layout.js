import industriesData from '@/lib/industriesData';
import { pageMetadata, clampDescription } from '@/lib/seo';

// Build one static page per industry at deploy time. Unknown slugs return a
// real 404, so search engines never index an empty "not found" page.
export const dynamicParams = false;

export function generateStaticParams() {
  return industriesData.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);
  if (!industry) return {};
  return pageMetadata({
    title: `IT Solutions for ${industry.title.replace(/\s*Services$/, '')}`,
    description: clampDescription(industry.shortDescription),
    path: `/industries/${slug}`,
  });
}

export default function IndustryLayout({ children }) {
  return children;
}
