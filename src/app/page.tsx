import FeaturedCourse from "@/components/FeaturedCourse";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiase bg-grid-white/[0.02] ">
      <h1 className="text-2xl text-center">Saurav Kumar</h1>
      <HeroSection />
      <FeaturedCourse />
      <WhyChooseUs />
      <MusicSchoolTestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
