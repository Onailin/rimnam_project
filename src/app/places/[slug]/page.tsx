import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { places, getPlaceBySlug } from "@/mock-data/places";
import { PlaceDetailClient } from "./PlaceDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);
  if (!place) return { title: "Not Found" };

  return {
    title: place.name.th,
    description: place.shortDescription.th,
    openGraph: {
      title: place.name.th,
      description: place.shortDescription.th,
      images: [place.images[0]],
    },
  };
}

export default async function PlaceDetailPage({ params }: Props) {
  const { slug } = await params;
  const place = getPlaceBySlug(slug);
  if (!place) notFound();

  return <PlaceDetailClient place={place} />;
}
