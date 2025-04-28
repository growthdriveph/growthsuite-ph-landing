
import React from "react";
import { GradientIcon } from "./GradientIcon";

interface StatCardProps {
  title: string;
  value: string;
  trend?: "up" | "down";
  icon?: React.ReactNode;
}

export function StatCard({ title, value, trend, icon }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4">
        {icon && (
          <div className="shrink-0">
            <GradientIcon variant="primary" className="w-12 h-12">
              {icon}
            </GradientIcon>
          </div>
        )}
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h4 className="text-2xl font-semibold mt-1">{value}</h4>
        </div>
      </div>
      {trend && (
        <div className={`absolute top-2 right-2 text-sm ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
          {trend === "up" ? "↑" : "↓"} 
        </div>
      )}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full" />
    </div>
  );
}
