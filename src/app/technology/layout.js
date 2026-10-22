import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Software Development & Cloud Services",
  description:
    "Custom end-to-end software, cloud architecture, data engineering and AI/ML integration from VIHI IT Solutions — reliable, scalable and secure.",
  path: '/technology',
});

export default function TechnologyLayout({ children }) {
  return children;
}
