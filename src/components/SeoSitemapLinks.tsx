
import React from "react";

export default function SeoSitemapLinks() {
  // This component creates proper internal linking structure for SEO
  return (
    <div className="sr-only">
      <h2>Site Navigation</h2>
      <nav aria-label="Site Map">
        <ul>
          <li><a href="/" aria-label="Home">Home</a></li>
          <li>
            <a href="#services" aria-label="Services">Services</a>
            <ul>
              <li><a href="#services-seo" aria-label="SEO Services">SEO Services</a></li>
              <li><a href="#services-ux" aria-label="UX Design Services">UX Design</a></li>
              <li><a href="#services-cro" aria-label="CRO Services">Conversion Rate Optimization</a></li>
            </ul>
          </li>
          <li><a href="#process" aria-label="Our Process">Our Process</a></li>
          <li><a href="#why-us" aria-label="Why Choose Us">Why Choose Us</a></li>
          <li><a href="#results" aria-label="Client Results">Results</a></li>
          <li><a href="#faq" aria-label="Frequently Asked Questions">FAQ</a></li>
          <li><a href="#cta" aria-label="Contact Us">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
