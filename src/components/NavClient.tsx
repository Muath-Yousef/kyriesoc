"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Capabilities" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Evidence" },
  { href: "/contact", label: "Contact" },
];

export default function NavClient() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-[72px] border-b transition-all duration-300 ${
        scrolled
          ? "border-teal-500/15 bg-[#0c0c0c]/95 shadow-[0_1px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-teal-500/10 bg-[#0c0c0c]/80 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 transition-colors group-hover:bg-teal-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c0c0c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-teal-400">SOC</span>
            <span className="text-white">Root</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-medium text-neutral-400 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 transition-colors hover:text-teal-400 ${isActive(link.href) ? "text-white" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/Muath-Yousef"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <Link
            href="/scan"
            className="angular-cut bg-teal-500 px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-teal-400"
          >
            Scope a review
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex flex-col gap-1.5 rounded-lg p-2 transition-colors hover:bg-white/5 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          <span className={`block h-0.5 w-5 bg-white transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`border-b border-white/5 bg-[#0f0f0f] px-6 transition-all md:hidden ${
          mobileOpen ? "max-h-[520px] py-5 opacity-100" : "max-h-0 overflow-hidden py-0 opacity-0"
        }`}
      >
        <div className="space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                isActive(link.href) ? "bg-teal-500/10 text-teal-400" : "text-neutral-300 hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/scan"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block bg-teal-500 px-4 py-3 text-center text-sm font-bold text-black"
          >
            Scope a review
          </Link>
        </div>
      </div>
    </nav>
  );
}
