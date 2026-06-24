import type { LocalizedText } from "@/types";

export const footerMock = {
  newsletter: {
    title: {
      th: "รับข่าวสารจากชุมชน",
      en: "Stay in the loop",
      cn: "订阅社区资讯",
    } as LocalizedText,
    subtitle: {
      th: "อัปเดตกิจกรรม เทศกาล และสถานที่ใหม่ทุกเดือน",
      en: "Monthly updates on events, festivals & new places",
      cn: "每月更新活动、节庆与新景点",
    } as LocalizedText,
    placeholder: {
      th: "อีเมลของคุณ",
      en: "Your email address",
      cn: "您的邮箱",
    } as LocalizedText,
    button: {
      th: "สมัครรับข่าว",
      en: "Subscribe",
      cn: "订阅",
    } as LocalizedText,
  },
  contact: {
    address: {
      th: "ชุมชนริมน้ำจันทบูร ตำบลวัดใหม่ อำเภอเมืองจันทบุรี จังหวัดจันทบุรี 22000",
      en: "Rim Nam Community, Wat Mai, Mueang Chanthaburi 22000",
      cn: "尖竹汶府挽迈区河畔社区 22000",
    } as LocalizedText,
    phone: "039-111-222",
    email: "info@rimnamchanthaburi.go.th",
    hours: {
      th: "จันทร์–ศุกร์ 08:30–17:00 น.",
      en: "Mon–Fri 8:30 AM – 5:00 PM",
      cn: "周一至周五 08:30–17:00",
    } as LocalizedText,
  },
  legal: [
    {
      href: "#",
      label: { th: "นโยบายความเป็นส่วนตัว", en: "Privacy Policy", cn: "隐私政策" },
    },
    {
      href: "#",
      label: { th: "เงื่อนไขการใช้งาน", en: "Terms of Use", cn: "使用条款" },
    },
    {
      href: "#",
      label: { th: "นโยบายคุกกี้", en: "Cookie Policy", cn: "Cookie 政策" },
    },
  ],
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Line", href: "#" },
    { label: "YouTube", href: "#" },
  ],
  partners: {
    title: {
      th: "หน่วยงานสนับสนุน",
      en: "Supported by",
      cn: "支持单位",
    } as LocalizedText,
    items: ["ททท.", "อบจ.จันทบุรี", "เทศบาลเมือง", "ชุมชนท้องถิ่น"],
  },
};
