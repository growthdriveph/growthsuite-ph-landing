
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <a href="#" className="text-2xl font-extrabold text-gray-900 hover:opacity-80 transition duration-300">
            Growth<span className="text-primary">Suite</span>
          </a>
        </div>
        <div>
          <a 
            href="#cta" 
            className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-6 rounded-lg transition duration-300 ease-in-out shadow hover:shadow-lg transform hover:-translate-y-0.5 text-sm md:text-base"
          >
            Get Free Strategy Call
          </a>
        </div>
      </nav>
    </header>
  );
}
