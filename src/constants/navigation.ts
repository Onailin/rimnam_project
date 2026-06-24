import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    href: "/",
    label: { th: "หน้าแรก", en: "Home", cn: "首页" },
  },
  {
    href: "/explore",
    label: { th: "สำรวจ", en: "Explore", cn: "探索" },
  },
  {
    href: "/map",
    label: { th: "แผนที่", en: "Map", cn: "地图" },
  },
  {
    href: "/events",
    label: { th: "กิจกรรม", en: "Events", cn: "活动" },
  },
  {
    href: "/about",
    label: { th: "เกี่ยวกับชุมชน", en: "About", cn: "关于社区" },
  },
];

export const sortOptions = [
  { value: "popular", label: { th: "ยอดนิยม", en: "Popular", cn: "热门" } },
  { value: "rating", label: { th: "คะแนนสูงสุด", en: "Top Rated", cn: "评分最高" } },
  { value: "name", label: { th: "ชื่อ A-Z", en: "Name A-Z", cn: "名称 A-Z" } },
  { value: "newest", label: { th: "ใหม่ล่าสุด", en: "Newest", cn: "最新" } },
] as const;
