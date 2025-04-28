
import React from "react";

export default function ClientLogos() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 font-semibold uppercase text-sm tracking-wider mb-6">
          Trusted by Leading Philippine Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {/* Client Logos */}
          <img
            src="https://placehold.co/120x40/cccccc/999999?text=Client+Logo+1"
            alt="Client Logo 1"
            className="h-8 opacity-60 hover:opacity-100 transition duration-300"
          />
          <img
            src="https://placehold.co/120x40/cccccc/999999?text=Client+Logo+2"
            alt="Client Logo 2"
            className="h-8 opacity-60 hover:opacity-100 transition duration-300"
          />
          <img
            src="https://placehold.co/120x40/cccccc/999999?text=Client+Logo+3"
            alt="Client Logo 3"
            className="h-8 opacity-60 hover:opacity-100 transition duration-300"
          />
          <img
            src="https://placehold.co/120x40/cccccc/999999?text=Client+Logo+4"
            alt="Client Logo 4"
            className="h-8 opacity-60 hover:opacity-100 transition duration-300"
          />
          <img
            src="https://placehold.co/120x40/cccccc/999999?text=Client+Logo+5"
            alt="Client Logo 5"
            className="h-8 opacity-60 hover:opacity-100 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
