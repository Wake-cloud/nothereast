import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from '../assets/logo.png';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative bg-background text-foreground py-20">
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <img 
              src={logoPath} 
              alt="Northeast Laser Restoration Logo" 
              className="w-3/4 max-w-md"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Precision Laser Cleaning & Restoration Services
            </h1>
            <p className="text-lg mb-8 text-muted-foreground">
              Utilizing advanced laser technology to deliver top-quality cleaning and restoration 
              solutions for diverse industries, ensuring precision and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg text-center transition"
              >
                Get a Free Consultation
              </Button>
              <Button 
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="border-primary hover:bg-primary/10 text-secondary font-bold py-3 px-6 rounded-lg text-center transition"
              >
                Our Services
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <Phone className="mr-2 text-primary" />
              <span className="font-bold text-xl text-secondary">07984 287192</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
