import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Industries We Serve",
  description:
    "Secure, compliant digital solutions for finance, tourism and government, built around the challenges of each sector.",
  path: '/industries',
});

export default function IndustriesLayout({ children }) {
  return children;
}
