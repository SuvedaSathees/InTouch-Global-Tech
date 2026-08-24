import { services } from '@/lib/site-config';
import { ServiceDetail } from '@/components/sections/service-detail';
import { CTASection } from '@/components/sections/cta-section';

export function ServiceDetailPage({ params }: { params?: { slug?: string } }) {
  const service = services.find((s) => s.slug === params?.slug) || services[0];

  return (
    <main className="bg-white text-slate-900">
      <ServiceDetail service={service} />
      <CTASection />
    </main>
  );
}
export default ServiceDetailPage;
