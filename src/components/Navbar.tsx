
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="#" className="text-2xl font-extrabold text-gray-900 hover:opacity-80 transition duration-300" aria-label="GrowthSuite - Home">
            Growth<span className="text-primary">Suite</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-7">
          <a href="#services" className="text-gray-600 hover:text-primary font-medium transition duration-300">Services</a>
          <a href="#process" className="text-gray-600 hover:text-primary font-medium transition duration-300">Process</a>
          <a href="#why-us" className="text-gray-600 hover:text-primary font-medium transition duration-300">Why Us</a>
          <a href="#results" className="text-gray-600 hover:text-primary font-medium transition duration-300">Results</a>
        </div>
        
        {/* CTA Button */}
        <div>
          <a 
            href="#cta" 
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-6 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base"
          >
            Get Free Strategy Call
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-primary focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="bg-white border-t border-gray-100 py-3">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            <a href="#services" className="text-gray-700 hover:text-primary font-medium py-2 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#process" className="text-gray-700 hover:text-primary font-medium py-2 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Process</a>
            <a href="#why-us" className="text-gray-700 hover:text-primary font-medium py-2 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
            <a href="#results" className="text-gray-700 hover:text-primary font-medium py-2 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Results</a>
            <a href="#faq" className="text-gray-700 hover:text-primary font-medium py-2 transition duration-300" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <a href="#cta" className="bg-primary/10 text-primary font-medium py-3 px-4 rounded-lg text-center hover:bg-primary/20 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Get Free Strategy Call</a>
          </div>
        </div>
      </div>
    </header>
  );
}
