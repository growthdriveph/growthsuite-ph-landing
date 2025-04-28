
import React from "react";

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Problem Image */}
        <div className="flex justify-center order-1 md:order-2 fade-in-element">
          <img
            src="https://placehold.co/450x380/FBCFE8/DB2777?text=Disconnected+Efforts"
            alt="Visual representing disconnected marketing efforts"
            className="rounded-lg shadow-xl w-full max-w-md transform transition duration-500 hover:rotate-1"
          />
        </div>
        {/* Problem Text */}
        <div className="text-left space-y-6 text-gray-700 order-2 md:order-1 fade-in-element delay-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 leading-snug">
            Is Your Digital Marketing <span className="text-primary">Working Against Itself?</span>
          </h2>
          <p className="text-lg">
            You invest in SEO, run ads, maybe even redesigned your website... but are these efforts truly aligned? Often, siloed strategies lead to wasted budget and missed opportunities. Great SEO traffic hitting a confusing website? Ads leading to poorly converting landing pages? It's a common recipe for frustration.
          </p>
          <p className="text-lg">
            In the competitive Philippine market, a fragmented approach isn't enough. You need a cohesive strategy where every component amplifies the others, driving towards a single goal: <span className="font-semibold">measurable business growth.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
