
import React from "react";
import { Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Logo & Info */}
          <div className="md:col-span-2">
            <a 
              href="#" 
              className="text-2xl font-extrabold text-white hover:opacity-80 transition duration-300 inline-block mb-4"
            >
              Growth<span className="text-primary/90">Suite</span>
            </a>
            <p className="text-sm mb-4 max-w-md mx-auto md:mx-0">
              Your partner for integrated digital growth, specializing in SEO, UX, and CRO for the Philippine market.
            </p>
            <p className="text-xs">
              &copy; {new Date().getFullYear()} GrowthSuite. All rights reserved.<br />
              Metro Manila, Philippines.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#benefits" className="hover:text-white hover:underline">Benefits</a></li>
              <li><a href="#how-it-works" className="hover:text-white hover:underline">Our Process</a></li>
              <li><a href="#why-us" className="hover:text-white hover:underline">Why Us</a></li>
              <li><a href="#faq" className="hover:text-white hover:underline">FAQs</a></li>
              <li><a href="#cta" className="hover:text-white hover:underline">Get Started</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-wider">
              Connect
            </h4>
            <div className="flex justify-center md:justify-start space-x-5 mb-4">
              <a 
                href="#" 
                aria-label="Facebook" 
                className="hover:text-primary transition duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn" 
                className="hover:text-primary transition duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="text-sm">
              <a href="#" className="hover:text-white hover:underline">Privacy Policy</a> |{" "}
              <a href="#" className="hover:text-white hover:underline">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
