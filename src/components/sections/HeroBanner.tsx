"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SearchBar } from "@/components/ui/SearchBar";
import { siteConfig } from "@/constants/theme";
import { homeImages } from "@/constants/home-images";
import { t } from "@/lib/utils";

export function HeroBanner() {
  const { locale } = useLanguage();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const query = search ? `?q=${encodeURIComponent(search)}` : "";
    router.push(`/explore${query}`);
  };

  const ctaLabels = {
    th: "สำรวจสถานที่",
    en: "Explore Places",
    cn: "探索景点",
  };

  const heroSubtitle = {
    th: "สัมผัสเสน่ห์วิถีชีวิตริมแม่น้ำจันทบุรี อาหารท้องถิ่น วัฒนธรรม และธรรมชาติที่งดงาม",
    en: "Experience riverside life, local cuisine, culture, and stunning nature in Chanthaburi",
    cn: "体验河畔生活、当地美食、文化与尖竹汶的自然美景",
  };

  const stats = [
    { value: "33+", label: { th: "สถานที่", en: "Places", cn: "景点" } },
    { value: "5", label: { th: "หมวดหมู่", en: "Categories", cn: "分类" } },
    { value: "15+", label: { th: "กิจกรรม/ปี", en: "Events/Year", cn: "活动/年" } },
  ];

  return (
    <section className="bg-background pt-24 pb-4 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.1)] ring-1 ring-black/5"
        >
          <div className="relative aspect-[4/5] w-full min-h-[320px] max-h-[520px] sm:aspect-[21/9] sm:min-h-[280px] sm:max-h-[min(44vw,440px)]">
            <Image
              src={homeImages.banner}
              alt="Rim Nam Chanthaburi Riverside"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-3 py-6 text-center sm:px-8 sm:py-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
                className="w-full max-w-2xl min-w-0"
              >
                <p className="section-eyebrow mb-2.5 text-white/70">
                  {locale === "th"
                    ? "ชุมชนท่องเที่ยวจังหวัดจันทบุรี"
                    : locale === "cn"
                      ? "尖竹汶府旅游社区"
                      : "Chanthaburi Tourism Community"}
                </p>

                <h1 className="text-xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  {t(siteConfig.name, locale)}
                </h1>
                <p className="mx-auto mt-3 max-w-xl text-sm font-light leading-relaxed text-white/80 sm:text-base">
                  {heroSubtitle[locale]}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.45, ease: "easeOut" }}
                className="mt-5 w-full max-w-lg min-w-0 px-1"
              >
                <div className="rounded-xl bg-white/95 p-1 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md ring-1 ring-white/20">
                  <SearchBar value={search} onChange={setSearch} size="lg" />
                </div>

                <div className="mt-3 flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center">
                  <button
                    onClick={handleSearch}
                    className="soft-btn soft-btn-primary inline-flex h-10 w-full items-center justify-center gap-2 px-5 text-sm font-medium sm:w-auto sm:px-6"
                  >
                    {ctaLabels[locale]}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => router.push("/map")}
                    className="soft-btn inline-flex h-10 w-full items-center justify-center gap-2 border border-white/25 bg-white/10 px-5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto sm:px-6"
                  >
                    {locale === "th" ? "ดูแผนที่" : locale === "cn" ? "查看地图" : "View Map"}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.45 }}
          className="relative z-10 -mt-4 mx-auto w-full max-w-xl sm:-mt-6 sm:max-w-2xl"
        >
          <div className="flex divide-x divide-border/80 overflow-hidden rounded-xl border border-border/60 bg-white/95 shadow-[0_8px_28px_rgba(0,0,0,0.07)] backdrop-blur-md dark:bg-surface-alt/95">
            {stats.map((stat) => (
              <div key={stat.value} className="min-w-0 flex-1 px-2 py-3 text-center sm:px-4 sm:py-4">
                <div className="text-lg font-medium text-wood-dark sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-0.5 truncate text-[9px] uppercase tracking-wide text-text-soft sm:text-[11px] sm:tracking-widest">
                  {stat.label[locale]}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
