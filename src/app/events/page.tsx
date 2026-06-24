"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { EventCard } from "@/components/cards/EventCard";
import { EventCardSkeleton } from "@/components/ui/Skeleton";
import { events, getUpcomingEvents } from "@/mock-data/events";

export default function EventsPage() {
  const { locale } = useLanguage();
  const [loading, setLoading] = useState(true);
  const upcoming = getUpcomingEvents();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const title = {
    th: "กิจกรรมและเทศกาล",
    en: "Events & Festivals",
    cn: "活动与节庆",
  };

  const upcomingTitle = {
    th: "กิจกรรมที่กำลังจะมาถึง",
    en: "Upcoming Events",
    cn: "即将举行的活动",
  };

  const timelineTitle = {
    th: "ไทม์ไลน์กิจกรรม",
    en: "Event Timeline",
    cn: "活动时间线",
  };

  const festivalTitle = {
    th: "เทศกาลเด่น",
    en: "Featured Festivals",
    cn: "特色节庆",
  };

  const festivals = events.filter((e) => e.category === "festival");

  return (
    <div className="min-h-screen bg-background pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 pb-6 text-center"
        >
          <p className="mb-3 section-eyebrow">
            Local Events
          </p>
          <h1 className="text-3xl font-medium text-wood-dark dark:text-cream sm:text-4xl">
            {title[locale]}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-wood-light dark:text-cream/60">
            {locale === "th"
              ? "เทศกาล ตลาด และกิจกรรมวัฒนธรรมในชุมชนริมน้ำจันทบูร"
              : locale === "cn"
                ? "河畔社区的节庆、市场和文化活动"
                : "Festivals, markets, and cultural events in Rim Nam community"}
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-medium text-wood-dark dark:text-cream">
            {upcomingTitle[locale]}
          </h2>
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <EventCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.slice(0, 3).map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          )}
        </section>

        {/* Festival Cards */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-medium text-wood-dark dark:text-cream">
            {festivalTitle[locale]}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {festivals.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden"
              >
                <EventCard event={event} index={i} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="soft-card rounded-2xl p-6 sm:p-10">
          <h2 className="mb-8 text-2xl font-medium text-wood-dark dark:text-cream">
            {timelineTitle[locale]}
          </h2>
          <div className="max-w-2xl">
            {events.map((event, i) => (
              <EventCard
                key={event.id}
                event={event}
                index={i}
                variant="timeline"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
