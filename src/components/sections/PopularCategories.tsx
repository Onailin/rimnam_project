"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { categories } from "@/mock-data/categories";

export function PopularCategories() {
  const { locale } = useLanguage();

  const title = {
    th: "หมวดหมู่ยอดนิยม",
    en: "Popular Categories",
    cn: "热门分类",
  };

  return (
    <section className="home-section bg-champagne-light/40 dark:bg-cream-dark/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="luxury-divider mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-7 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="luxury-eyebrow mb-1.5">
              {locale === "th" ? "เลือกตามความสนใจ" : locale === "cn" ? "按兴趣探索" : "Explore by interest"}
            </p>
            <h2 className="text-xl font-medium text-wood-dark dark:text-cream sm:text-2xl">
              {title[locale]}
            </h2>
          </div>
          <p className="max-w-xs text-sm text-text-muted">
            {locale === "th"
              ? "เลือกสำรวจตามความสนใจของคุณ"
              : locale === "cn"
                ? "按兴趣选择探索"
                : "Find places that match your interests"}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
