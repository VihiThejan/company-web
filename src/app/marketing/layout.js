import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Full-Stack, Cloud, Data & AI Services",
  description:
    "Full-stack development, cloud computing, data engineering, business intelligence and AI/ML services that help brands scale in a digital-first world.",
  path: '/marketing',
});

export default function MarketingLayout({ children }) {
  return children;
}
