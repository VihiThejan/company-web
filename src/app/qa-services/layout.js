import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "QA & Software Testing Services",
  description:
    "Test automation, manual and functional testing, performance and load testing, and security and penetration testing to ship reliable software.",
  path: '/qa-services',
});

export default function QaServicesLayout({ children }) {
  return children;
}
