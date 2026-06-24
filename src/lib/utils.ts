import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Locale, LocalizedText } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function t(text: LocalizedText, locale: Locale): string {
  return text[locale] || text.th;
}

export function formatDate(dateStr: string, locale: Locale): string {
  const date = new Date(dateStr);
  const locales: Record<Locale, string> = {
    th: "th-TH",
    en: "en-US",
    cn: "zh-CN",
  };
  return date.toLocaleDateString(locales[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function paginate<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.ceil(items.length / perPage);
  const start = (page - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    totalPages,
    totalItems: items.length,
    currentPage: page,
  };
}
