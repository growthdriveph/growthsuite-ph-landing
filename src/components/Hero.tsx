
import React from "react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-secondary via-white to-accent py-28 md:py-36 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="md:w-3/5 text-center md:text-left mb-14 md:mb-0 fade-in-element">
          <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-5">
            Advanced SEO, UX & CRO Integration
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-7 leading-tight">
            Drive <span className="text-primary">Measurable Growth</span> in the Philippines.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto md:mx-0">
            Stop chasing vanity metrics. GrowthSuite delivers holistic digital strategies—from technical SEO audits to conversion science—engineered for ambitious businesses ready to achieve sustainable ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#cta"
              className="bg-primary hover:bg-primary/90 text-white font-semibold py-3.5 px-9 rounded-lg transition duration-300 ease-in-out text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              Book Your Free Growth Audit
              <ChevronRight className="ml-1 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-9 rounded-lg transition duration-300 ease-in-out text-lg shadow border border-gray-200 hover:shadow-md transform hover:-translate-y-0.5"
            >
              Explore Our Services
            </a>
          </div>
          
          {/* Structured data markers for SEO */}
          <div className="sr-only">
            <span itemProp="name">GrowthSuite</span>
            <span itemProp="description">Advanced SEO, UX & CRO Agency in the Philippines</span>
            <span itemProp="serviceType">Digital Marketing</span>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-2/5 flex justify-center md:justify-end fade-in-element delay-1">
          <img
            src="https://placehold.co/600x550/FBCFE8/DB2777?text=Integrated+Performance+Visual"
            alt="Abstract visual representing integrated digital performance and growth"
            className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg object-cover transform transition duration-500 hover:scale-105 hover:rotate-[-1deg]"
          />
        </div>
      </div>

      {/* SEO Breadcrumbs */}
      <div className="container mx-auto px-6 mt-8">
        <nav aria-label="Breadcrumb" className="sr-only">
          <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a itemProp="item" href="/"><span itemProp="name">Home</span></a>
              <meta itemProp="position" content="1" />
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
