"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPanel } from "@/components/map/MapPanel";
import { RoutePlanning } from "@/components/map/RoutePlanning";
import type { Place } from "@/types";

export default function MapPage() {
  const { locale } = useLanguage();
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const title = {
    th: "แผนที่ท่องเที่ยว",
    en: "Tourism Map",
    cn: "旅游地图",
  };

  return (
    <div className="min-h-screen bg-background pt-28">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 pb-6"
        >
          <p className="mb-3 section-eyebrow">
            Community Map
          </p>
          <h1 className="text-3xl font-medium text-wood-dark dark:text-cream sm:text-4xl">
            {title[locale]}
          </h1>
          <p className="mt-2 text-wood-light dark:text-cream/60">
            {locale === "th"
              ? "สำรวจสถานที่ท่องเที่ยวบนแผนที่ชุมชนริมน้ำจันทบูร"
              : locale === "cn"
                ? "在河畔社区地图上探索旅游景点"
                : "Explore attractions on the Rim Nam community map"}
          </p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-sm">
        <MapPanel
          selectedPlace={selectedPlace}
          onSelectPlace={setSelectedPlace}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* 3D Map Placeholder */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="soft-card relative overflow-hidden"
        >
          <div className="relative flex min-h-[300px] flex-col items-center justify-center p-8 text-center sm:min-h-[400px]">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(17,17,17,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.18) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blush"
            >
              <Box className="h-10 w-10 text-wood-dark" />
            </motion.div>
            <h2 className="text-2xl font-medium text-wood-dark sm:text-3xl dark:text-cream">
              {locale === "th"
                ? "แผนที่ 3D — Coming Soon"
                : locale === "cn"
                  ? "3D 地图 — 即将推出"
                  : "3D Map — Coming Soon"}
            </h2>
            <p className="mt-3 max-w-md text-sm text-wood-light dark:text-cream/60">
              {locale === "th"
                ? "สัมผัสประสบการณ์แผนที่ 3 มิติของชุมชนริมน้ำจันทบูร ในเวอร์ชันถัดไป"
                : locale === "cn"
                  ? "在下一版本中体验河畔社区的3D地图"
                  : "Experience a 3D map of Rim Nam community in the next version"}
            </p>
            <span className="mt-4 rounded-full bg-blush px-4 py-1.5 text-xs font-medium text-wood-dark">
              Mockup Preview
            </span>
          </div>
        </motion.div>
      </section>

      <RoutePlanning />
    </div>
  );
}
