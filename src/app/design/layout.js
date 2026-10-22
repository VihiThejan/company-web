import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "UI/UX & Brand Design",
  description:
    "Human-centred UI/UX design, brand identity, web and mobile design, and prototyping that turn research into digital experiences people enjoy using.",
  path: '/design',
});

export default function DesignLayout({ children }) {
  return children;
}
