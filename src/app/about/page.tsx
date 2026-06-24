"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { communitySections, communityStats } from "@/mock-data/community";
import { homeImages } from "@/constants/home-images";
import { t } from "@/lib/utils";

const sectionLabels: Record<string, { th: string; en: string; cn: string }> = {
  history: { th: "ประวัติ", en: "History", cn: "历史" },
  culture: { th: "วัฒนธรรม", en: "Culture", cn: "文化" },
  story: { th: "เรื่องราว", en: "Stories", cn: "故事" },
  vision: { th: "วิสัยทัศน์", en: "Vision", cn: "愿景" },
};

export default function AboutPage() {
  const { locale } = useLanguage();

  const title = {
    th: "เกี่ยวกับชุมชนริมน้ำจันทบูร",
    en: "About Rim Nam Chanthaburi",
    cn: "关于河畔尖竹汶社区",
  };

  const subtitle = {
    th: "เรื่องราว วัฒนธรรม และวิสัยทัศน์ของชุมชนท่องเที่ยวริมแม่น้ำจันทบุรี",
    en: "Stories, culture, and vision of the riverside tourism community",
    cn: "河畔旅游社区的故事、文化与愿景",
  };

  const intro = {
    th: "ชุมชนริมน้ำจันทบูรตั้งอยู่ริมแม่น้ำจันทบุรี อำเภอเมืองจันทบุรี เป็นชุมชนที่ผสมผสานวิถีชีวิตริมน้ำ วัฒนธรรมท้องถิ่น และการท่องเที่ยวเชิงอนุรักษ์เข้าด้วยกัน",
    en: "Rim Nam Chanthaburi sits along the Chanthaburi River in Mueang district — a community where riverside life, local culture, and sustainable tourism come together.",
    cn: "河畔尖竹汶位于尖竹汶府挽区尖竹汶河畔，是河畔生活、地方文化与可持续旅游相融合的社区。",
  };

  const location = {
    th: "ตำบลวัดใหม่ อำเภอเมืองจันทบุรี จังหวัดจันทบุรี",
    en: "Wat Mai, Mueang Chanthaburi, Chanthaburi Province",
    cn: "尖竹汶府挽区瓦迈",
  };

  const quote = {
    th: "แม่น้ำคือหัวใจของเรา",
    en: "The river is our heart",
    cn: "河流是我们的心",
  };

  const quoteAuthor = {
    th: "ปู่สมศักดิ์ — ชาวบ้านวัย 78 ปี",
    en: "Grandpa Somsak — 78-year-old resident",
    cn: "索姆萨克爷爷 — 78岁居民",
  };

  const ctaTitle = {
    th: "มาเยือนชุมชนริมน้ำจันทบูร",
    en: "Visit Rim Nam Chanthaburi",
    cn: "来访河畔尖竹汶社区",
  };

  const ctaDesc = {
    th: "ค้นพบเสน่ห์วิถีชีวิตริมแม่น้ำ อาหารท้องถิ่น และวัฒนธรรมที่เป็นเอกลักษณ์",
    en: "Discover riverside life, local cuisine, and unique culture",
    cn: "发现河畔生活、当地美食和独特文化的魅力",
  };

  const exploreLabel = {
    th: "สำรวจสถานที่",
    en: "Explore Places",
    cn: "探索景点",
  };

  const eventsLabel = {
    th: "ดูกิจกรรม",
    en: "View Events",
    cn: "查看活动",
  };

  const historySection = communitySections.find((s) => s.id === "history")!;
  const cultureSection = communitySections.find((s) => s.id === "culture")!;
  const storySection = communitySections.find((s) => s.id === "story")!;
  const visionSection = communitySections.find((s) => s.id === "vision")!;

  return (
    <div className="min-h-screen overflow-x-hidden bg-background pt-24 pb-14 sm:pt-28 sm:pb-16">
      {/* Hero — full bleed, no frame */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full"
        >
          <div className="relative aspect-[4/3] w-full min-h-[240px] max-h-[420px] sm:aspect-[21/9] sm:min-h-[260px] sm:max-h-[400px]">
            <Image
              src={homeImages.banner}
              alt="Rim Nam Chanthaburi Community"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 px-4 pb-8 sm:px-8 sm:pb-10 lg:px-12">
              <p className="section-eyebrow mb-2 text-white/70">
                {locale === "th" ? "ชุมชนท่องเที่ยว" : locale === "cn" ? "旅游社区" : "Tourism Community"}
              </p>
              <h1 className="max-w-3xl text-2xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                {title[locale]}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                {subtitle[locale]}
              </p>
              <div className="mt-4 inline-flex max-w-full items-center gap-1.5 text-xs text-white/80">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{location[locale]}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats — borderless */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="border-b border-border/50 bg-surface"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-8 sm:grid-cols-4 sm:gap-0 sm:px-6 sm:py-10 lg:px-8">
            {communityStats.map((stat) => (
              <div key={stat.value} className="min-w-0 text-center sm:border-l sm:border-border/40 sm:first:border-l-0">
                <div className="text-xl font-medium text-wood-dark dark:text-cream sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 truncate px-2 text-[11px] text-text-soft sm:text-xs">
                  {t(stat.label, locale)}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="mx-auto mt-12 max-w-3xl px-4 sm:mt-16 sm:px-6">
        <p className="section-eyebrow mb-3 text-center">
          {locale === "th" ? "ทำความรู้จัก" : locale === "cn" ? "了解我们" : "Get to know us"}
        </p>
        <p className="text-center text-base leading-relaxed text-text-muted sm:text-lg">
          {intro[locale]}
        </p>
      </section>

      {/* History */}
      <section className="mx-auto mt-14 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
            <Image
              src={historySection.image!}
              alt={t(historySection.title, locale)}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="min-w-0">
            <span className="section-eyebrow">{sectionLabels.history[locale]}</span>
            <h2 className="mt-2 text-xl font-medium text-wood-dark dark:text-cream sm:text-2xl">
              {t(historySection.title, locale)}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              {t(historySection.content, locale)}
            </p>
          </div>
        </motion.article>
      </section>

      {/* Culture */}
      <section className="mx-auto mt-14 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <div className="min-w-0 lg:order-2">
            <span className="section-eyebrow">{sectionLabels.culture[locale]}</span>
            <h2 className="mt-2 text-xl font-medium text-wood-dark dark:text-cream sm:text-2xl">
              {t(cultureSection.title, locale)}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              {t(cultureSection.content, locale)}
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:order-1">
            <Image
              src={cultureSection.image!}
              alt={t(cultureSection.title, locale)}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.article>
      </section>

      {/* Quote — no card */}
      <section className="mx-auto mt-14 max-w-3xl px-4 sm:mt-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-y border-border/50 py-10 sm:py-14"
        >
          <Quote className="mb-4 h-8 w-8 text-border sm:h-10 sm:w-10" strokeWidth={1} />
          <span className="section-eyebrow">{sectionLabels.story[locale]}</span>
          <blockquote className="mt-3 text-xl font-medium leading-snug text-wood-dark dark:text-cream sm:text-2xl">
            &ldquo;{quote[locale]}&rdquo;
          </blockquote>
          <p className="mt-2 text-sm text-text-soft">{quoteAuthor[locale]}</p>
          <p className="mt-6 text-sm leading-relaxed text-text-muted sm:text-base">
            {t(storySection.content, locale)}
          </p>
        </motion.div>
      </section>

      {/* Vision */}
      <section className="mx-auto mt-14 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <div className="min-w-0">
            <span className="section-eyebrow">{sectionLabels.vision[locale]}</span>
            <h2 className="mt-2 text-xl font-medium text-wood-dark dark:text-cream sm:text-2xl">
              {t(visionSection.title, locale)}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
              {t(visionSection.content, locale)}
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                {
                  th: "ชุมชนเป็นผู้บริหารจัดการ",
                  en: "Community-led management",
                  cn: "社区自主管理",
                },
                {
                  th: "สัมผัสวิถีชีวิตแท้จริง",
                  en: "Authentic local experiences",
                  cn: "真实本地体验",
                },
                {
                  th: "อนุรักษ์วัฒนธรรมอย่างยั่งยืน",
                  en: "Sustainable cultural preservation",
                  cn: "可持续文化保护",
                },
              ].map((item) => (
                <li
                  key={item.th}
                  className="flex items-start gap-2.5 text-sm text-text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-wood-dark dark:bg-cream" />
                  {item[locale]}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
            <Image
              src={visionSection.image!}
              alt={t(visionSection.title, locale)}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </motion.article>
      </section>

      {/* CTA — full bleed */}
      <section className="mt-16 sm:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          <div className="relative aspect-[4/3] min-h-[280px] w-full sm:aspect-[21/9] sm:min-h-[240px]">
            <Image
              src={homeImages.rimnam}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-5 py-10 text-center sm:px-10">
              <h2 className="text-xl font-medium text-white sm:text-3xl">
                {ctaTitle[locale]}
              </h2>
              <p className="mt-3 max-w-lg text-sm text-white/80 sm:text-base">
                {ctaDesc[locale]}
              </p>
              <div className="mt-6 flex w-full max-w-sm flex-col gap-2.5 sm:max-w-none sm:flex-row sm:justify-center">
                <Link
                  href="/explore"
                  className="soft-btn soft-btn-primary inline-flex h-11 w-full items-center justify-center gap-2 px-6 text-sm font-medium sm:w-auto"
                >
                  {exploreLabel[locale]}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/events"
                  className="soft-btn inline-flex h-11 w-full items-center justify-center gap-2 border border-white/30 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto"
                >
                  {eventsLabel[locale]}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
