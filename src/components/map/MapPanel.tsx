"use client";

import { MapPin, Navigation, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { categories } from "@/mock-data/categories";
import { places } from "@/mock-data/places";
import { t, cn } from "@/lib/utils";
import type { Place } from "@/types";

interface MapPanelProps {
  selectedPlace: Place | null;
  onSelectPlace: (place: Place | null) => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function MapPanel({
  selectedPlace,
  onSelectPlace,
  selectedCategory,
  onCategoryChange,
}: MapPanelProps) {
  const { locale } = useLanguage();

  const filteredPlaces = selectedCategory
    ? places.filter((p) => p.categoryId === selectedCategory)
    : places;

  const allLabel = {
    th: "ทั้งหมด",
    en: "All",
    cn: "全部",
  };

  return (
    <div className="flex h-full flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="flex w-full flex-col border-b border-border bg-white dark:bg-cream lg:w-96 lg:border-b-0 lg:border-r">
        <div className="border-b border-border p-4">
          <h2 className="text-lg font-medium text-wood-dark dark:text-cream">
            {locale === "th"
              ? "สถานที่ท่องเที่ยว"
              : locale === "cn"
                ? "旅游景点"
                : "Attractions"}
          </h2>
          <p className="text-sm text-wood-light dark:text-cream/60">
            {filteredPlaces.length}{" "}
            {locale === "th" ? "แห่ง" : locale === "cn" ? "个地点" : "places"}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange(null)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                selectedCategory === null
                  ? "bg-wood-dark text-white dark:bg-cream dark:text-wood-dark"
                  : "bg-blush text-wood-dark dark:bg-cream-dark dark:text-cream"
              )}
            >
              {allLabel[locale]}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  onCategoryChange(
                    selectedCategory === cat.id ? null : cat.id
                  )
                }
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                  selectedCategory === cat.id
                    ? "bg-wood-dark text-white dark:bg-cream dark:text-wood-dark"
                    : "bg-blush text-wood-dark dark:bg-cream-dark dark:text-cream"
                )}
              >
                {t(cat.name, locale)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {filteredPlaces.map((place) => (
            <button
              key={place.id}
              onClick={() => onSelectPlace(place)}
              className={cn(
                "mb-1 flex w-full items-start gap-3 rounded-xl p-3 text-left transition-colors",
                selectedPlace?.id === place.id
                  ? "bg-blush dark:bg-cream-dark"
                  : "hover:bg-blush/60 dark:hover:bg-cream-dark/60"
              )}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blush text-wood-dark dark:bg-cream-dark dark:text-cream">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-medium text-wood-dark dark:text-cream">
                  {t(place.name, locale)}
                </h3>
                <p className="truncate text-xs text-wood-light dark:text-cream/50">
                  {t(place.shortDescription, locale)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Map Area */}
      <div className="relative flex-1">
        <div className="relative h-[400px] bg-gradient-to-br from-white via-cream-dark to-white dark:from-surface dark:via-cream dark:to-surface lg:h-full lg:min-h-[600px]">
          {/* Mock Map Grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(17,17,17,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.12) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* River */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 800 600"
            preserveAspectRatio="none"
          >
            <path
              d="M0,350 Q200,300 400,320 T800,280 L800,380 Q600,400 400,390 T0,420 Z"
              fill="rgba(17,17,17,0.08)"
              className="dark:fill-white/10"
            />
          </svg>

          {/* Place Markers */}
          {filteredPlaces.map((place, i) => {
            const x = 15 + ((i * 17) % 70);
            const y = 25 + ((i * 23) % 55);
            const isSelected = selectedPlace?.id === place.id;

            return (
              <motion.button
                key={place.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => onSelectPlace(place)}
                className="absolute z-10"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full shadow-md transition-transform",
                    isSelected
                      ? "scale-125 bg-wood-dark text-white ring-4 ring-black/5 dark:bg-cream dark:text-wood-dark"
                      : "bg-white text-wood-dark hover:scale-110 dark:bg-cream-dark"
                  )}
                >
                  <MapPin className="h-4 w-4" />
                </div>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-1/2 top-full mt-2 w-48 -translate-x-1/2 rounded-xl bg-white p-3 shadow-lg dark:bg-cream-dark"
                  >
                    <h4 className="text-sm font-medium text-wood-dark dark:text-cream">
                      {t(place.name, locale)}
                    </h4>
                    <p className="mt-0.5 text-xs text-wood-light dark:text-cream/60">
                      ⭐ {place.rating}
                    </p>
                  </motion.div>
                )}
              </motion.button>
            );
          })}

          {/* Map Label */}
          <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs text-wood-dark shadow-sm backdrop-blur-sm dark:bg-cream-dark/90 dark:text-cream">
            <Navigation className="mb-1 inline h-3.5 w-3.5 text-wood-dark dark:text-cream" />{" "}
            {locale === "th"
              ? "แผนที่จำลอง — ชุมชนริมน้ำจันทบูร"
              : locale === "cn"
                ? "模拟地图 — 河畔尖竹汶社区"
                : "Mock Map — Rim Nam Chanthaburi"}
          </div>
        </div>

        {selectedPlace && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 right-4 left-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm dark:bg-cream-dark/95 lg:left-auto lg:w-80"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-wood-dark dark:text-cream">
                  {t(selectedPlace.name, locale)}
                </h3>
                <p className="mt-1 text-xs text-wood-light dark:text-cream/60">
                  {t(selectedPlace.address, locale)}
                </p>
              </div>
              <button
                onClick={() => onSelectPlace(null)}
                className="text-wood-light hover:text-wood-dark dark:hover:text-cream"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
