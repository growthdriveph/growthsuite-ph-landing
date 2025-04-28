import React from "react";
import { GradientIcon } from "@/components/ui/visual-elements/GradientIcon";
import { FloatingElements } from "@/components/ui/visual-elements/FloatingElements";
import { IllustrativeBackground } from "@/components/ui/visual-elements/IllustrativeBackground";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm overflow-hidden">
      <IllustrativeBackground variant="dots" className="opacity-[0.02]" />
      <FloatingElements density="low" className="opacity-20" />
      
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <GradientIcon variant="primary" className="w-8 h-8" />
          <a href="/" className="text-lg font-semibold text-gray-800">
            GrowthSuite
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-7">
          <a href="#problem" className="text-gray-600 hover:text-primary font-medium transition duration-300 relative group">
            Problem
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#services" className="text-gray-600 hover:text-primary font-medium transition duration-300 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-primary font-medium transition duration-300 relative group">
            Benefits
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-primary font-medium transition duration-300 relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#why-us" className="text-gray-600 hover:text-primary font-medium transition duration-300 relative group">
            Why Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#results" className="text-gray-600 hover:text-primary font-medium transition duration-300 relative group">
            Results
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#cta"
          className="hidden md:inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-7 rounded-lg transition duration-300 ease-in-out text-sm shadow-md hover:shadow-lg"
        >
          Book a Call
        </a>
      </nav>
    </header>
  );
}
