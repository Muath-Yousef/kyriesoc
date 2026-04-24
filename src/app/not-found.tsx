import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import DynamicBackground from '@/components/DynamicBackground';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-neutral-400 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <DynamicBackground />
      <div className="relative z-10 text-center max-w-lg">
        <div className="w-24 h-24 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-8">
          <ShieldAlert className="w-12 h-12 text-teal-400" />
        </div>
        <h1 className="text-6xl font-extrabold text-white mb-4 tracking-tight">404</h1>
        <h2 className="text-2xl font-bold text-teal-400 mb-6">Asset Not Found</h2>
        <p className="mb-10 text-lg leading-relaxed">
          The resource you are attempting to access does not exist on this server, or your clearance level is insufficient.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 rounded-none font-bold transition-all angular-cut">
            Return to Dashboard
          </Link>
          <Link href="/contact" className="border border-white/10 hover:border-teal-500/30 px-8 py-4 rounded-xl font-bold transition-all text-neutral-300">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
