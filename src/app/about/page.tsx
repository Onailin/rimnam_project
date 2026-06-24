"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { communitySections, communityStats } from "@/mock-data/community";
import { homeImages } from "@/constants/home-images";
import { t } from "@/lib/utils";

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

  return (
    <div className="min-h-screen bg-background pt-28 pb-16">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="relative aspect-[21/9] min-h-[250px]">
            <Image
              src={homeImages.banner}
              alt="Rim Nam Chanthaburi Community"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <p className="mb-3 section-eyebrow text-white/80">
                Community Story
              </p>
              <h1 className="text-3xl font-medium text-white sm:text-5xl">
                {title[locale]}
              </h1>
              <p className="mt-3 max-w-2xl text-white/80">{subtitle[locale]}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {communityStats.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="soft-card p-6 text-center"
            >
              <div className="text-3xl font-medium text-wood-dark dark:text-cream">{stat.value}</div>
              <div className="mt-1 text-sm text-wood-light dark:text-cream/60">
                {t(stat.label, locale)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Sections */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {communitySections.map((section, i) => (
            <motion.article
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              {section.image && (
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                    i % 2 === 1 ? "lg:[direction:ltr]" : ""
                  }`}
                >
                  <Image
                    src={section.image}
                    alt={t(section.title, locale)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <h2 className="text-2xl font-medium text-wood-dark dark:text-cream sm:text-3xl">
                  {t(section.title, locale)}
                </h2>
                <p className="mt-4 leading-relaxed text-wood-light dark:text-cream/70">
                  {t(section.content, locale)}
                </p>
                {section.id === "story" && (
                  <blockquote className="mt-6 rounded-r-xl border-l-2 border-wood-dark/30 bg-blush/50 py-3 pl-4 italic text-wood-light dark:border-cream/30 dark:bg-cream-dark dark:text-cream/70">
                    {locale === "th"
                      ? '"แม่น้ำคือหัวใจของเรา"'
                      : locale === "cn"
                        ? '"河流是我们的心"'
                        : '"The river is our heart"'}
                  </blockquote>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="soft-card relative overflow-hidden rounded-2xl p-8 text-center sm:p-12"
        >
          <Image
            src={homeImages.rimnam}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-cream/90" />
          <div className="relative">
          <h2 className="text-2xl font-medium text-wood-dark sm:text-3xl dark:text-cream">
            {locale === "th"
              ? "มาเยือนชุมชนริมน้ำจันทบูร"
              : locale === "cn"
                ? "来访河畔尖竹汶社区"
                : "Visit Rim Nam Chanthaburi"}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-wood-light dark:text-cream/70">
            {locale === "th"
              ? "ค้นพบเสน่ห์วิถีชีวิตริมแม่น้ำ อาหารท้องถิ่น และวัฒนธรรมที่เป็นเอกลักษณ์"
              : locale === "cn"
                ? "发现河畔生活、当地美食和独特文化的魅力"
                : "Discover riverside life, local cuisine, and unique culture"}
          </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
