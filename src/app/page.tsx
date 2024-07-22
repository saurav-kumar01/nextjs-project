import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiase bg-grid-white/[0.02] ">
      <h1 className="text-2xl text-center">Saurav Kumar</h1>
      <HeroSection />
    </main>
  );
}
