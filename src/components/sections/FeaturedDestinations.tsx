"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { PlaceCard } from "@/components/cards/PlaceCard";
import { getFeaturedPlaces } from "@/mock-data/places";

export function FeaturedDestinations() {
  const { locale } = useLanguage();
  const places = getFeaturedPlaces();

  const title = {
    th: "สถานที่แนะนำ",
    en: "Featured Destinations",
    cn: "推荐景点",
  };

  const viewAll = {
    th: "ดูทั้งหมด",
    en: "View All",
    cn: "查看全部",
  };

  return (
    <section className="home-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="luxury-eyebrow mb-1.5">
              {locale === "th" ? "คัดสรรมาให้" : locale === "cn" ? "精选推荐" : "Curated for you"}
            </p>
            <h2 className="text-xl font-medium text-wood-dark dark:text-cream sm:text-2xl">
              {title[locale]}
            </h2>
            <p className="mt-1.5 max-w-lg text-sm text-text-muted">
              {locale === "th"
                ? "สถานที่ท่องเที่ยวยอดนิยมในชุมชนริมน้ำจันทบูร"
                : locale === "cn"
                  ? "河畔社区热门旅游景点"
                  : "Popular attractions in Rim Nam Chanthaburi"}
            </p>
          </motion.div>
          <Link
            href="/explore"
            className="soft-btn soft-btn-ghost hidden shrink-0 items-center gap-2 px-4 py-2 text-sm font-medium sm:flex"
          >
            {viewAll[locale]}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {places.slice(0, 6).map((place, i) => (
            <div key={place.id} className="min-w-0">
              <PlaceCard place={place} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/explore"
            className="soft-btn soft-btn-ghost inline-flex items-center gap-2 px-4 py-2 text-sm font-medium"
          >
            {viewAll[locale]}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
