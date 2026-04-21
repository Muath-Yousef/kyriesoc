import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceMono = Space_Mono({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
  variable: '--font-mono' 
});

export const metadata: Metadata = {
  title: 'SOC Root — Enterprise Security',
  description: 'Automated cybersecurity for Jordan & UAE businesses. Enterprise-grade managed security at SMB prices.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="bg-[#05050A] text-gray-100 font-sans antialiased min-h-screen selection:bg-[#00f0ff] selection:text-black">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 h-20 bg-[#05050A]/80 backdrop-blur-xl border-b border-white/5 z-50 flex items-center">
          <div className="container mx-auto px-6 w-full flex items-center justify-between">
            <a href="/" className="font-mono text-xl flex items-center gap-1 group">
              <span className="text-[#00f0ff] font-bold">SOC</span>
              <span className="text-white tracking-widest">ROOT</span>
              <span className="text-amber-400 animate-pulse">_</span>
            </a>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="/" className="text-gray-400 hover:text-[#00f0ff] transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f0ff] transition-all group-hover:w-full"></span>
              </a>
              <a href="/services" className="text-gray-400 hover:text-[#00f0ff] transition-colors relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f0ff] transition-all group-hover:w-full"></span>
              </a>
              <a href="/training" className="text-gray-400 hover:text-[#00f0ff] transition-colors relative group">
                Training
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f0ff] transition-all group-hover:w-full"></span>
              </a>
              <a href="/portal/login" className="text-amber-400 hover:text-amber-300 transition-colors relative group font-mono">
                Client Portal 🔒
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
              </a>
            </div>

            <a href="/scan" className="hidden md:inline-flex bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold uppercase tracking-wider text-xs px-6 py-2.5 rounded hover:scale-105 transition-transform shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_25px_rgba(251,191,36,0.5)]">
              Free Scan
            </a>
          </div>
        </nav>

        {/* Padding for fixing nav overlap */}
        <main className="pt-20">
          {children}
        </main>

        <footer className="border-t border-white/5 py-12 mt-20 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent"></div>
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 text-sm text-gray-500">
            <div>
              <div className="font-mono text-lg mb-2 flex items-center gap-1 opacity-80">
                <span className="text-[#00f0ff] font-bold">SOC</span>
                <span className="text-white tracking-widest">ROOT</span>
              </div>
              <p className="max-w-xs">Enterprise cybersecurity, automated for your business. Serving Jordan & UAE.</p>
            </div>
            <div className="flex md:justify-end gap-12">
              <ul className="flex flex-col gap-2">
                <li className="font-mono text-white tracking-wider mb-2">SERVICES</li>
                <li><a href="/services" className="hover:text-[#00f0ff]">Packages</a></li>
                <li><a href="/scan" className="hover:text-[#00f0ff]">Free Assessment</a></li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li className="font-mono text-white tracking-wider mb-2">COMPANY</li>
                <li><a href="/training" className="hover:text-[#00f0ff]">Training</a></li>
                <li><a href="/portal/login" className="hover:text-[#00f0ff]">Portal</a></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-xs text-gray-600 flex justify-between">
            <p>&copy; 2026 SOC Root — All rights reserved.</p>
            <p>Built by Muath Yousef</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
