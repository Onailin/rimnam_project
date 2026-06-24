export const brandColors = {
  surface: "#FAFAF8",
  surfaceAlt: "#FFFFFF",
  blush: "#F3F3F0",
  textPrimary: "#2C2C2C",
  textMuted: "#6B6B6B",
  textSoft: "#9A9A9A",
  accent: "#3A3A3A",
  accentDark: "#1F1F1F",
  border: "#E8E8E4",
  gold: "#3A3A3A",
} as const;

export const colors = {
  cream: brandColors.surfaceAlt,
  creamDark: brandColors.blush,
  white: "#FFFFFF",
  wood: brandColors.accent,
  woodLight: brandColors.textMuted,
  woodDark: brandColors.textPrimary,
  gold: brandColors.gold,
  goldLight: brandColors.blush,
  river: brandColors.accent,
  riverLight: brandColors.border,
  riverDark: brandColors.accentDark,
} as const;

export const siteConfig = {
  name: {
    th: "ริมน้ำจันทบูร",
    en: "Rim Nam Chanthaburi",
    cn: "尖竹汶河畔社区",
  },
  tagline: {
    th: "ชุมชนท่องเที่ยวริมแม่น้ำ",
    en: "Riverside Tourism Community",
    cn: "河畔旅游社区",
  },
  description: {
    th: "แพลตฟอร์มแนะนำสถานที่ท่องเที่ยวชุมชนริมน้ำจันทบูร จังหวัดจันทบุรี",
    en: "Tourism platform for Rim Nam Chanthaburi community, Chanthaburi Province",
    cn: "尖竹汶府河畔社区旅游推荐平台",
  },
} as const;
