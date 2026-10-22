import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How VIHI IT Solutions collects, uses, shares and protects your personal information, and the choices you have.",
  path: '/privacy-policy',
});

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
