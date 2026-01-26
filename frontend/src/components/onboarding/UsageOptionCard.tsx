import type { ReactNode } from "react";

interface UsageOptionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

export default function UsageOptionCard({
  title,
  description,
  icon,
  isActive,
  onClick,
}: UsageOptionCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick();
        }
      }}
      style={{
        width: "511px",
        height: "140px",
        borderRadius: "16px",
        padding: "36px",
        border: isActive ? "1.5px solid #0B191F" : "1px solid #D3D7DA",
        backgroundColor: "white",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "76.3px",
        opacity: 1,
      }}
    >
      {/* Icon */}
      <div style={{ flexShrink: 0, width: "68px", height: "68px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {icon}
      </div>

      {/* Text Block */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {/* Title */}
        <div
          style={{
            fontFamily: "Satoshi",
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: isActive ? "#0B191F" : "#727D83",
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontFamily: "Satoshi",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#727D83",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
}
