import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Vihi Visionary Challenge Internship",
  description:
    "Don't just intern. Innovate. Pitch your product idea to VIHI IT Solutions; the top 10 finalists present at Pitch Day for a chance to build it with us.",
  path: '/careers/visionary-challenge',
});

export default function CareersVisionaryChallengeLayout({ children }) {
  return children;
}
