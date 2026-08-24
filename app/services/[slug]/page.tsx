import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/lib/site-config';
import { ServiceDetail } from '@/components/sections/service-detail';
import { CTASection } from '@/components/sections/cta-section';

export function generateStaticParams() {
  return services.filter((s) => s.hasPage).map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.title,
    description: service.short,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service || !service.hasPage) notFound();

  const ctaMap: Record<string, { title: string; buttonText: string }> = {
    'erp-development': { title: 'Need a custom ERP?', buttonText: 'Build Your ERP' },
    'crm-development': { title: 'Need a custom CRM?', buttonText: 'Build Your CRM' },
    'website-development': { title: 'Ready for a better website?', buttonText: 'Start Your Website' },
    'mobile-app-development': { title: 'Need a mobile app?', buttonText: 'Start Your App' },
    'custom-software': { title: 'Have a unique problem?', buttonText: 'Start Your Project' },
  };

  const cta = ctaMap[params.slug] || { title: 'Ready to start?', buttonText: 'Start Your Project' };

  return (
    <>
      <ServiceDetail service={service} />
      <CTASection title={cta.title} buttonText={cta.buttonText} />
    </>
  );
}
