
import React from "react";
import { GradientIcon } from "./GradientIcon";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Floating Elements */}
      <div className="absolute top-10 right-10">
        <GradientIcon variant="primary" className="w-16 h-16 animate-float" />
      </div>
      <div className="absolute bottom-20 left-10">
        <GradientIcon variant="secondary" className="w-12 h-12 animate-float-delayed" />
      </div>
      
      {/* Dashboard Preview */}
      <div className="absolute inset-4 rounded-lg shadow-2xl bg-white/95 backdrop-blur">
        <div className="p-4 border-b">
          <div className="h-2 w-20 bg-primary/20 rounded" />
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">
          {Array.from({length: 4}).map((_, i) => (
            <div key={i} className="h-24 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/5 animate-pulse" />
          ))}
        </div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute top-1/2 -right-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 left-1/2 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
    </div>
  );
}
