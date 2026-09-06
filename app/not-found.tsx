import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#020617] text-white text-center">
      <h2 className="text-4xl font-extrabold text-cyan-400 mb-2">404</h2>
      <p className="text-xl font-semibold mb-4">Page Not Found</p>
      <p className="text-slate-400 mb-6">Could not find requested resource.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
