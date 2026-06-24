"use client";

import { Search, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  size?: "sm" | "lg";
}

export function SearchBar({
  value,
  onChange,
  placeholder,
  className,
  size = "sm",
}: SearchBarProps) {
  const { locale } = useLanguage();

  const defaultPlaceholder = {
    th: "ค้นหาสถานที่ท่องเที่ยว...",
    en: "Search destinations...",
    cn: "搜索景点...",
  };

  return (
    <div className={cn("relative", className)}>
      <Search
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 text-wood-light",
          size === "lg" ? "h-5 w-5" : "h-4 w-4"
        )}
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || defaultPlaceholder[locale]}
        className={cn(
          "w-full rounded-full border-0 bg-transparent",
          "text-wood-dark placeholder:text-text-soft",
          "focus:outline-none focus:ring-2 focus:ring-black/5",
          "dark:text-cream dark:placeholder:text-cream/40",
          size === "lg" ? "py-3 pl-11 pr-11 text-sm sm:py-3.5 sm:pl-12 sm:pr-12 sm:text-base" : "py-2.5 pl-10 pr-10 text-sm"
        )}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-wood-light hover:text-wood-dark dark:hover:text-cream"
          aria-label="Clear search"
        >
          <X className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
        </button>
      )}
    </div>
  );
}
