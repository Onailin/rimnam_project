"use client";

import { useState } from "react";
import { Route, Plus, Trash2, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { places } from "@/mock-data/places";
import { t } from "@/lib/utils";
import type { Place } from "@/types";

export function RoutePlanning() {
  const { locale } = useLanguage();
  const [route, setRoute] = useState<Place[]>([]);

  const title = {
    th: "วางแผนเส้นทาง",
    en: "Route Planning",
    cn: "路线规划",
  };

  const addLabel = {
    th: "เพิ่มจุดแวะ",
    en: "Add Stop",
    cn: "添加站点",
  };

  const startLabel = {
    th: "เริ่มนำทาง",
    en: "Start Navigation",
    cn: "开始导航",
  };

  const availablePlaces = places.filter(
    (p) => !route.find((r) => r.id === p.id)
  );

  const addStop = (place: Place) => {
    if (route.length < 5) {
      setRoute([...route, place]);
    }
  };

  const removeStop = (id: string) => {
    setRoute(route.filter((p) => p.id !== id));
  };

  return (
    <section className="border-t border-border bg-blush/40 dark:bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-wood-dark text-white dark:bg-cream dark:text-wood-dark">
                <Route className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-wood-dark dark:text-cream">
                  {title[locale]}
                </h2>
                <p className="text-sm text-wood-light dark:text-cream/60">
                  {locale === "th"
                    ? "เลือกสถานที่เพื่อสร้างเส้นทางท่องเที่ยว"
                    : locale === "cn"
                      ? "选择景点创建旅游路线"
                      : "Select places to create your tour route"}
                </p>
              </div>
            </div>

            {route.length === 0 ? (
              <div className="rounded-2xl border-2 border-dashed border-border/60 bg-white/50 p-8 text-center dark:bg-cream-dark/30">
                <Route className="mx-auto h-10 w-10 text-wood-light dark:text-cream/40" />
                <p className="mt-3 text-sm text-wood-light dark:text-cream/60">
                  {locale === "th"
                    ? "ยังไม่มีจุดแวะ — เลือกสถานที่ด้านขวา"
                    : locale === "cn"
                      ? "暂无站点 — 从右侧选择景点"
                      : "No stops yet — select places on the right"}
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {route.map((place, i) => (
                  <motion.div
                    key={place.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm dark:bg-cream-dark"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-wood-dark text-xs font-medium text-white dark:bg-cream dark:text-wood-dark">
                      {i + 1}
                    </span>
                    <span className="flex-1 text-sm font-medium text-wood-dark dark:text-cream">
                      {t(place.name, locale)}
                    </span>
                    <button
                      onClick={() => removeStop(place.id)}
                      className="text-wood-light hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}

                {route.length >= 2 && (
                  <button className="soft-btn soft-btn-primary mt-4 flex w-full items-center justify-center gap-2 py-3 text-sm font-medium">
                    <Navigation className="h-4 w-4" />
                    {startLabel[locale]}
                  </button>
                )}
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-wood-dark dark:text-cream">
              {addLabel[locale]}
            </h3>
            <div className="max-h-80 space-y-2 overflow-y-auto">
              {availablePlaces.map((place) => (
                <button
                  key={place.id}
                  onClick={() => addStop(place)}
                  disabled={route.length >= 5}
                  className="flex w-full items-center gap-3 rounded-xl bg-white p-3 text-left shadow-sm transition-colors hover:bg-blush disabled:opacity-50 dark:bg-cream-dark dark:hover:bg-cream"
                >
                  <Plus className="h-4 w-4 shrink-0 text-wood-dark dark:text-cream" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-wood-dark dark:text-cream">
                      {t(place.name, locale)}
                    </p>
                    <p className="truncate text-xs text-wood-light dark:text-cream/50">
                      {t(place.shortDescription, locale)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
