import type { Metadata } from 'next';
import { InteractiveServicesStudio } from '@/components/sections/interactive-services-studio';

export const metadata: Metadata = {
  title: 'Services & Capabilities',
  description:
    'ERP, CRM, web, mobile, custom software, UI/UX, automation, API development, cloud, and AI integration — everything you need to build, modernize, and scale.',
};

export default function ServicesPage() {
  return (
    <main>
      <InteractiveServicesStudio />
    </main>
  );
}
