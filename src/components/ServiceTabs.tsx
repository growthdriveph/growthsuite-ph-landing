
import React, { useState } from "react";
import { Search, Layers, Rocket } from "lucide-react";

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState<string>("seo");

  // Define service data objects for better content clustering and organization
  const services = {
    seo: [
      {
        title: "Advanced Technical SEO",
        description: "Site audits, speed optimization, crawlability, indexation fixes, structured data, migrations."
      },
      {
        title: "Strategic Content SEO",
        description: "Keyword research, topic clustering, content optimization, gap analysis, performance tracking."
      },
      {
        title: "E-commerce SEO",
        description: "Product/category page optimization, faceted navigation handling, platform-specific strategies (Shopify, Lazada, Shopee)."
      },
      {
        title: "Local SEO (Manila & PH)",
        description: "Google Business Profile optimization, local citations, review management, geo-targeting."
      },
      {
        title: "Enterprise SEO",
        description: "Scalable strategies for large sites, complex architectures, international SEO, log file analysis."
      },
      {
        title: "Comprehensive SEO Audits",
        description: "In-depth technical, content, and off-page analysis for sellers & brands."
      }
    ],
    uxia: [
      {
        title: "Information Architecture (IA)",
        description: "Logical site structuring, navigation design, sitemaps, user flow optimization for findability."
      },
      {
        title: "User Experience (UX) Audits",
        description: "Heuristic evaluations, competitor analysis, identifying friction points and usability issues."
      },
      {
        title: "User Research & Testing",
        description: "User interviews, surveys, persona development, moderated/unmoderated usability testing."
      },
      {
        title: "Wireframing & Prototyping",
        description: "Visualizing structure and user flows, creating interactive prototypes for testing and validation."
      },
      {
        title: "Mobile-First Design Strategy",
        description: "Ensuring seamless and effective experiences across all devices, prioritizing mobile users."
      },
      {
        title: "Accessibility Compliance",
        description: "Designing inclusive experiences adhering to WCAG standards."
      }
    ],
    cro: [
      {
        title: "A/B & Multivariate Testing",
        description: "Rigorous experimentation to validate hypotheses and optimize elements for conversion."
      },
      {
        title: "Conversion Funnel Analysis",
        description: "Identifying drop-off points and optimizing the user journey from entry to conversion."
      },
      {
        title: "Landing Page Optimization",
        description: "Designing and testing high-converting landing pages for specific campaigns and traffic sources."
      },
      {
        title: "User Behavior Analysis",
        description: "Utilizing heatmaps, scroll maps, session recordings to understand user interaction."
      },
      {
        title: "Form Optimization",
        description: "Improving form design and flow to reduce friction and increase completion rates."
      },
      {
        title: "Personalization Strategy",
        description: "Developing strategies to tailor experiences based on user segments or behavior."
      }
    ]
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-element">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Integrated Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Comprehensive Growth Solutions
          </h2>
          <p className="text-lg text-gray-700 mt-5">
            We offer a full suite of integrated services, ensuring every aspect of your digital presence works in harmony to drive results.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-5xl mx-auto fade-in-element delay-1">
          <div className="flex justify-center space-x-2 md:space-x-4 mb-10 border-b border-gray-200 pb-3">
            <button
              onClick={() => setActiveTab("seo")}
              className={`text-sm md:text-base font-semibold py-2.5 px-5 md:px-8 rounded-lg text-gray-600 transition-all ${
                activeTab === "seo" ? "bg-primary text-white shadow-md" : "hover:bg-primary/10"
              }`}
            >
              <Search className="inline-block mr-1 align-middle h-5 w-5" /> SEO Mastery
            </button>
            <button
              onClick={() => setActiveTab("uxia")}
              className={`text-sm md:text-base font-semibold py-2.5 px-5 md:px-8 rounded-lg text-gray-600 transition-all ${
                activeTab === "uxia" ? "bg-primary text-white shadow-md" : "hover:bg-primary/10"
              }`}
            >
              <Layers className="inline-block mr-1 align-middle h-5 w-5" /> UX & IA Design
            </button>
            <button
              onClick={() => setActiveTab("cro")}
              className={`text-sm md:text-base font-semibold py-2.5 px-5 md:px-8 rounded-lg text-gray-600 transition-all ${
                activeTab === "cro" ? "bg-primary text-white shadow-md" : "hover:bg-primary/10"
              }`}
            >
              <Rocket className="inline-block mr-1 align-middle h-5 w-5" /> CRO & Optimization
            </button>
          </div>

          {/* Tab Content with animation */}
          <div className="transition-all duration-500">
            {/* SEO Services Tab */}
            {activeTab === "seo" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-element">
                {services.seo.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-semibold text-lg mb-2 text-primary">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* UX & IA Tab */}
            {activeTab === "uxia" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-element">
                {services.uxia.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-semibold text-lg mb-2 text-primary">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* CRO Tab */}
            {activeTab === "cro" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-element">
                {services.cro.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-semibold text-lg mb-2 text-primary">{service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Microdata for SEO */}
          <div itemScope itemType="https://schema.org/Service" className="sr-only">
            <h3 itemProp="name">Digital Growth Services</h3>
            <span itemProp="serviceType">SEO, UX, CRO</span>
            <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">GrowthSuite</span>
            </div>
            <div itemProp="areaServed" itemScope itemType="https://schema.org/Country">
              <span itemProp="name">Philippines</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
