import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Founded in Sri Lanka in 2023, VIHI IT Solutions is a team of engineers, designers and strategists building powerful, practical software.",
  path: '/aboutus',
});

export default function AboutusLayout({ children }) {
  return children;
}
