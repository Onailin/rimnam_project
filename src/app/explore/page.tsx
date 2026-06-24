"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SearchBar } from "@/components/ui/SearchBar";
import { Pagination } from "@/components/ui/Pagination";
import { PlaceCard } from "@/components/cards/PlaceCard";
import { PlaceCardSkeleton } from "@/components/ui/Skeleton";
import { EmptyState } from "@/components/ui/EmptyState";
import { places } from "@/mock-data/places";
import { categories } from "@/mock-data/categories";
import { sortOptions } from "@/constants/navigation";
import { festivalImages } from "@/constants/festival-images";
import { paginate, t, cn } from "@/lib/utils";

const PER_PAGE = 6;

function ExploreContent() {
  const { locale } = useLanguage();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categories.find((c) => c.slug === searchParams.get("category"))?.id || null
  );
  const [sortBy, setSortBy] = useState("popular");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [search, selectedCategory, sortBy, page]);

  const updateSearch = (value: string) => {
    setLoading(true);
    setSearch(value);
    setPage(1);
  };

  const updateCategory = (category: string | null) => {
    setLoading(true);
    setSelectedCategory(category);
    setPage(1);
  };

  const updateSort = (sort: string) => {
    setLoading(true);
    setSortBy(sort);
    setPage(1);
  };

  const updatePage = (nextPage: number) => {
    setLoading(true);
    setPage(nextPage);
  };

  const filtered = useMemo(() => {
    let result = [...places];

    if (selectedCategory) {
      result = result.filter((p) => p.categoryId === selectedCategory);
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.th.toLowerCase().includes(q) ||
          p.name.en.toLowerCase().includes(q) ||
          p.shortDescription.th.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result.sort((a, b) => a.name.th.localeCompare(b.name.th));
        break;
      case "newest":
        result.reverse();
        break;
      default:
        result.sort((a, b) => Number(b.popular) - Number(a.popular));
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  const { items, totalPages, totalItems } = paginate(filtered, page, PER_PAGE);

  const selectedCategoryName = selectedCategory
    ? categories.find((c) => c.id === selectedCategory)
    : null;

  const title = {
    th: "สำรวจสถานที่",
    en: "Explore Places",
    cn: "探索景点",
  };

  const subtitle = {
    th: "ค้นหาและกรองสถานที่ท่องเที่ยวในชุมชนริมน้ำจันทบูร",
    en: "Search and filter attractions in Rim Nam Chanthaburi",
    cn: "搜索并筛选河畔尖竹汶社区景点",
  };

  const allLabel = { th: "ทั้งหมด", en: "All", cn: "全部" };
  const categoryLabel = { th: "หมวดหมู่", en: "Categories", cn: "分类" };
  const sortLabel = { th: "เรียงตาม", en: "Sort by", cn: "排序" };
  const resultsLabel = { th: "ผลลัพธ์", en: "Results", cn: "结果" };

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="relative overflow-hidden border-b border-border bg-blush/30 pt-28">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={festivalImages.market}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="section-eyebrow mb-2 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              Rim Nam Chanthaburi
            </p>
            <h1 className="text-3xl font-medium text-wood-dark sm:text-4xl">
              {title[locale]}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">
              {subtitle[locale]}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[300px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="mb-8 space-y-4 lg:sticky lg:top-28 lg:mb-0 lg:self-start">
            <div className="soft-card p-4">
              <p className="mb-3 text-xs font-medium text-text-soft">
                {locale === "th" ? "ค้นหา" : locale === "cn" ? "搜索" : "Search"}
              </p>
              <SearchBar value={search} onChange={updateSearch} />
            </div>

            <div className="soft-card p-4">
              <p className="mb-3 flex items-center gap-2 text-xs font-medium text-text-soft">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                {categoryLabel[locale]}
              </p>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
                <CategoryButton
                  label={allLabel[locale]}
                  active={selectedCategory === null}
                  onClick={() => updateCategory(null)}
                />
                {categories.map((cat) => (
                  <CategoryButton
                    key={cat.id}
                    label={t(cat.name, locale)}
                    count={cat.placeCount}
                    active={selectedCategory === cat.id}
                    onClick={() =>
                      updateCategory(selectedCategory === cat.id ? null : cat.id)
                    }
                  />
                ))}
              </div>
            </div>

            <div className="soft-card p-4">
              <p className="mb-3 text-xs font-medium text-text-soft">
                {sortLabel[locale]}
              </p>
              <select
                value={sortBy}
                onChange={(e) => updateSort(e.target.value)}
                className="w-full rounded-xl border-0 bg-blush px-4 py-2.5 text-sm text-wood-dark focus:outline-none focus:ring-2 focus:ring-black/5 dark:bg-cream-dark dark:text-cream"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {t(opt.label, locale)}
                  </option>
                ))}
              </select>
            </div>
          </aside>

          {/* Results */}
          <main>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="section-eyebrow mb-1">{resultsLabel[locale]}</p>
                <p className="text-lg font-medium text-wood-dark">
                  {totalItems}{" "}
                  {locale === "th" ? "สถานที่" : locale === "cn" ? "个景点" : "places"}
                  {selectedCategoryName && (
                    <span className="ml-2 text-sm font-normal text-text-muted">
                      · {t(selectedCategoryName.name, locale)}
                    </span>
                  )}
                </p>
              </div>
              {search && (
                <span className="rounded-full bg-blush px-3 py-1 text-xs text-text-muted">
                  “{search}”
                </span>
              )}
            </div>

            {loading ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <PlaceCardSkeleton key={i} />
                ))}
              </div>
            ) : items.length === 0 ? (
              <div className="soft-card">
                <EmptyState />
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((place, i) => (
                    <PlaceCard key={place.id} place={place} index={i} />
                  ))}
                </div>
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={updatePage}
                  className="mt-10"
                />
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function CategoryButton({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count?: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-between gap-2 rounded-xl px-3.5 py-2.5 text-left text-sm font-medium transition-colors",
        active
          ? "bg-wood-dark text-white dark:bg-cream dark:text-wood-dark"
          : "bg-blush/60 text-wood-dark hover:bg-blush dark:bg-cream-dark/60 dark:text-cream"
      )}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={cn(
            "text-xs",
            active ? "text-white/70 dark:text-wood-dark/60" : "text-text-soft"
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}

export default function ExplorePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background pt-28 pb-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <PlaceCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ExploreContent />
    </Suspense>
  );
}
