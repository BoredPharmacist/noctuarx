import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Coverage from "@/components/Coverage";
import HowWeWork from "@/components/HowWeWork";
import Stats from "@/components/Stats";
import Clinical from "@/components/Clinical";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07080f]">
      <Navbar />
      <Hero />
      <Services />
      <Coverage />
      <HowWeWork />
      <Stats />
      <Clinical />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
