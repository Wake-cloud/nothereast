import { Phone, Mail } from "lucide-react";
import logoPath from '../assets/logo.png';

const Footer = () => {
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
    <footer className="bg-card text-foreground border-t border-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logoPath} 
                alt="Northeast Laser Restoration Logo" 
                className="h-16 mr-3"
              />
            </div>
            <p className="mb-6 text-muted-foreground">
              Delivering top-quality laser cleaning and restoration services with precision 
              and eco-friendly practices.
            </p>
            <div className="flex items-center mb-2">
              <Phone className="mr-2 text-primary h-5 w-5" />
              <span className="font-bold">07984 287192</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-primary h-5 w-5" />
              <span className="font-medium">info@northeastlaserrestoration.co.uk</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Industrial Laser Cleaning
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Automotive Restoration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Historical Restoration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Art Restoration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Construction & Renovation
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')} 
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-muted-foreground hover:text-primary transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-muted text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Northeast Laser Restoration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
