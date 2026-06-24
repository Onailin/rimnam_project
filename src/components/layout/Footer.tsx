"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/layout/Logo";
import { navItems } from "@/constants/navigation";
import { footerMock } from "@/constants/footer";
import { siteConfig } from "@/constants/theme";
import { t } from "@/lib/utils";

export function Footer() {
  const { locale } = useLanguage();
  const [email, setEmail] = useState("");

  const labels = {
    explore: { th: "สำรวจ", en: "Explore", cn: "探索" },
    contact: { th: "ติดต่อเรา", en: "Contact Us", cn: "联系我们" },
    hours: { th: "เวลาทำการ", en: "Office Hours", cn: "办公时间" },
    follow: { th: "ติดตามเรา", en: "Follow Us", cn: "关注我们" },
    rights: { th: "สงวนลิขสิทธิ์", en: "All rights reserved", cn: "版权所有" },
    mockNote: {
      th: "ข้อมูลติดต่อและลิงก์เป็นข้อมูล Mockup สำหรับนำเสนอ",
      en: "Contact info & links are mock data for presentation",
      cn: "联系信息与链接为演示用模拟数据",
    },
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      {/* Newsletter Band */}
      <div className="border-b border-border bg-blush/40">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <p className="section-eyebrow">Newsletter</p>
              <h2 className="mt-2 text-xl font-medium text-wood-dark sm:text-2xl">
                {t(footerMock.newsletter.title, locale)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {t(footerMock.newsletter.subtitle, locale)}
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(footerMock.newsletter.placeholder, locale)}
                className="h-11 flex-1 rounded-full border-0 bg-white px-5 text-sm text-wood-dark shadow-sm placeholder:text-text-soft focus:outline-none focus:ring-2 focus:ring-black/5"
              />
              <button
                type="submit"
                className="soft-btn soft-btn-primary inline-flex h-11 shrink-0 items-center justify-center gap-2 px-6 text-sm font-medium"
              >
                <Send className="h-4 w-4" />
                {t(footerMock.newsletter.button, locale)}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand — 4 cols */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              <Logo size="lg" alt={t(siteConfig.name, locale)} />
              <p className="text-[11px] text-text-muted">Chanthaburi, TH</p>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-muted">
              {t(siteConfig.description, locale)}
            </p>

            {/* Social */}
            <div className="mt-6">
              <p className="mb-3 section-eyebrow">
                {labels.follow[locale]}
              </p>
              <div className="flex flex-wrap gap-2">
                {footerMock.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group inline-flex items-center gap-1.5 rounded-full bg-blush px-4 py-2 text-xs font-medium text-text-muted transition-colors hover:bg-wood-dark hover:text-white dark:hover:bg-cream dark:hover:text-wood-dark"
                  >
                    {social.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links — 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 section-eyebrow text-wood-dark">
              {labels.explore[locale]}
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-accent-dark"
                  >
                    {t(item.label, locale)}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 section-eyebrow text-wood-dark">
              {labels.contact[locale]}
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blush">
                  <MapPin className="h-3.5 w-3.5 text-wood-dark dark:text-cream" />
                </span>
                <span className="text-sm leading-relaxed text-text-muted">
                  {t(footerMock.contact.address, locale)}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blush">
                  <Phone className="h-3.5 w-3.5 text-wood-dark dark:text-cream" />
                </span>
                <span className="text-sm text-text-muted">{footerMock.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blush">
                  <Mail className="h-3.5 w-3.5 text-wood-dark dark:text-cream" />
                </span>
                <span className="text-sm text-text-muted">{footerMock.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours + Partners — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 section-eyebrow text-wood-dark">
              {labels.hours[locale]}
            </h3>
            <div className="flex items-start gap-3 rounded-xl bg-blush p-4">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-wood-dark dark:text-cream" />
              <p className="text-sm text-text-muted">
                {t(footerMock.contact.hours, locale)}
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 section-eyebrow">
                {t(footerMock.partners.title, locale)}
              </p>
              <div className="flex flex-wrap gap-2">
                {footerMock.partners.items.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-full bg-blush px-3 py-1.5 text-xs font-medium text-text-soft"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-blush/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-xs text-text-soft sm:text-left">
            © {new Date().getFullYear()} {t(siteConfig.name, locale)}. {labels.rights[locale]}.
            <span className="mt-1 block sm:mt-0 sm:inline sm:before:mx-2 sm:before:content-['·']">
              {labels.mockNote[locale]}
            </span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {footerMock.legal.map((item) => (
              <Link
                key={item.href + t(item.label, locale)}
                href={item.href}
                className="text-xs text-text-muted transition-colors hover:text-accent-dark"
              >
                {t(item.label, locale)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
