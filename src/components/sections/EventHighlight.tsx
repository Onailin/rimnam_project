"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { EventCard } from "@/components/cards/EventCard";
import { getFeaturedEvents } from "@/mock-data/events";

export function EventHighlight() {
  const { locale } = useLanguage();
  const events = getFeaturedEvents();

  const title = {
    th: "กิจกรรมเด่น",
    en: "Event Highlights",
    cn: "精彩活动",
  };

  const viewAll = {
    th: "ดูกิจกรรมทั้งหมด",
    en: "View All Events",
    cn: "查看所有活动",
  };

  return (
    <section className="home-section border-t border-border/60 bg-surface pb-14 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="luxury-eyebrow mb-1.5">
              {locale === "th" ? "ปฏิทินชุมชน" : locale === "cn" ? "社区活动" : "Community calendar"}
            </p>
            <h2 className="text-xl font-medium text-wood-dark dark:text-cream sm:text-2xl">
              {title[locale]}
            </h2>
            <p className="mt-1.5 text-sm text-text-muted">
              {locale === "th"
                ? "เทศกาลและกิจกรรมที่ไม่ควรพลาด"
                : locale === "cn"
                  ? "不容错过的节庆与活动"
                  : "Festivals and events you shouldn't miss"}
            </p>
          </motion.div>
          <Link
            href="/events"
            className="soft-btn soft-btn-ghost hidden shrink-0 items-center gap-2 px-4 py-2 text-sm font-medium sm:flex"
          >
            {viewAll[locale]}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {events.map((event, i) => (
            <div key={event.id} className="min-w-0">
              <EventCard event={event} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
