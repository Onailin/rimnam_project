"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t, formatDate } from "@/lib/utils";
import type { Event } from "@/types";

interface EventCardProps {
  event: Event;
  index?: number;
  variant?: "default" | "timeline";
}

const categoryLabels = {
  festival: { th: "เทศกาล", en: "Festival", cn: "节庆" },
  market: { th: "ตลาด", en: "Market", cn: "市场" },
  cultural: { th: "วัฒนธรรม", en: "Cultural", cn: "文化" },
  workshop: { th: "เวิร์กช็อป", en: "Workshop", cn: "工作坊" },
};

export function EventCard({ event, index = 0, variant = "default" }: EventCardProps) {
  const { locale } = useLanguage();

  if (variant === "timeline") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.45 }}
        className="relative flex gap-5 pb-8 last:pb-0"
      >
        <div className="flex flex-col items-center">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blush text-sm font-medium text-wood-dark dark:bg-cream-dark">
            {new Date(event.date).getDate()}
          </div>
          <div className="mt-2 h-full w-px bg-border" />
        </div>
        <div className="soft-card flex-1 rounded-2xl p-5">
          <span className="inline-block rounded-full bg-blush px-3 py-0.5 text-xs font-medium text-text-muted dark:bg-cream-dark">
            {categoryLabels[event.category][locale]}
          </span>
          <h3 className="mt-2 text-base font-medium text-wood-dark dark:text-cream">
            {t(event.title, locale)}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">
            {t(event.shortDescription, locale)}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-text-soft">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(event.date, locale)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {event.time}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {t(event.location, locale)}
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="soft-card group overflow-hidden hover:-translate-y-0.5"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={event.image}
          alt={t(event.title, locale)}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-wood-dark shadow-sm backdrop-blur-sm">
          {categoryLabels[event.category][locale]}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-medium text-wood-dark dark:text-cream">
          {t(event.title, locale)}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-text-muted">
          {t(event.shortDescription, locale)}
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-text-soft">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(event.date, locale)}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {t(event.location, locale)}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
