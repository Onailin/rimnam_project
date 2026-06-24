export type Locale = "th" | "en" | "cn";

export type LocalizedText = Record<Locale, string>;

export interface Category {
  id: string;
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  icon: string;
  color: string;
  placeCount: number;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  comment: LocalizedText;
  date: string;
}

export interface Place {
  id: string;
  slug: string;
  name: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  categoryId: string;
  images: string[];
  rating: number;
  reviewCount: number;
  address: LocalizedText;
  phone: string;
  email?: string;
  website?: string;
  openingHours: LocalizedText;
  coordinates: { lat: number; lng: number };
  tags: LocalizedText[];
  featured: boolean;
  popular: boolean;
  reviews: Review[];
}

export interface Event {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  shortDescription: LocalizedText;
  image: string;
  date: string;
  endDate?: string;
  time: string;
  location: LocalizedText;
  category: "festival" | "market" | "cultural" | "workshop";
  featured: boolean;
}

export interface CommunitySection {
  id: string;
  title: LocalizedText;
  content: LocalizedText;
  image?: string;
}

export interface NavItem {
  href: string;
  label: LocalizedText;
}
