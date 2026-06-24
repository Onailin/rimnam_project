import { HeroBanner } from "@/components/sections/HeroBanner";
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations";
import { PopularCategories } from "@/components/sections/PopularCategories";
import { EventHighlight } from "@/components/sections/EventHighlight";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <PopularCategories />
      <FeaturedDestinations />
      <EventHighlight />
    </>
  );
}
