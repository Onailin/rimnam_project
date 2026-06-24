"use client";

import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { categories } from "@/mock-data/categories";
import { sortOptions } from "@/constants/navigation";
import { t, cn } from "@/lib/utils";

interface FilterBarProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  className?: string;
}

export function FilterBar({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  className,
}: FilterBarProps) {
  const { locale } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);

  const allLabel = {
    th: "ทั้งหมด",
    en: "All",
    cn: "全部",
  };

  const filterLabel = {
    th: "ตัวกรอง",
    en: "Filters",
    cn: "筛选",
  };

  const sortLabel = {
    th: "เรียงตาม",
    en: "Sort by",
    cn: "排序",
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 rounded-full bg-blush px-4 py-2 text-sm font-medium text-wood-dark transition-colors hover:bg-blush/80 dark:bg-cream-dark lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {filterLabel[locale]}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              showFilters && "rotate-180"
            )}
          />
        </button>

        <div className="flex items-center gap-2">
          <span className="hidden text-sm text-wood-light dark:text-cream/60 sm:inline">
            {sortLabel[locale]}:
          </span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="rounded-full border-0 bg-blush px-4 py-2 text-sm text-wood-dark focus:outline-none focus:ring-2 focus:ring-black/5 dark:bg-cream-dark dark:text-cream"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {t(opt.label, locale)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-wrap gap-2",
          !showFilters && "hidden lg:flex"
        )}
      >
        <CategoryChip
          label={allLabel[locale]}
          active={selectedCategory === null}
          onClick={() => onCategoryChange(null)}
        />
        {categories.map((cat) => (
          <CategoryChip
            key={cat.id}
            label={t(cat.name, locale)}
            active={selectedCategory === cat.id}
            onClick={() =>
              onCategoryChange(selectedCategory === cat.id ? null : cat.id)
            }
          />
        ))}
      </div>
    </div>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
        active
          ? "bg-wood-dark text-white dark:bg-cream dark:text-wood-dark"
          : "bg-blush text-wood-dark hover:bg-blush/70 dark:bg-cream-dark dark:text-cream"
      )}
    >
      {label}
    </button>
  );
}
