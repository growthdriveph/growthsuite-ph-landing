
import React from "react";
import { cn } from "@/lib/utils";

interface GradientIconProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "accent"
}

export function GradientIcon({ className, variant = "primary", ...props }: GradientIconProps) {
  return (
    <div
      className={cn(
        "relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden",
        variant === "primary" && "bg-gradient-to-br from-primary/20 to-primary/10",
        variant === "secondary" && "bg-gradient-to-br from-secondary/20 to-secondary/10",
        variant === "accent" && "bg-gradient-to-br from-accent/20 to-accent/10",
        "before:absolute before:inset-0 before:border before:border-primary/20 before:rounded-xl",
        "after:absolute after:inset-[2px] after:bg-gradient-to-br after:from-white/80 after:to-white/20 after:rounded-[10px]",
        className
      )}
      {...props}
    />
  );
}
