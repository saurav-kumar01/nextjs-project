import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiase bg-grid-white/[0.02] ">
      <h1 className="text-2xl text-center">Saurav Kumar</h1>
      <HeroSection />
      <FeaturedCourse />
      <WhyChooseUs />
      <MusicSchoolTestimonialCards />
    </main>
  );
}
