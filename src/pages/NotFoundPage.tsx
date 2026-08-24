import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MagneticButton } from '@/components/magnetic-button';

export function NotFoundPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-white text-slate-900 px-4 text-center select-none pt-24">
      <div className="max-w-md">
        <span className="text-6xl font-black font-mono text-blue-600 block mb-4">404</span>
        <h1 className="text-3xl font-black text-slate-950 mb-3">Page Not Found</h1>
        <p className="text-sm text-slate-600 mb-8 font-normal">
          The requested route does not exist or has been relocated.
        </p>

        <MagneticButton href="/" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Homepage
        </MagneticButton>
      </div>
    </main>
  );
}
export default NotFoundPage;
