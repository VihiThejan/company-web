import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Talk to VIHI IT Solutions about your project. Email info@vihiitsolutions.com, call +94 72 444 4082, or send a message and we will reply within 24 hours.",
  path: '/contactus',
});

export default function ContactusLayout({ children }) {
  return children;
}
