import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Projects by VIHI IT Solutions: insurance data automation, the UniHub e-learning platform, AI-driven tourism, data centre inventory, mobile apps and websites.",
  path: '/portfolio',
});

export default function PortfolioLayout({ children }) {
  return children;
}
