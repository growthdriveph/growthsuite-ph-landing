
import React from "react";
import { Rocket } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="bg-gradient-to-r from-primary to-primary/80 text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center fade-in-element">
        <Rocket className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Ready to Ignite Your Growth?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
          Stop settling for fragmented marketing and start achieving predictable, profitable growth. Schedule your complimentary strategy session with GrowthSuite today. Let's discuss your goals and map out your path to digital success in the Philippines.
        </p>
        <a 
          href="#"
          className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-12 rounded-lg transition duration-300 ease-in-out text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1.5 inline-block"
        >
          Claim Your Free Strategy Call
        </a>
        <p className="text-sm text-primary-foreground/70 mt-8">
          (Zero obligation. Purely valuable insights for your business.)
        </p>
      </div>
    </section>
  );
}
