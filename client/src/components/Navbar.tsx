import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import logoPath from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`sticky top-0 z-50 bg-background ${scrolled ? 'shadow-md shadow-primary/20' : ''} transition-shadow duration-300`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src={logoPath} 
              alt="Northeast Laser Restoration Logo" 
              className="h-16 mr-3"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-secondary hover:text-primary transition">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-secondary hover:text-primary transition">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-secondary hover:text-primary transition">Gallery</button>
            <button onClick={() => scrollToSection('about')} className="text-secondary hover:text-primary transition">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-secondary hover:text-primary transition">Contact</button>
          </nav>
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-secondary hover:text-primary transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}>
          <nav className="flex flex-col space-y-3">
            <button onClick={() => scrollToSection('home')} className="text-secondary hover:text-primary transition">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-secondary hover:text-primary transition">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-secondary hover:text-primary transition">Gallery</button>
            <button onClick={() => scrollToSection('about')} className="text-secondary hover:text-primary transition">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-secondary hover:text-primary transition">Contact</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
