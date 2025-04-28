
import React from "react";
import { 
  Filter, 
  TrendingUp, 
  BarChart2, 
  Lightbulb, 
  Shield, 
  Clock 
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Filter,
      title: "Higher Quality Lead Flow",
      description: "Fill your pipeline with prospects more likely to convert."
    },
    {
      icon: TrendingUp,
      title: "Increased Sales Velocity",
      description: "Optimize the path to purchase, turning more visitors into revenue."
    },
    {
      icon: BarChart2,
      title: "Demonstrable ROI",
      description: "Clearly see how your digital investment translates into profit."
    },
    {
      icon: Lightbulb,
      title: "Strategic Clarity",
      description: "Gain actionable insights to make smarter, data-informed decisions."
    },
    {
      icon: Shield,
      title: "Competitive Advantage",
      description: "Build a resilient online presence that outpaces competitors."
    },
    {
      icon: Clock,
      title: "Reclaimed Focus",
      description: "Free up your time to lead your business, knowing your digital growth is expertly handled."
    }
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Your Growth Outcomes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            From Activity to Achievement
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Partnering with GrowthSuite means focusing on tangible business results, not just marketing metrics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="flex items-start space-x-5 p-6 bg-gray-50 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition duration-300 fade-in-element"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <benefit.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
