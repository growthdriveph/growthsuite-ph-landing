
import React from "react";

export default function SeoSchemaMarkup() {
  // This component provides structured data for search engines
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "GrowthSuite",
          "description": "Integrated SEO, UX & CRO agency for Philippine businesses focused on measurable growth and ROI.",
          "url": "https://growthsuite.ph",
          "areaServed": {
            "@type": "Country",
            "name": "Philippines"
          },
          "serviceType": ["SEO Service", "UX Design", "Conversion Rate Optimization"],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Metro Manila",
            "addressRegion": "NCR",
            "addressCountry": "Philippines"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Growth Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Advanced SEO Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "User Experience Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Conversion Rate Optimization"
                }
              }
            ]
          }
        })
      }}
    />
  );
}
