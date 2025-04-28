
import React from "react";
import { Search, Settings, Rocket } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <span className="text-primary font-semibold uppercase tracking-wider text-sm">
          The GrowthSuite Solution
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-8">
          Unify Your Strategy. Amplify Your Results.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-16">
          GrowthSuite delivers a truly integrated digital growth engine. We expertly weave together advanced SEO, intuitive UX design, and rigorous CRO, ensuring every click, interaction, and conversion pathway is optimized for maximum impact in the Philippine market.
        </p>
        
        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* SEO */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 hover:-translate-y-1 transition duration-300 fade-in-element">
            <div className="p-4 inline-block bg-primary/10 rounded-full mb-5">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Precision SEO</h3>
            <p className="text-gray-600">
              Dominate search results for high-value keywords, attracting qualified traffic ready to engage.
            </p>
          </div>
          
          {/* UX */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 hover:-translate-y-1 transition duration-300 fade-in-element delay-1">
            <div className="p-4 inline-block bg-primary/10 rounded-full mb-5">
              <Settings className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Frictionless UX</h3>
            <p className="text-gray-600">
              Design intuitive, mobile-first experiences that build trust and effortlessly guide users to conversion.
            </p>
          </div>
          
          {/* CRO */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform hover:scale-105 hover:-translate-y-1 transition duration-300 fade-in-element delay-2">
            <div className="p-4 inline-block bg-primary/10 rounded-full mb-5">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Conversion Science</h3>
            <p className="text-gray-600">
              Apply rigorous testing and data analysis to maximize leads, sales, and overall ROI from your traffic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
