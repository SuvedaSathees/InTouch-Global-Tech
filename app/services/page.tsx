import type { Metadata } from 'next';
import { ServicesPageContent } from '@/components/sections/services-page-content';

export const metadata: Metadata = {
  title: 'Services — Everything Your Business Needs. Under One Roof.',
  description:
    'From your first logo to your latest software upgrade, we help businesses build, automate, create, transform, and grow with technology.',
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesPageContent />
    </main>
  );
}

