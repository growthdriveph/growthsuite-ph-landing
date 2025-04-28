
import React from "react";
import { 
  GitMerge, 
  MapPin, 
  BarChart, 
  Eye, 
  Award, 
  Users 
} from "lucide-react";

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: GitMerge,
      title: "True Integration",
      description: "Our unified SEO+UX+CRO model unlocks growth synergies others miss."
    },
    {
      icon: MapPin,
      title: "Local Market Mastery",
      description: "Deep PH insights ensure strategies resonate and outperform."
    },
    {
      icon: BarChart,
      title: "Data-Driven Decisions",
      description: "Every action backed by data, focused solely on measurable ROI."
    },
    {
      icon: Eye,
      title: "Radical Transparency",
      description: "Clear communication and honest reporting. No black boxes."
    },
    {
      icon: Award,
      title: "Performance Focused",
      description: "Obsessed with turning your digital presence into a growth engine."
    },
    {
      icon: Users,
      title: "Dedicated Partnership",
      description: "We act as an extension of your team, invested in your success."
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            The GrowthSuite Advantage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Engineered for Philippine Success
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            We're not just another agency. We're your dedicated growth partner, built differently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {advantages.map((advantage, index) => (
            <div 
              key={advantage.title}
              className="text-center p-8 border border-gray-100 rounded-lg shadow-lg bg-gradient-to-br from-gray-50 to-white hover:shadow-primary/10 transition duration-300 fade-in-element"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <advantage.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
