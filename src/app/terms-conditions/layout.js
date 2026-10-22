import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "The terms that apply when you use the VIHI IT Solutions website and services.",
  path: '/terms-conditions',
});

export default function TermsConditionsLayout({ children }) {
  return children;
}
