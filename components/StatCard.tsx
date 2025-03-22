import React from "react";

interface StatCardProps {
  value: string;
  description: string;
  isGreen?: boolean;
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  width: string;
}

export default function StatCard({ value, description, isGreen = false, position, width }: StatCardProps) {
  return (
    <div
      className={`stat-card absolute ${isGreen ? "green" : ""}`}
      style={{
        top: position.top,
        right: position.right,
        bottom: position.bottom,
        left: position.left,
        width: width,
        zIndex: 10,
      }}
    >
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm font-medium">{description}</div>
    </div>
  );
}