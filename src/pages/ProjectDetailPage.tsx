import { projects } from '@/lib/site-config';
import { PageHeader } from '@/components/page-header';
import { CTASection } from '@/components/sections/cta-section';

export function ProjectDetailPage({ params }: { params?: { slug?: string } }) {
  const project = projects.find((p) => p.slug === params?.slug) || projects[0];

  return (
    <main className="min-h-screen bg-white text-slate-900 select-none">
      <PageHeader
        label={`Case Study • ${project.industry}`}
        title={project.name}
        description={project.description}
      />
      <CTASection />
    </main>
  );
}
export default ProjectDetailPage;
