import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import EquipmentSection from "@/components/EquipmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BeforeAfterGallery />
        <AboutSection />
        <ProcessSection />
        <EquipmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
