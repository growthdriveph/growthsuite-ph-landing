
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ProblemSection from "@/components/ProblemSection";
import ServiceTabs from "@/components/ServiceTabs";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import SeoSitemapLinks from "@/components/SeoSitemapLinks";
import SeoSchemaMarkup from "@/components/SeoSchemaMarkup";
import PredictiveSegmentation from "@/components/PredictiveSegmentation";
import ContentClusters from "@/components/ContentClusters";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollAnimation />
      <Navbar />
      
      {/* SEO Enhancement Components (invisible but important for search engines) */}
      <SeoSitemapLinks />
      <SeoSchemaMarkup />
      <PredictiveSegmentation />
      <ContentClusters />
      
      <main>
        {/* Visible Page Components */}
        <Hero />
        <ClientLogos />
        <ProblemSection />
        <ServiceTabs />
        <BenefitsSection />
        <ProcessSection />
        <AdvantagesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
