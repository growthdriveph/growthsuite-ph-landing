
import React from "react";

export default function ContentClusters() {
  // This component defines related content clusters for SEO
  const contentClusters = [
    {
      pillar: "SEO Strategy",
      topics: ["Technical SEO", "Content SEO", "Local SEO", "E-commerce SEO", "Enterprise SEO"]
    },
    {
      pillar: "UX Design",
      topics: ["Information Architecture", "User Research", "Wireframing", "Mobile-First Design", "Accessibility"]
    },
    {
      pillar: "Conversion Optimization",
      topics: ["A/B Testing", "Funnel Analysis", "Landing Page Optimization", "User Behavior", "Form Optimization"]
    },
    {
      pillar: "Philippine Market",
      topics: ["Filipino Consumer Behavior", "Local Search Trends", "Mobile Usage", "Payment Preferences"]
    }
  ];

  return (
    <div className="hidden">
      {contentClusters.map((cluster, index) => (
        <div key={index} className="content-cluster">
          <h3>{cluster.pillar}</h3>
          <ul>
            {cluster.topics.map((topic, topicIndex) => (
              <li key={topicIndex}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
      
      {/* Topic relationships for search engines */}
      <div itemProp="about" itemScope itemType="https://schema.org/Thing">
        <span itemProp="name">Digital Marketing Strategy</span>
      </div>
    </div>
  );
}
