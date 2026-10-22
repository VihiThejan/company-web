import { projectData } from '@/lib/projectData';
import { pageMetadata, clampDescription } from '@/lib/seo';

// Build one static page per project at deploy time. Unknown slugs return a
// real 404, so search engines never index an empty "not found" page.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectData[slug];
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: clampDescription(project.shortDescription),
    path: `/portfolio/${slug}`,
  });
}

export default function ProjectLayout({ children }) {
  return children;
}
