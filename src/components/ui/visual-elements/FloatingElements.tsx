
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingElementsProps extends React.HTMLAttributes<HTMLDivElement> {
  density?: "low" | "medium" | "high"
}

export function FloatingElements({ className, density = "medium", ...props }: FloatingElementsProps) {
  const elements = density === "low" ? 3 : density === "medium" ? 6 : 9;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} {...props}>
      {[...Array(elements)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5"
          initial={{ x: "100%", y: "100%" }}
          animate={{
            x: ["100%", "0%", "-100%"],
            y: ["100%", "50%", "0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
          style={{
            left: `${(i * 30) % 100}%`,
            top: `${(i * 20) % 100}%`,
          }}
        />
      ))}
    </div>
  );
}
