"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
  Globe,
  ChevronLeft,
  Navigation,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { PlaceCard } from "@/components/cards/PlaceCard";
import { categories } from "@/mock-data/categories";
import { getRelatedPlaces } from "@/mock-data/places";
import { t, formatDate, cn } from "@/lib/utils";
import type { Place } from "@/types";

interface Props {
  place: Place;
}

export function PlaceDetailClient({ place }: Props) {
  const { locale } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  const category = categories.find((c) => c.id === place.categoryId);
  const related = getRelatedPlaces(place.id, place.categoryId);

  const labels = {
    hours: { th: "เวลาเปิด-ปิด", en: "Opening Hours", cn: "营业时间" },
    contact: { th: "ข้อมูลติดต่อ", en: "Contact", cn: "联系方式" },
    map: { th: "แผนที่", en: "Map", cn: "地图" },
    reviews: { th: "รีวิว", en: "Reviews", cn: "评价" },
    related: { th: "สถานที่ที่เกี่ยวข้อง", en: "Related Places", cn: "相关景点" },
    back: { th: "กลับ", en: "Back", cn: "返回" },
    viewMap: { th: "ดูบนแผนที่", en: "View on Map", cn: "在地图上查看" },
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/explore"
          className="mb-6 inline-flex items-center gap-1 text-sm text-wood-dark hover:underline dark:text-cream"
        >
          <ChevronLeft className="h-4 w-4" />
          {labels.back[locale]}
        </Link>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl sm:aspect-[21/9]">
            <Image
              src={place.images[activeImage]}
              alt={t(place.name, locale)}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            {category && (
              <span className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                {t(category.name, locale)}
              </span>
            )}
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {place.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={cn(
                  "relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all sm:h-20 sm:w-28",
                  activeImage === i
                    ? "ring-2 ring-wood-dark dark:ring-cream"
                    : "border-transparent opacity-70 hover:opacity-100"
                )}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="112px" />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-3xl font-medium text-wood-dark dark:text-cream sm:text-4xl">
                {t(place.name, locale)}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-wood-dark text-wood-dark dark:fill-cream dark:text-cream" />
                  <span className="font-medium text-wood-dark dark:text-cream">
                    {place.rating}
                  </span>
                  <span className="text-sm text-wood-light dark:text-cream/50">
                    ({place.reviewCount}{" "}
                    {labels.reviews[locale]})
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-wood-light dark:text-cream/60">
                  <MapPin className="h-4 w-4" />
                  {t(place.address, locale)}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {place.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-blush px-3 py-1 text-xs font-medium text-wood-dark dark:bg-cream-dark dark:text-cream"
                  >
                    {t(tag, locale)}
                  </span>
                ))}
              </div>

              <div className="prose prose-wood mt-8 max-w-none">
                <p className="leading-relaxed text-wood-light dark:text-cream/70">
                  {t(place.description, locale)}
                </p>
              </div>
            </motion.div>

            {/* Reviews */}
            {place.reviews.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <h2 className="mb-4 text-xl font-medium text-wood-dark dark:text-cream">
                  {labels.reviews[locale]}
                </h2>
                <div className="space-y-4">
                  {place.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="soft-card p-5"
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={review.avatar}
                          alt={review.author}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-medium text-wood-dark dark:text-cream">
                            {review.author}
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "h-3.5 w-3.5",
                                    i < review.rating
                                      ? "fill-wood-dark text-wood-dark dark:fill-cream dark:text-cream"
                                      : "text-cream-dark"
                                  )}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-wood-light dark:text-cream/50">
                              {formatDate(review.date, locale)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-wood-light dark:text-cream/70">
                        {t(review.comment, locale)}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="soft-card p-6"
            >
              <h3 className="mb-4 flex items-center gap-2 font-medium text-wood-dark dark:text-cream">
                <Clock className="h-5 w-5 text-wood-dark dark:text-cream" />
                {labels.hours[locale]}
              </h3>
              <p className="text-sm text-wood-light dark:text-cream/70">
                {t(place.openingHours, locale)}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="soft-card p-6"
            >
              <h3 className="mb-4 flex items-center gap-2 font-medium text-wood-dark dark:text-cream">
                <Phone className="h-5 w-5 text-wood-dark dark:text-cream" />
                {labels.contact[locale]}
              </h3>
              <ul className="space-y-3 text-sm text-wood-light dark:text-cream/70">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-wood-light" />
                  {place.phone}
                </li>
                {place.email && (
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0 text-wood-light" />
                    {place.email}
                  </li>
                )}
                {place.website && (
                  <li className="flex items-center gap-2">
                    <Globe className="h-4 w-4 shrink-0 text-wood-light" />
                    {place.website}
                  </li>
                )}
              </ul>
            </motion.div>

            {/* Map Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="soft-card overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-blush to-cream-dark dark:from-surface dark:to-cream-dark">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-10 w-10 text-wood-dark dark:text-cream" />
                </div>
                <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-xs text-wood-dark backdrop-blur-sm dark:bg-cream-dark/90 dark:text-cream">
                  {place.coordinates.lat.toFixed(4)}, {place.coordinates.lng.toFixed(4)}
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-medium text-wood-dark dark:text-cream">
                  {labels.map[locale]}
                </h3>
                <Link
                  href="/map"
                  className="inline-flex items-center gap-2 text-sm font-medium text-wood-dark hover:underline dark:text-cream"
                >
                  <Navigation className="h-4 w-4" />
                  {labels.viewMap[locale]}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Places */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-medium text-wood-dark dark:text-cream">
              {labels.related[locale]}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <PlaceCard key={p.id} place={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
