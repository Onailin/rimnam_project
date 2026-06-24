"use client";

import { useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: "th", label: "ไทย", flag: "🇹🇭" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "cn", label: "中文", flag: "🇨🇳" },
];

interface LanguageSwitcherProps {
  className?: string;
  variant?: "default" | "navbar" | "compact";
}

export function LanguageSwitcher({
  className,
  variant = "default",
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const current = languages.find((l) => l.code === locale)!;

  const buttonClass = cn(
    "flex items-center gap-1.5 text-sm font-medium transition-colors",
    variant === "navbar" &&
      "h-10 rounded-xl border-0 bg-blush px-3 text-text-muted hover:bg-blush/80 hover:text-wood-dark",
    variant === "compact" &&
      "h-10 rounded-xl border-0 bg-blush px-2.5 text-text-muted",
    variant === "default" &&
      "rounded-full border-0 bg-blush px-3 py-1.5 text-wood-dark hover:bg-blush/80",
    className
  );

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={buttonClass}
        aria-label="Switch language"
        aria-expanded={open}
      >
        {variant === "navbar" ? (
          <>
            <Globe className="h-[16px] w-[16px]" strokeWidth={1.75} />
            <span>{current.label}</span>
            <ChevronDown
              className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
            />
          </>
        ) : (
          <>
            <span>{current.flag}</span>
            {variant !== "compact" && (
              <span className="hidden sm:inline">{current.label}</span>
            )}
          </>
        )}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full z-50 mt-2 min-w-[148px] overflow-hidden rounded-2xl border border-border bg-surface-alt shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors",
                  locale === lang.code
                    ? "bg-blush text-wood-dark dark:bg-cream-dark"
                    : "text-text-muted hover:bg-surface hover:text-wood-dark"
                )}
              >
                <span className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </span>
                {locale === lang.code && <Check className="h-3.5 w-3.5" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
