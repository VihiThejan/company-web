import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Join VIHI IT Solutions. See open roles, our remote-first culture, the hiring process and the Vihi Visionary Challenge internship programme.",
  path: '/careers',
});

export default function CareersLayout({ children }) {
  return children;
}
