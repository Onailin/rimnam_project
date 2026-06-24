"use client";

import Link from "next/link";
import {
  Landmark,
  UtensilsCrossed,
  Coffee,
  Gem,
  Hotel,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/utils";
import type { Category } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  UtensilsCrossed,
  Coffee,
  Gem,
  Hotel,
};

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const { locale } = useLanguage();
  const Icon = iconMap[category.icon] || Landmark;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
    >
      <Link
        href={`/explore?category=${category.slug}`}
        className="soft-card group flex min-w-0 flex-col items-center rounded-2xl p-3 text-center hover:-translate-y-0.5 sm:p-5"
      >
        <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-blush text-wood-dark ring-1 ring-border transition-colors duration-300 group-hover:bg-wood-dark group-hover:text-white group-hover:ring-transparent dark:bg-cream-dark dark:group-hover:bg-cream dark:group-hover:text-wood-dark sm:mb-3 sm:h-11 sm:w-11">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <h3 className="w-full break-words text-xs font-medium text-wood-dark dark:text-cream sm:text-sm">
          {t(category.name, locale)}
        </h3>
        <p className="mt-1.5 text-xs text-text-soft">
          {category.placeCount}{" "}
          {locale === "th" ? "แห่ง" : locale === "cn" ? "处" : "places"}
        </p>
      </Link>
    </motion.div>
  );
}
