import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, siteConfig } from '@/lib/site-config';
import { ProjectDetailExperience } from '@/components/sections/project-detail-experience';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function findProject(slug: string) {
  const direct = projects.find((p) => p.slug === slug);
  if (direct) return direct;
  if (slug === 'vchemics' || slug === 'vchemics-india' || slug === 'vchemics-india-solutions') {
    return projects.find((p) => p.slug === 'vchemics-website');
  }
  if (slug === 'junior-junction-school') {
    return projects.find((p) => p.slug === 'junior-junction');
  }
  if (slug === 'portfolio') {
    return projects.find((p) => p.slug === 'portfolio-website');
  }
  if (slug === 'job-campus') {
    return projects.find((p) => p.slug === 'my-job-campus-website');
  }
  if (slug === 'erp-system') {
    return projects.find((p) => p.slug === 'magnertia-erp-system');
  }
  if (slug === 'ev-charging-station-website') {
    return projects.find((p) => p.slug === 'ev-station-website');
  }
  if (slug === 'rtc-company-erp-system') {
    return projects.find((p) => p.slug === 'rpc-erp-system');
  }
  if (slug === 'ev-mobile-app' || slug === 'ev-mobile') {
    return projects.find((p) => p.slug === 'ev-mobile-application');
  }
  return undefined;
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = findProject(params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} — Project Case Study | ${siteConfig.name}`,
    description: project.short,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = findProject(params.slug);
  if (!project) notFound();

  return (
    <main>
      <ProjectDetailExperience project={project} />
    </main>
  );
}
