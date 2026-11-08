import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Vihi Visionary Challenge Internship",
  description:
    "Pitch your product idea to VIHI IT Solutions any time of year. If your idea is strong, we'll offer you an internship to build it with our team.",
  path: '/careers/visionary-challenge',
});

export default function CareersVisionaryChallengeLayout({ children }) {
  return children;
}
