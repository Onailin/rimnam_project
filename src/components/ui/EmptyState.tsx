"use client";

import { SearchX } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export function EmptyState({ title, description, className }: EmptyStateProps) {
  const { locale } = useLanguage();

  const defaultTitle = {
    th: "ไม่พบข้อมูล",
    en: "No results found",
    cn: "未找到结果",
  };

  const defaultDescription = {
    th: "ลองเปลี่ยนคำค้นหาหรือตัวกรองใหม่",
    en: "Try adjusting your search or filters",
    cn: "请尝试调整搜索或筛选条件",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 text-center",
        className
      )}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blush dark:bg-cream-dark">
        <SearchX className="h-8 w-8 text-wood-light dark:text-cream" />
      </div>
      <h3 className="text-lg font-medium text-wood-dark dark:text-cream">
        {title || defaultTitle[locale]}
      </h3>
      <p className="mt-2 max-w-sm text-sm text-wood-light dark:text-cream/70">
        {description || defaultDescription[locale]}
      </p>
    </div>
  );
}
