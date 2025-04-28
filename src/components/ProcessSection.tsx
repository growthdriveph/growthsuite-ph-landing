
import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: "Deep Dive Discovery",
      description: "Collaborative sessions to fully understand your business, goals, audience, and unique position in the Philippine market."
    },
    {
      number: 2,
      title: "Data-Driven Strategy",
      description: "Comprehensive audits and analysis inform a bespoke, integrated roadmap targeting your biggest growth levers."
    },
    {
      number: 3,
      title: "Synergistic Implementation",
      description: "Our expert teams execute the plan cohesively, optimizing SEO, UX, and CRO in tandem for maximum effect."
    },
    {
      number: 4,
      title: "Iterative Optimization",
      description: "Continuous monitoring, A/B testing, and data analysis ensure we constantly refine tactics for peak performance."
    },
    {
      number: 5,
      title: "Transparent Partnership",
      description: "Regular, clear reporting focused on business KPIs, fostering a true partnership built on trust and results."
    }
  ];

  return (
    <section id="how-it-works" className="bg-gray-100 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Your Collaborative Path to Success
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            We follow a proven, transparent framework designed for maximum impact and clear communication.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div 
            className="absolute left-5 md:left-1/2 top-0 h-full w-1 bg-primary/20 transform -translate-x-1/2 hidden md:block" 
            aria-hidden="true"
          ></div>

          {/* Process Steps */}
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="fade-in-element md:flex md:items-center md:space-x-10 relative mb-10 last:mb-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-0 z-10 mx-auto md:mx-0 shadow-lg">
                {step.number}
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md flex-grow border border-gray-200 md:ml-10 transition duration-300 hover:shadow-xl">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
