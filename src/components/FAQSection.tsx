
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What level of investment is typically required?",
      answer: "Investment varies based on scope and goals. We provide custom proposals focused on delivering substantial ROI, positioning our services as a strategic growth investment. Let's discuss specifics in your free strategy call."
    },
    {
      question: "How is GrowthSuite truly different from other agencies?",
      answer: "Our core differentiator is genuine integration. We don't operate in silos. Our SEO, UX, and CRO expertise is woven into a single, cohesive strategy optimizing the entire customer journey for superior, sustainable results specific to the Philippine market."
    },
    {
      question: "What's a realistic timeframe to see significant results?",
      answer: "While initial improvements (UX/CRO wins) can appear quickly, foundational growth (especially SEO) builds momentum over time. Expect positive leading indicators within 1-3 months, with significant ROI often materializing in 6-12 months as strategies compound."
    },
    {
      question: "Who is the ideal client for GrowthSuite?",
      answer: "We partner best with ambitious mid-market and enterprise businesses in the Philippines (especially e-commerce, tech, services) who are serious about investing in strategic, data-driven growth and value a transparent, collaborative partnership."
    },
    {
      question: "What's needed from our end to begin?",
      answer: "The first step is the discovery call. If we proceed, we'll need access to relevant analytics/website accounts and open communication with your team for insights, feedback, and approvals to ensure strategies align perfectly with your business."
    }
  ];

  return (
    <section id="faq" className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            We've Got Answers
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Addressing common queries about partnering with GrowthSuite.
          </p>
        </div>
        
        <div className="space-y-5 fade-in-element">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md border border-gray-200 px-6 mb-4 data-[state=open]:border-primary/30">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4 border-t border-gray-100">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
