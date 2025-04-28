
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-secondary via-white to-accent py-24 md:py-36 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="md:w-3/5 text-center md:text-left mb-14 md:mb-0 fade-in-element">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Integrated Growth for PH Businesses
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Stop Guessing. <span className="text-primary">Start Growing.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto md:mx-0">
            Unlock predictable, measurable results with GrowthSuite's unified SEO, UX & CRO strategies – designed for ambitious Philippine businesses ready to lead online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#cta"
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Book Your Free Strategy Call
            </a>
            <a
              href="#how-it-works"
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out text-lg shadow border border-gray-200 hover:shadow-md transform hover:-translate-y-0.5"
            >
              See Our Process
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-2/5 flex justify-center md:justify-end fade-in-element delay-1">
          <img
            src="https://placehold.co/550x500/EC4899/FFFFFF?text=Integrated+Growth+Dashboard"
            alt="Illustration showing integrated digital growth dashboard"
            className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg object-cover transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
