
import React from "react";

export default function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image for Problem */}
        <div className="flex justify-center order-1 md:order-1 fade-in-element">
          <img
            src="https://placehold.co/500x420/FEE2E2/DC2626?text=Fragmented+Results"
            alt="Visual representing fragmented marketing results or wasted effort"
            className="rounded-lg shadow-xl w-full max-w-md transform transition duration-500 hover:skew-y-1"
          />
        </div>
        {/* Text Content */}
        <div className="text-left space-y-6 text-gray-700 order-2 md:order-2 fade-in-element delay-1">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            The Common Pitfall
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 leading-snug">
            Why Isolated Tactics Fail Philippine Businesses
          </h2>
          <p className="text-lg">
            Investing in standalone SEO, a website redesign, or occasional CRO tests often yields disappointing results. Without integration, technical SEO fixes might not align with content goals, beautiful UX may lack conversion focus, and CRO tests might run on pages users can't even find.
          </p>
          <p className="text-lg">
            This fragmented approach leads to wasted resources, inconsistent user experiences, and stalled growth – especially in the dynamic Philippine digital landscape where competition demands efficiency and effectiveness.
          </p>
          <p className="text-lg font-semibold text-gray-800">
            It's time to move beyond isolated efforts and embrace a strategy built for holistic performance.
          </p>
          
          {/* Schema markup for SEO */}
          <div className="sr-only" itemScope itemType="https://schema.org/Article">
            <meta itemProp="name" content="Why Isolated Digital Marketing Tactics Fail in the Philippines" />
            <meta itemProp="description" content="Learn why fragmented approaches to SEO, UX, and CRO lead to wasted resources and stalled growth for Philippine businesses." />
          </div>
        </div>
      </div>
    </section>
  );
}
