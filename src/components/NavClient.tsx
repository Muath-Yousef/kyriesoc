"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/contact", label: "Contact" },
];

const PORTAL_LINKS = [
  { href: "/portal/order-status", label: "Track Order", icon: "📋" },
  { href: "/portal/login", label: "Sign In", icon: "🔑" },
];

export default function NavClient() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] border-b transition-all duration-300 ${
          scrolled
            ? "border-emerald-500/15 bg-[#0c0c0c]/95 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.4)]"
            : "border-emerald-500/10 bg-[#0c0c0c]/80 backdrop-blur-xl"
        }`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center group-hover:bg-emerald-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c0c0c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-emerald-400">SOC</span>
              <span className="text-white"> Root</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-emerald-400 transition-colors relative group py-1 ${
                  isActive(link.href) ? "text-white" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-emerald-400 transition-all duration-300 group-hover:w-full ${
                    isActive(link.href) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/portal/order-status"
              className="text-sm text-neutral-500 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Track Order
            </Link>
            <Link
              href="/portal/login"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/scan"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm px-5 py-2.5 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] tracking-wide"
            >
              Free Scan
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-[72px] left-0 right-0 bg-[#0f0f0f] border-b border-white/5 transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-6 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "text-neutral-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                )}
              </Link>
            ))}

            <div className="border-t border-white/5 pt-3 mt-3 space-y-1">
              {PORTAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3">
              <Link
                href="/scan"
                className="w-full block text-center bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-4 rounded-xl transition-all text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                Start Free Scan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
