
import React from "react";
import { MessageSquare } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "GrowthSuite's integrated strategy was a game-changer. We finally saw how SEO, UX, and CRO work together. Our online sales increased by 150% in just 6 months!",
      name: "Juana Dela Cruz",
      title: "CEO, PH E-commerce Brand",
      avatar: "https://placehold.co/50x50/E9D5FF/A855F7?text=JD"
    },
    {
      quote: "The transparency and focus on measurable ROI set GrowthSuite apart. They understand the Philippine market deeply and deliver results, not just reports.",
      name: "Ricardo Santos",
      title: "Marketing Head, Tech Solutions Inc.",
      avatar: "https://placehold.co/50x50/BBF7D0/16A34A?text=RS"
    },
    {
      quote: "After disappointing experiences elsewhere, GrowthSuite restored our faith. Their integrated approach doubled our qualified organic leads and improved our site experience significantly.",
      name: "Maria Lim",
      title: "Founder, Professional Services Co.",
      avatar: "https://placehold.co/50x50/BAE6FD/0284C7?text=ML"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Real Results for Businesses Like Yours
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-gray-700/60 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-600 fade-in-element transform hover:scale-105 transition duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <MessageSquare className="h-8 w-8 text-primary/80 mb-4" />
              <p className="text-gray-300 italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-auto pt-4 border-t border-gray-600">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} avatar`} 
                  className="w-12 h-12 rounded-full mr-4 border-2 border-primary/60"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
