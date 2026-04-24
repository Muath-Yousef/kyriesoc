"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ClipboardList, Key, BookOpen, LogOut } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/contact", label: "Contact" },
];

const PORTAL_LINKS = [
  { href: "/portal/order-status", label: "Track Order", icon: <ClipboardList className="w-4 h-4" /> },
  { href: "/portal/login", label: "Sign In", icon: <Key className="w-4 h-4" /> },
];

export default function NavClient() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setShowAccountMenu(false);
  }, [pathname]);

  // Check auth state
  useEffect(() => {
    const auth = localStorage.getItem("soc_auth");
    const name = localStorage.getItem("soc_auth_name");
    if (auth === "true" && name) {
      setIsLoggedIn(true);
      setUserName(name);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("soc_auth");
    localStorage.removeItem("soc_auth_email");
    localStorage.removeItem("soc_auth_name");
    localStorage.removeItem("soc_verified");
    setIsLoggedIn(false);
    setUserName("");
    setShowAccountMenu(false);
    window.location.href = "/";
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const initials = userName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] border-b transition-all duration-300 ${
          scrolled
            ? "border-teal-500/15 bg-[#0c0c0c]/95 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.4)]"
            : "border-teal-500/10 bg-[#0c0c0c]/80 backdrop-blur-xl"
        }`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <span className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center group-hover:bg-teal-400 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0c0c0c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-teal-400">SOC</span>
              <span className="text-white"> Root</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-teal-400 transition-colors relative group py-1 ${
                  isActive(link.href) ? "text-white" : ""
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-teal-400 transition-all duration-300 group-hover:w-full ${
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
              className="text-sm text-neutral-500 hover:text-teal-400 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Track Order
            </Link>

            {isLoggedIn ? (
              /* ── Logged In: Avatar + Dropdown ── */
              <div className="relative">
                <button
                  onClick={() => setShowAccountMenu(!showAccountMenu)}
                  className="flex items-center gap-2 py-1.5 px-3 rounded-xl hover:bg-white/5 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {initials || "U"}
                  </div>
                  <span className="text-sm text-neutral-300 font-medium max-w-[100px] truncate">{userName.split(" ")[0]}</span>
                  <svg className={`w-3 h-3 text-neutral-500 transition-transform ${showAccountMenu ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showAccountMenu && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowAccountMenu(false)} />
                    <div className="absolute right-0 mt-2 w-56 z-50 border border-white/10 bg-[#141414] rounded-xl shadow-2xl overflow-hidden">
                      <div className="px-4 py-3 border-b border-white/5">
                        <p className="text-sm font-semibold text-white truncate">{userName}</p>
                        <p className="text-xs text-neutral-600 truncate">{localStorage.getItem("soc_auth_email") || ""}</p>
                      </div>
                      <div className="py-1">
                        <Link href="/training" className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          My Training
                        </Link>
                        <Link href="/portal/order-status" className="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          My Orders
                        </Link>
                      </div>
                      <div className="border-t border-white/5 py-1">
                        <button onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-all text-left">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* ── Not Logged In ── */
              <Link
                href="/portal/login"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Sign In
              </Link>
            )}

            <Link
              href="/scan"
              className="bg-teal-500 hover:bg-teal-400 text-black font-bold text-sm px-5 py-2.5 rounded-none transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] tracking-wide angular-cut"
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
                    ? "bg-teal-500/10 text-teal-400 border border-teal-500/20"
                    : "text-neutral-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                )}
              </Link>
            ))}

            {/* ── Mobile: Auth-aware section ── */}
            <div className="border-t border-white/5 pt-3 mt-3 space-y-1">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      {initials || "U"}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white truncate">{userName}</p>
                      <p className="text-xs text-neutral-600 truncate">{localStorage.getItem("soc_auth_email") || ""}</p>
                    </div>
                  </div>
                  <Link href="/training"
                    className="flex items-center gap-3 py-3 px-4 rounded-xl text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all">
                    <BookOpen className="w-4 h-4" /> My Training
                  </Link>
                  <Link href="/portal/order-status"
                    className="flex items-center gap-3 py-3 px-4 rounded-xl text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all">
                    <ClipboardList className="w-4 h-4" /> My Orders
                  </Link>
                  <button onClick={handleLogout}
                    className="w-full flex items-center gap-3 py-3 px-4 rounded-xl text-sm text-red-400 hover:bg-red-500/10 transition-all text-left">
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>

            <div className="pt-3">
              <Link
                href="/scan"
                className="w-full block text-center bg-teal-500 hover:bg-teal-400 text-black font-bold py-4 rounded-none transition-all text-sm tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.25)] angular-cut"
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
