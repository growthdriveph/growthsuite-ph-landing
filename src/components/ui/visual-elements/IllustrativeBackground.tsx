
import React from "react";
import { cn } from "@/lib/utils";

interface IllustrativeBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "grid" | "dots" | "waves"
}

export function IllustrativeBackground({ className, variant = "grid", ...props }: IllustrativeBackgroundProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 opacity-[0.015]",
        variant === "grid" && "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvZz48L3N2Zz4=')]",
        variant === "dots" && "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=')]",
        variant === "waves" && "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBjMC0xNi41NyAxMy40My0zMCAzMC0zMHYzMGgtMzB6IiBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPjwvc3ZnPg==')]",
        className
      )}
      {...props}
    />
  );
}
