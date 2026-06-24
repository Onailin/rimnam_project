import type { Category } from "@/types";
import { places } from "@/mock-data/places";

function countPlaces(categoryId: string) {
  return places.filter((p) => p.categoryId === categoryId).length;
}

export const categories: Category[] = [
  {
    id: "cafe",
    slug: "cafe",
    name: { th: "คาเฟ่", en: "Cafés", cn: "咖啡馆" },
    description: {
      th: "คาเฟ่ริมน้ำ กาแฟคั่ว และบรรยากาศชิลๆ",
      en: "Riverside cafés, roasted coffee, and chill vibes",
      cn: "河畔咖啡馆、烘焙咖啡与惬意氛围",
    },
    icon: "Coffee",
    color: "#111111",
    placeCount: countPlaces("cafe"),
  },
  {
    id: "jewelry",
    slug: "jewelry",
    name: { th: "ร้านจิวเวลรี่", en: "Jewelry Shops", cn: "珠宝店" },
    description: {
      th: "เครื่องประดับอัญมณีจันทบุรีและงานฝีมือท้องถิ่น",
      en: "Chanthaburi gems and local jewelry craftsmanship",
      cn: "尖竹汶宝石与当地珠宝工艺",
    },
    icon: "Gem",
    color: "#2A2A2A",
    placeCount: countPlaces("jewelry"),
  },
  {
    id: "restaurant",
    slug: "restaurant",
    name: { th: "ร้านอาหาร", en: "Restaurants", cn: "餐厅" },
    description: {
      th: "อาหารท้องถิ่นและอาหารทะเลสดริมแม่น้ำ",
      en: "Local cuisine and fresh riverside seafood",
      cn: "当地美食与河畔新鲜海鲜",
    },
    icon: "UtensilsCrossed",
    color: "#4A4A4A",
    placeCount: countPlaces("restaurant"),
  },
  {
    id: "hotel",
    slug: "hotel",
    name: { th: "โรงแรม", en: "Hotels", cn: "酒店" },
    description: {
      th: "ที่พักสะดวกสบายริมแม่น้ำจันทบุรี",
      en: "Comfortable stays along the Chanthaburi River",
      cn: "尖竹汶河畔舒适住宿",
    },
    icon: "Hotel",
    color: "#6A6A6A",
    placeCount: countPlaces("hotel"),
  },
  {
    id: "temple",
    slug: "temple",
    name: { th: "วัด/ศาลเจ้า", en: "Temples & Shrines", cn: "寺庙/神社" },
    description: {
      th: "สัมผัสความศักดิ์สิทธิ์และสถาปัตยกรรมท้องถิ่น",
      en: "Experience sacred sites and local architecture",
      cn: "感受神圣氛围与本土建筑",
    },
    icon: "Landmark",
    color: "#000000",
    placeCount: countPlaces("temple"),
  },
];
