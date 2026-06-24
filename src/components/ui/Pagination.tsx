"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const { locale } = useLanguage();

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className={cn("flex items-center justify-center gap-2", className)}
      aria-label="Pagination"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-blush text-wood-dark transition-colors hover:bg-blush/70 disabled:opacity-40 dark:bg-cream-dark"
        aria-label={locale === "th" ? "หน้าก่อน" : locale === "cn" ? "上一页" : "Previous"}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors",
            page === currentPage
              ? "bg-wood-dark text-white dark:bg-cream dark:text-wood-dark"
              : "bg-blush text-wood-dark hover:bg-blush/70 dark:bg-cream-dark dark:text-cream"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-blush text-wood-dark transition-colors hover:bg-blush/70 disabled:opacity-40 dark:bg-cream-dark"
        aria-label={locale === "th" ? "หน้าถัดไป" : locale === "cn" ? "下一页" : "Next"}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
