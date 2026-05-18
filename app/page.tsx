import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import IslandsGrid from "@/components/home/IslandsGrid";
import TopTours from "@/components/home/TopTours";
import WhyUs from "@/components/home/WhyUs";
import Reviews from "@/components/home/Reviews";
import CtaSection from "@/components/home/CtaSection";
import { getFeaturedTours, getAllIslands, getAllTours } from "@/lib/content";

export default function HomePage() {
  const featuredTours = getFeaturedTours();
  const islands = getAllIslands();
  const allTours = getAllTours();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IslandsGrid islands={islands} allTours={allTours} />
        <TopTours tours={featuredTours} />
        <WhyUs />
        <Reviews />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
