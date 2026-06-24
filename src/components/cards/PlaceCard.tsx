"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { categories } from "@/mock-data/categories";
import { t } from "@/lib/utils";
import type { Place } from "@/types";

interface PlaceCardProps {
  place: Place;
  index?: number;
}

export function PlaceCard({ place, index = 0 }: PlaceCardProps) {
  const { locale } = useLanguage();
  const category = categories.find((c) => c.id === place.categoryId);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
    >
      <Link
        href={`/places/${place.slug}`}
        className="soft-card group block overflow-hidden hover:-translate-y-0.5"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={place.images[0]}
            alt={t(place.name, locale)}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {category && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-wood-dark shadow-sm backdrop-blur-sm">
              {t(category.name, locale)}
            </span>
          )}
          {place.featured && (
            <span className="absolute right-3 top-3 rounded-full bg-wood-dark/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {locale === "th" ? "แนะนำ" : locale === "cn" ? "推荐" : "Featured"}
            </span>
          )}
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="text-base font-medium text-wood-dark transition-colors group-hover:text-accent dark:text-cream">
            {t(place.name, locale)}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-text-muted">
            {t(place.shortDescription, locale)}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-3.5 w-3.5 fill-wood-dark/20 text-wood-dark dark:fill-cream/20 dark:text-cream" />
              <span className="font-medium text-wood-dark dark:text-cream">
                {place.rating}
              </span>
              <span className="text-text-soft">({place.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-text-soft">
              <MapPin className="h-3.5 w-3.5" />
              <span className="line-clamp-1 max-w-[120px]">
                {t(place.address, locale).split(",")[0]}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
