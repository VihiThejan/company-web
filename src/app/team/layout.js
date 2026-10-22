import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Our Team",
  description:
    "Meet the people behind VIHI IT Solutions: our founder and the engineering, data, platform, marketing and operations leads who build your software.",
  path: '/team',
});

export default function TeamLayout({ children }) {
  return children;
}
