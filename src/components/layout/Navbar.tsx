"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Logo } from "@/components/layout/Logo";
import { navItems } from "@/constants/navigation";
import { siteConfig } from "@/constants/theme";
import { t, cn } from "@/lib/utils";

export function Navbar() {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const ctaLabel = {
    th: "เริ่มสำรวจ",
    en: "Start Exploring",
    cn: "开始探索",
  };

  const searchLabel = {
    th: "ค้นหา",
    en: "Search",
    cn: "搜索",
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "navbar-glass fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled && "navbar-glass-scrolled"
        )}
      >
        <nav
          className="mx-auto flex h-[92px] max-w-7xl min-w-0 items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div className="flex min-w-0 shrink items-center gap-2 sm:gap-3">
            <Logo
              size="lg"
              priority
              alt={t(siteConfig.name, locale)}
              onClick={() => setMobileOpen(false)}
              className="max-w-[min(52vw,180px)]"
            />
            <p className="hidden truncate text-xs text-text-soft sm:block">
              {t(siteConfig.tagline, locale)}
            </p>
          </div>

          {/* Desktop Nav — centered */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <ul className="navbar-pill-glass flex items-center gap-1 rounded-full p-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative block rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200",
                        active
                          ? "text-wood-dark"
                          : "text-text-muted hover:text-wood-dark"
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-white/90 shadow-sm backdrop-blur-sm ring-1 ring-white/60 dark:bg-white/10 dark:ring-white/10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className={cn("relative z-10", active && "text-wood-dark")}>
                        {t(item.label, locale)}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/explore"
              className="navbar-action-glass flex h-10 w-10 items-center justify-center rounded-xl text-text-muted transition-all hover:text-wood-dark"
              aria-label={searchLabel[locale]}
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </Link>
            <div className="mx-1 h-6 w-px bg-border/60" />
            <LanguageSwitcher variant="navbar" />
            <ThemeToggle variant="navbar" />
            <Link
              href="/explore"
              className="soft-btn soft-btn-primary ml-1 inline-flex h-10 items-center px-5 text-[13px] font-medium"
            >
              {ctaLabel[locale]}
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher variant="compact" />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="navbar-action-glass flex h-10 w-10 items-center justify-center rounded-xl text-wood-dark"
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-wood-dark/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-white/20 bg-white/80 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#1a1a1a]/85 lg:hidden"
            >
              <div className="flex h-[92px] items-center justify-between border-b border-white/30 px-5 dark:border-white/10">
                <Logo size="sm" alt={t(siteConfig.name, locale)} />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="navbar-action-glass flex h-9 w-9 items-center justify-center rounded-xl text-wood-dark"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6">
                <Link
                  href="/explore"
                  onClick={() => setMobileOpen(false)}
                  className="mb-6 flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5 text-sm text-text-muted"
                >
                  <Search className="h-4 w-4 shrink-0" />
                  {searchLabel[locale]}...
                </Link>

                <nav className="space-y-1">
                  {navItems.map((item, i) => {
                    const active = isActive(item.href);
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition-colors",
                            active
                              ? "bg-blush text-wood-dark"
                              : "text-text-muted hover:bg-blush/60 hover:text-wood-dark"
                          )}
                        >
                          {t(item.label, locale)}
                          {active && (
                            <span className="h-1.5 w-1.5 bg-current" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-8 flex items-center gap-3">
                  <ThemeToggle variant="navbar" />
                  <span className="text-xs text-text-soft">
                    {locale === "th" ? "โหมดสว่าง/มืด" : locale === "cn" ? "主题" : "Theme"}
                  </span>
                </div>
              </div>

              <div className="border-t border-border p-5">
                <Link
                  href="/explore"
                  onClick={() => setMobileOpen(false)}
                  className="soft-btn soft-btn-primary flex h-12 w-full items-center justify-center text-sm font-medium"
                >
                  {ctaLabel[locale]}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
