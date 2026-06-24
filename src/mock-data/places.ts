import type { Place } from "@/types";
import { placeImages } from "@/constants/place-images";
import { festivalImages } from "@/constants/festival-images";

export const places: Place[] = [
  {
    id: "1",
    slug: "wat-khao-somphot",
    name: {
      th: "วัดเขาสมโภชน์",
      en: "Wat Khao Somphot",
      cn: "考松坡寺",
    },
    shortDescription: {
      th: "วัดเก่าแก่บนเนินเขา มองเห็นทิวทัศน์แม่น้ำจันทบุรี",
      en: "Ancient hilltop temple with panoramic river views",
      cn: "古老山顶寺庙，俯瞰河流全景",
    },
    description: {
      th: "วัดเขาสมโภชน์เป็นวัดสำคัญของชุมชนริมน้ำจันทบูร ตั้งอยู่บนเนินเขาใกล้แม่น้ำจันทบุรี มีพระธาตุเจดีย์สีขาวโดดเด่น เป็นจุดชมวิวพระอาทิตย์ตกที่สวยงามที่สุดแห่งหนึ่งในจังหวัด ภายในวัดมีพระพุทธรูปโบราณและจิตรกรรมฝาผนังที่สะท้อนวัฒนธรรมท้องถิ่น",
      en: "Wat Khao Somphot is a significant temple of the Rim Nam community, perched on a hill near the Chanthaburi River. Its gleaming white chedi offers one of the province's finest sunset viewpoints. Inside, ancient Buddha images and mural paintings reflect local cultural heritage.",
      cn: "考松坡寺是河畔社区的重要寺庙，坐落在尖竹汶河附近的山坡上。洁白的佛塔是全省最美的日落观景点之一。寺内古老的佛像和壁画展现了当地文化遗产。",
    },
    categoryId: "temple",
    images: [placeImages.sanjao],
    rating: 4.8,
    reviewCount: 234,
    address: {
      th: "ถนนริมน้ำ ตำบลวัดใหม่ อำเภอเมืองจันทบุรี",
      en: "Rim Nam Road, Wat Mai Sub-district, Mueang Chanthaburi",
      cn: "尖竹汶府挽迈区河畔路",
    },
    phone: "039-123-456",
    openingHours: {
      th: "ทุกวัน 06:00 - 18:00 น.",
      en: "Daily 6:00 AM - 6:00 PM",
      cn: "每天 06:00 - 18:00",
    },
    coordinates: { lat: 12.6112, lng: 102.1038 },
    tags: [
      { th: "วิวสวย", en: "Scenic View", cn: "美景" },
      { th: "ถ่ายรูป", en: "Photography", cn: "摄影" },
    ],
    featured: true,
    popular: true,
    reviews: [
      {
        id: "r1",
        author: "สมชาย ใจดี",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        rating: 5,
        comment: {
          th: "วิวพระอาทิตย์ตกสวยมาก บรรยากาศเงียบสงบ เหมาะกับการมาเที่ยวช่วงเย็น",
          en: "Stunning sunset views, peaceful atmosphere, perfect for evening visits",
          cn: "日落景色绝美，氛围宁静，适合傍晚游览",
        },
        date: "2025-11-15",
      },
      {
        id: "r2",
        author: "Maria Chen",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        rating: 4,
        comment: {
          th: "สถาปัตยกรรมสวยงาม แต่มีบันไดขึ้นเขาค่อนข้างสูง",
          en: "Beautiful architecture, but the hill stairs are quite steep",
          cn: "建筑精美，但上山台阶较陡",
        },
        date: "2025-10-22",
      },
    ],
  },
  {
    id: "2",
    slug: "rim-nam-floating-market",
    name: {
      th: "ตลาดน้ำริมน้ำจันทบูร",
      en: "Rim Nam Floating Market",
      cn: "河畔水上市场",
    },
    shortDescription: {
      th: "ตลาดน้ำชุมชนที่ยังคงวิถีชีวิตริมแม่น้ำ",
      en: "Community floating market preserving riverside traditions",
      cn: "保留河畔生活传统的水上社区市场",
    },
    description: {
      th: "ตลาดน้ำริมน้ำจันทบูรเป็นหัวใจของชุมชนท่องเที่ยว เปิดทุกเช้าวันเสาร์-อาทิตย์ มีเรือพายขายอาหารพื้นบ้าน ผลไม้สดจากสวน และของฝากหัตถกรรมท้องถิ่น นักท่องเที่ยวสามารถนั่งเรือชมวิถีชีวิตริมน้ำได้",
      en: "The Rim Nam Floating Market is the heart of the tourism community, open every Saturday and Sunday morning. Vendors sell local food, fresh orchard fruits, and handicraft souvenirs from boats. Visitors can take boat rides to experience riverside life.",
      cn: "河畔水上市场是旅游社区的核心，每周六日上午开放。商贩乘船出售当地美食、新鲜水果和手工艺纪念品。游客可乘船体验河畔生活。",
    },
    categoryId: "restaurant",
    images: [festivalImages.market],
    rating: 4.6,
    reviewCount: 512,
    address: {
      th: "ท่าเรือชุมชนริมน้ำจันทบูร อำเภอเมืองจันทบุรี",
      en: "Rim Nam Community Pier, Mueang Chanthaburi",
      cn: "尖竹汶府河畔社区码头",
    },
    phone: "039-234-567",
    openingHours: {
      th: "เสาร์-อาทิตย์ 06:00 - 12:00 น.",
      en: "Sat-Sun 6:00 AM - 12:00 PM",
      cn: "周六至周日 06:00 - 12:00",
    },
    coordinates: { lat: 12.6089, lng: 102.1012 },
    tags: [
      { th: "ตลาดน้ำ", en: "Floating Market", cn: "水上市场" },
      { th: "อาหาร", en: "Food", cn: "美食" },
    ],
    featured: true,
    popular: true,
    reviews: [
      {
        id: "r3",
        author: "นภา สุขใจ",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
        rating: 5,
        comment: {
          th: "อาหารอร่อยมาก บรรยากาศดี เหมือนได้ย้อนเวลากลับไป",
          en: "Delicious food, great atmosphere, like stepping back in time",
          cn: "美食可口，氛围极佳，仿佛穿越时空",
        },
        date: "2025-12-01",
      },
    ],
  },
  {
    id: "3",
    slug: "rim-nam-riverside-hotel",
    name: {
      th: "โรงแรมริมน้ำจันทบูร",
      en: "Rim Nam Riverside Hotel",
      cn: "河畔酒店",
    },
    shortDescription: {
      th: "โรงแรมบูติกริมแม่น้ำจันทบุรี วิวสวยสงบ",
      en: "Boutique riverside hotel with peaceful river views",
      cn: "河畔精品酒店，河景宁静优美",
    },
    description: {
      th: "โรงแรมริมน้ำจันทบูรตั้งอยู่ริมแม่น้ำจันทบุรีโดยตรง มีห้องพักดีไซน์ท้องถิ่น พร้อมอาหารเช้าแบบพื้นบ้านและระเบียงชมวิวแม่น้ำ ใกล้แหล่งท่องเที่ยวชุมชนริมน้ำ",
      en: "Rim Nam Riverside Hotel sits directly on the Chanthaburi River with locally inspired rooms, homemade breakfast, and a terrace overlooking the water — steps from community attractions.",
      cn: "河畔酒店坐落在尖竹汶河畔，客房融入本地设计，提供家常早餐与河景露台，步行即可到达社区景点。",
    },
    categoryId: "hotel",
    images: [
      placeImages.banner,
      placeImages.home,
      placeImages.banner1,
    ],
    rating: 4.9,
    reviewCount: 89,
    address: {
      th: "ซอยริมน้ำ 3 ตำบลวัดใหม่ อำเภอเมืองจันทบุรี",
      en: "Soi Rim Nam 3, Wat Mai, Mueang Chanthaburi",
      cn: "尖竹汶府挽迈区河畔巷3号",
    },
    phone: "039-345-678",
    email: "stay@baanrimnam.com",
    website: "https://baanrimnam.com",
    openingHours: {
      th: "เช็คอิน 14:00 / เช็คเอาท์ 11:00",
      en: "Check-in 2:00 PM / Check-out 11:00 AM",
      cn: "入住 14:00 / 退房 11:00",
    },
    coordinates: { lat: 12.6075, lng: 102.0998 },
    tags: [
      { th: "โรงแรม", en: "Hotel", cn: "酒店" },
      { th: "วัฒนธรรม", en: "Culture", cn: "文化" },
    ],
    featured: true,
    popular: false,
    reviews: [
      {
        id: "r4",
        author: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        rating: 5,
        comment: {
          th: "ประสบการณ์ที่ยอดเยี่ยม เจ้าของบ้านใจดีมาก",
          en: "Wonderful experience, hosts are incredibly kind",
          cn: "绝佳体验，房东非常友善",
        },
        date: "2025-11-28",
      },
    ],
  },
  {
    id: "4",
    slug: "chanthaburi-gem-jewelry",
    name: {
      th: "ร้านจิวเวลรี่อัญมณีจันทบุรี",
      en: "Chanthaburi Gem Jewelry",
      cn: "尖竹汶宝石珠宝店",
    },
    shortDescription: {
      th: "ร้านจิวเวลรี่อัญมณีจันทบุรีและงานเจียระไน",
      en: "Chanthaburi gem jewelry and cutting craftsmanship",
      cn: "尖竹汶宝石珠宝与切割工艺",
    },
    description: {
      th: "ร้านจิวเวลรี่อัญมณีจันทบุรีจำหน่ายเครื่องประดับจากอัญมณีท้องถิ่น มีกิจกรรมเจียระไนเพชรสาธิต และบริการออกแบบเครื่องประดับตามสั่ง",
      en: "Chanthaburi Gem Jewelry sells locally sourced gemstone pieces with live cutting demonstrations and custom design services.",
      cn: "尖竹汶宝石珠宝店出售当地宝石首饰，提供现场切割演示与定制设计服务。",
    },
    categoryId: "jewelry",
    images: [
      placeImages.banner,
      placeImages.banner14,
      placeImages.album2,
    ],
    rating: 4.5,
    reviewCount: 167,
    address: {
      th: "ถนนเจมส์ ตำบลวัดใหม่ อำเภอเมืองจันทบุรี",
      en: "Gems Road, Wat Mai, Mueang Chanthaburi",
      cn: "尖竹汶府挽迈区宝石路",
    },
    phone: "039-456-789",
    openingHours: {
      th: "ทุกวัน 09:00 - 17:00 น.",
      en: "Daily 9:00 AM - 5:00 PM",
      cn: "每天 09:00 - 17:00",
    },
    coordinates: { lat: 12.6134, lng: 102.1056 },
    tags: [
      { th: "จิวเวลรี่", en: "Jewelry", cn: "珠宝" },
      { th: "อัญมณี", en: "Gems", cn: "宝石" },
    ],
    featured: false,
    popular: true,
    reviews: [],
  },
  {
    id: "5",
    slug: "riverside-cafe-gallery",
    name: {
      th: "ริเวอร์ไซด์ คาเฟ่ แอนด์ แกลเลอรี่",
      en: "Riverside Cafe & Gallery",
      cn: "河畔咖啡画廊",
    },
    shortDescription: {
      th: "คาเฟ่ริมน้ำพร้อมแกลเลอรี่ศิลปะชุมชน",
      en: "Riverside cafe with community art gallery",
      cn: "河畔咖啡厅与社区艺术画廊",
    },
    description: {
      th: "ริเวอร์ไซด์ คาเฟ่ แอนด์ แกลเลอรี่เป็นพื้นที่สร้างสรรค์ของศิลปินท้องถิ่น มีกาแฟคั่วเอง เบเกอรี่โฮมเมด และนิทรรศการศิลปะหมุนเวียนทุกเดือน มุมถ่ายรูปริมน้ำสวยงาม",
      en: "Riverside Cafe & Gallery is a creative space for local artists featuring house-roasted coffee, homemade bakery, and rotating monthly art exhibitions. Beautiful riverside photo spots included.",
      cn: "河畔咖啡画廊是本地艺术家的创意空间，提供自烘焙咖啡、自制烘焙食品和每月轮换的艺术展览。设有美丽的河畔拍照点。",
    },
    categoryId: "cafe",
    images: [
      placeImages.album5,
      placeImages.home,
      placeImages.banner14,
    ],
    rating: 4.7,
    reviewCount: 298,
    address: {
      th: "ถนนริมน้ำ ตำบลวัดใหม่ อำเภอเมืองจันทบุรี",
      en: "Rim Nam Road, Wat Mai, Mueang Chanthaburi",
      cn: "尖竹汶府挽迈区河畔路",
    },
    phone: "039-567-890",
    openingHours: {
      th: "ทุกวัน 08:00 - 20:00 น.",
      en: "Daily 8:00 AM - 8:00 PM",
      cn: "每天 08:00 - 20:00",
    },
    coordinates: { lat: 12.6098, lng: 102.1005 },
    tags: [
      { th: "คาเฟ่", en: "Cafe", cn: "咖啡" },
      { th: "ศิลปะ", en: "Art", cn: "艺术" },
    ],
    featured: true,
    popular: true,
    reviews: [
      {
        id: "r5",
        author: "ปิยะดา รักศิลปะ",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
        rating: 5,
        comment: {
          th: "กาแฟอร่อย บรรยากาศดี ศิลปะสวยมาก",
          en: "Great coffee, lovely atmosphere, beautiful art",
          cn: "咖啡美味，氛围宜人，艺术精美",
        },
        date: "2025-12-10",
      },
    ],
  },
  {
    id: "6",
    slug: "durian-riverside-cafe",
    name: {
      th: "คาเฟ่สวนทุเรียนริมน้ำ",
      en: "Durian Riverside Café",
      cn: "河畔榴莲咖啡馆",
    },
    shortDescription: {
      th: "คาเฟ่ในสวนผลไม้ ชิมทุเรียนและเครื่องดื่มริมแม่น้ำ",
      en: "Orchard café serving durian treats and riverside drinks",
      cn: "果园咖啡馆，提供榴莲甜点与河畔饮品",
    },
    description: {
      th: "คาเฟ่สวนทุเรียนริมน้ำตั้งอยู่ในสวนผลไม้ริมแม่น้ำจันทบุรี เสิร์ฟกาแฟ ขนมจากทุเรียน และเครื่องดื่มเย็นๆ ในบรรยากาศสวนผลไม้ท้องถิ่น",
      en: "Durian Riverside Café sits in a fruit orchard along the Chanthaburi River, serving coffee, durian desserts, and chilled drinks amid local orchard scenery.",
      cn: "河畔榴莲咖啡馆坐落在尖竹汶河畔果园中，提供咖啡、榴莲甜点和冷饮，尽享当地果园风光。",
    },
    categoryId: "cafe",
    images: [
      placeImages.banner14,
      placeImages.album5,
      placeImages.banner1,
    ],
    rating: 4.4,
    reviewCount: 145,
    address: {
      th: "หมู่ 5 ตำบลวัดใหม่ อำเภอเมืองจันทบุรี",
      en: "Moo 5, Wat Mai, Mueang Chanthaburi",
      cn: "尖竹汶府挽迈区5村",
    },
    phone: "039-678-901",
    openingHours: {
      th: "พฤหัส-อาทิตย์ 08:00 - 16:00 น.",
      en: "Thu-Sun 8:00 AM - 4:00 PM",
      cn: "周四至周日 08:00 - 16:00",
    },
    coordinates: { lat: 12.6156, lng: 102.0987 },
    tags: [
      { th: "คาเฟ่", en: "Café", cn: "咖啡" },
      { th: "ทุเรียน", en: "Durian", cn: "榴莲" },
    ],
    featured: false,
    popular: true,
    reviews: [],
  },
  {
    id: "7",
    slug: "rim-nam-jewelry-house",
    name: {
      th: "ร้านจิวเวลรี่ริมน้ำ",
      en: "Rim Nam Jewelry House",
      cn: "河畔珠宝店",
    },
    shortDescription: {
      th: "เครื่องประดับอัญมณีท้องถิ่นและงานฝีมือช่างจันทบุรี",
      en: "Local gemstone jewelry and Chanthaburi artisan work",
      cn: "当地宝石首饰与尖竹汶工匠作品",
    },
    description: {
      th: "ร้านจิวเวลรี่ริมน้ำจำหน่ายแหวน สร้อย และเครื่องประดับจากอัญมณีจันทบุรี มีบริการออกแบบตามสั่งและชมงานเจียระไนสดจากช่างท้องถิ่น",
      en: "Rim Nam Jewelry House offers rings, necklaces, and ornaments from Chanthaburi gems, with custom design and live cutting by local artisans.",
      cn: "河畔珠宝店出售尖竹汶宝石戒指、项链和饰品，提供定制设计并可观赏当地工匠现场切割。",
    },
    categoryId: "jewelry",
    images: [
      placeImages.banner1,
      placeImages.album2,
      placeImages.banner,
    ],
    rating: 4.6,
    reviewCount: 78,
    address: {
      th: "ซอยหัตถกรรม ตำบลวัดใหม่ อำเภอเมืองจันทบุรี",
      en: "Craft Alley, Wat Mai, Mueang Chanthaburi",
      cn: "尖竹汶府挽迈区工艺巷",
    },
    phone: "039-789-012",
    openingHours: {
      th: "อังคาร-อาทิตย์ 10:00 - 17:00 น.",
      en: "Tue-Sun 10:00 AM - 5:00 PM",
      cn: "周二至周日 10:00 - 17:00",
    },
    coordinates: { lat: 12.6102, lng: 102.1025 },
    tags: [
      { th: "จิวเวลรี่", en: "Jewelry", cn: "珠宝" },
      { th: "อัญมณี", en: "Gems", cn: "宝石" },
    ],
    featured: false,
    popular: false,
    reviews: [],
  },
  {
    id: "8",
    slug: "riverside-shrine",
    name: {
      th: "ศาลเจ้าริมน้ำจันทบูร",
      en: "Rim Nam Riverside Shrine",
      cn: "河畔神社",
    },
    shortDescription: {
      th: "ศาลเจ้าชุมชนริมแม่น้ำ สถานที่สักการะและชมวิวพระอาทิตย์ตก",
      en: "Community riverside shrine for worship and sunset views",
      cn: "社区河畔神社，祈福与观赏日落",
    },
    description: {
      th: "ศาลเจ้าริมน้ำจันทบูรเป็นศาลเจ้าชุมชนที่ชาวบ้านเคารพนับถือ ตั้งอยู่ริมแม่น้ำจันทบุรี มีบรรยากาศสงบ เหมาะสำหรับสักการะและชมพระอาทิตย์ตกยามเย็น",
      en: "Rim Nam Riverside Shrine is a community shrine revered by locals, set along the Chanthaburi River with a peaceful atmosphere ideal for worship and evening sunsets.",
      cn: "河畔神社是当地居民敬仰的社区神社，坐落在尖竹汶河畔，氛围宁静，适合祈福与观赏日落。",
    },
    categoryId: "temple",
    images: [placeImages.sanjao],
    rating: 4.8,
    reviewCount: 421,
    address: {
      th: "ถนนริมน้ำ ตำบลวัดใหม่ อำเภอเมืองจันทบุรี",
      en: "Rim Nam Road, Wat Mai, Mueang Chanthaburi",
      cn: "尖竹汶府挽迈区河畔路",
    },
    phone: "-",
    openingHours: {
      th: "ตลอด 24 ชั่วโมง",
      en: "Open 24 hours",
      cn: "全天开放",
    },
    coordinates: { lat: 12.6082, lng: 102.0992 },
    tags: [
      { th: "ศาลเจ้า", en: "Shrine", cn: "神社" },
      { th: "พระอาทิตย์ตก", en: "Sunset", cn: "日落" },
    ],
    featured: true,
    popular: true,
    reviews: [],
  },
  {
    id: "9",
    slug: "local-seafood-restaurant",
    name: {
      th: "ร้านอาหารทะเลริมน้ำ",
      en: "Riverside Seafood Restaurant",
      cn: "河畔海鲜餐厅",
    },
    shortDescription: {
      th: "อาหารทะเลสดๆ จากชาวประมงท้องถิ่น",
      en: "Fresh seafood from local fishermen",
      cn: "当地渔民新鲜海鲜",
    },
    description: {
      th: "ร้านอาหารทะเลริมน้ำเสิร์ฟอาหารทะเลสดจากชาวประมงในชุมชน เมนูเด่น ปูผัดผงกะหรี่ กุ้งแม่น้ำเผา และปลากะพงนึ่งมะนาว นั่งทานริมน้ำได้",
      en: "This riverside seafood restaurant serves fresh catch from community fishermen. Signature dishes include curry crab, grilled river prawns, and steamed seabass with lime. Dine with river views.",
      cn: "这家河畔海鲜餐厅供应社区渔民的新鲜海产。招牌菜包括咖喱蟹、烤河虾和柠檬蒸鲈鱼。可在河畔用餐。",
    },
    categoryId: "restaurant",
    images: [
      placeImages.album2,
      placeImages.home,
      placeImages.banner14,
    ],
    rating: 4.5,
    reviewCount: 356,
    address: {
      th: "ท่าเรือชุมชน ตำบลวัดใหม่ อำเภอเมืองจันทบุรี",
      en: "Community Pier, Wat Mai, Mueang Chanthaburi",
      cn: "尖竹汶府挽迈区社区码头",
    },
    phone: "039-890-123",
    openingHours: {
      th: "ทุกวัน 10:00 - 22:00 น.",
      en: "Daily 10:00 AM - 10:00 PM",
      cn: "每天 10:00 - 22:00",
    },
    coordinates: { lat: 12.6078, lng: 102.1008 },
    tags: [
      { th: "อาหารทะเล", en: "Seafood", cn: "海鲜" },
      { th: "ริมน้ำ", en: "Riverside", cn: "河畔" },
    ],
    featured: false,
    popular: true,
    reviews: [],
  },
];

export function getPlaceBySlug(slug: string) {
  return places.find((p) => p.slug === slug);
}

export function getRelatedPlaces(placeId: string, categoryId: string, limit = 3) {
  return places
    .filter((p) => p.id !== placeId && p.categoryId === categoryId)
    .slice(0, limit);
}

export function getFeaturedPlaces() {
  return places.filter((p) => p.featured);
}

export function getPopularPlaces() {
  return places.filter((p) => p.popular);
}
