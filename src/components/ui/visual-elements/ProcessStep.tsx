
import React from "react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
      
      {/* Content */}
      <div className="relative flex gap-6 items-start">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center font-bold text-lg shadow-lg">
          {number}
        </div>
        <div className="flex-grow pt-2">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
