import type { Event } from "@/types";
import { festivalImages } from "@/constants/festival-images";

export const events: Event[] = [
  {
    id: "e1",
    slug: "rim-nam-festival",
    title: {
      th: "เทศกาลริมน้ำจันทบูร",
      en: "Rim Nam Chanthaburi Festival",
      cn: "河畔尖竹汶节",
    },
    description: {
      th: "เทศกาลประจำปีของชุมชนริมน้ำจันทบูร จัดขึ้นเพื่อส่งเสริมการท่องเที่ยวและอนุรักษ์วัฒนธรรมท้องถิ่น มีขบวนเรือประเพณี การแสดงศิลปวัฒนธรรม ตลาดน้ำยามค่ำ และการประกวดอาหารพื้นบ้าน",
      en: "The annual Rim Nam Chanthaburi Festival promotes tourism and preserves local culture with traditional boat parades, cultural performances, evening floating markets, and local food competitions.",
      cn: "一年一度的河畔尖竹汶节促进旅游并保护当地文化，包括传统船队游行、文化表演、晚间水上市场和当地美食比赛。",
    },
    shortDescription: {
      th: "เทศกาลประจำปีชุมชนริมน้ำ ขบวนเรือและวัฒนธรรมท้องถิ่น",
      en: "Annual community festival with boat parades and local culture",
      cn: "年度社区节，船队游行与当地文化",
    },
    image: festivalImages.market,
    date: "2026-07-15",
    endDate: "2026-07-17",
    time: "16:00 - 22:00",
    location: {
      th: "ท่าเรือชุมชนริมน้ำจันทบูร",
      en: "Rim Nam Community Pier",
      cn: "河畔社区码头",
    },
    category: "festival",
    featured: true,
  },
  {
    id: "e2",
    slug: "durian-season-fair",
    title: {
      th: "งานแฟร์ทุเรียนจันทบุรี",
      en: "Chanthaburi Durian Fair",
      cn: "尖竹汶榴莲博览会",
    },
    description: {
      th: "งานแฟร์ทุเรียนประจำปี ชิมทุเรียนสดจากสวนท้องถิ่น พร้อมผลไม้อื่นๆ และกิจกรรมเก็บทุเรียน",
      en: "Annual durian fair featuring fresh local orchard durian, other fruits, and durian picking activities.",
      cn: "年度榴莲博览会，品尝当地果园新鲜榴莲及其他水果，还有采摘活动。",
    },
    shortDescription: {
      th: "ชิมทุเรียนสดจากสวนท้องถิ่น",
      en: "Taste fresh durian from local orchards",
      cn: "品尝当地果园新鲜榴莲",
    },
    image: festivalImages.market,
    date: "2026-05-20",
    endDate: "2026-05-25",
    time: "09:00 - 18:00",
    location: {
      th: "สวนทุเรียนริมน้ำ",
      en: "Riverside Durian Orchard",
      cn: "河畔榴莲园",
    },
    category: "festival",
    featured: true,
  },
  {
    id: "e3",
    slug: "weekend-floating-market",
    title: {
      th: "ตลาดน้ำวันหยุดสุดสัปดาห์",
      en: "Weekend Floating Market",
      cn: "周末水上市场",
    },
    description: {
      th: "ตลาดน้ำชุมชนทุกเสาร์-อาทิตย์ ขายอาหารพื้นบ้าน ผลไม้สด และของฝาก",
      en: "Community floating market every weekend selling local food, fresh fruits, and souvenirs.",
      cn: "每周六日社区水上市场，出售当地美食、新鲜水果和纪念品。",
    },
    shortDescription: {
      th: "ตลาดน้ำทุกเสาร์-อาทิตย์",
      en: "Floating market every weekend",
      cn: "每周六日水上市场",
    },
    image: festivalImages.market,
    date: "2026-06-28",
    time: "06:00 - 12:00",
    location: {
      th: "ตลาดน้ำริมน้ำจันทบูร",
      en: "Rim Nam Floating Market",
      cn: "河畔水上市场",
    },
    category: "market",
    featured: false,
  },
  {
    id: "e4",
    slug: "pottery-workshop-event",
    title: {
      th: "เวิร์กช็อปปั้นดินเผาสำหรับครอบครัว",
      en: "Family Pottery Workshop",
      cn: "家庭陶器工作坊",
    },
    description: {
      th: "กิจกรรมปั้นดินเผาสำหรับครอบครัว เรียนรู้เทคนิคการปั้นภาชนะดินเผาแบบดั้งเดิม",
      en: "Family pottery workshop teaching traditional clay vessel shaping techniques.",
      cn: "家庭陶器工作坊，教授传统陶器塑形技术。",
    },
    shortDescription: {
      th: "ปั้นดินเผาแบบดั้งเดิมสำหรับครอบครัว",
      en: "Traditional pottery for families",
      cn: "家庭传统陶器体验",
    },
    image: festivalImages.market,
    date: "2026-07-05",
    time: "10:00 - 15:00",
    location: {
      th: "เวิร์กช็อปเครื่องปั้นดินเผา",
      en: "Pottery Workshop",
      cn: "陶器工作坊",
    },
    category: "workshop",
    featured: false,
  },
  {
    id: "e5",
    slug: "cultural-performance-night",
    title: {
      th: "ค่ำคืนศิลปวัฒนธรรมริมน้ำ",
      en: "Riverside Cultural Night",
      cn: "河畔文化之夜",
    },
    description: {
      th: "การแสดงศิลปวัฒนธรรมท้องถิ่น นาฏศิลป์ไทย ดนตรีพื้นบ้าน และการสาธิตอาหาร",
      en: "Local cultural performances including Thai dance, folk music, and food demonstrations.",
      cn: "当地文化表演，包括泰国舞蹈、民间音乐和美食示范。",
    },
    shortDescription: {
      th: "นาฏศิลป์ไทยและดนตรีพื้นบ้าน",
      en: "Thai dance and folk music",
      cn: "泰国舞蹈与民间音乐",
    },
    image: festivalImages.market,
    date: "2026-08-10",
    time: "18:00 - 21:00",
    location: {
      th: "ลานกิจกรรมชุมชนริมน้ำ",
      en: "Rim Nam Community Plaza",
      cn: "河畔社区广场",
    },
    category: "cultural",
    featured: true,
  },
  {
    id: "e6",
    slug: "gem-cutting-demo",
    title: {
      th: "สาธิตการเจียระไนอัญมณี",
      en: "Gem Cutting Demonstration",
      cn: "宝石切割演示",
    },
    description: {
      th: "ชมการสาธิตการเจียระไนเพชรและอัญมณีโดยช่างฝีมือท้องถิ่น พร้อมนิทรรศการอัญมณี",
      en: "Watch local artisans demonstrate gem and diamond cutting with gemstone exhibitions.",
      cn: "观看当地工匠演示宝石和钻石切割，并参观宝石展览。",
    },
    shortDescription: {
      th: "ชมช่างเจียระไนอัญมณีฝีมือท้องถิ่น",
      en: "Watch local gem artisans at work",
      cn: "观看当地宝石工匠工作",
    },
    image: festivalImages.market,
    date: "2026-06-15",
    time: "10:00 - 16:00",
    location: {
      th: "พิพิธภัณฑ์อัญมณีจันทบุรี",
      en: "Chanthaburi Gem Museum",
      cn: "尖竹汶宝石博物馆",
    },
    category: "cultural",
    featured: false,
  },
];

export function getUpcomingEvents() {
  const now = new Date();
  return events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getFeaturedEvents() {
  return events.filter((e) => e.featured);
}

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}
