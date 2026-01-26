// import { Briefcase, PenTool, GraduationCap } from "lucide-react"; // Removed as we are using SVGs

type UsageType = "work" | "personal" | "school";

interface UsageOptionCardProps {
  type: UsageType;
  isActive: boolean;
  onClick: () => void;
}

const cardData = {
  work: {
    iconSrc: "/onboarding-icons/briefcase-business.svg",
    title: "For work",
    description: "Track projects, company goals, meeting notes",
  },
  personal: {
    iconSrc: "/onboarding-icons/signature.svg",
    title: "For personal life",
    description: "Write better, think more clearly, stay organised",
  },
  school: {
    iconSrc: "/onboarding-icons/graduation-cap.svg",
    title: "For school",
    description: "Keep notes, research, and tasks in one place",
  },
};

export default function UsageOptionCard({
  type,
  isActive,
  onClick,
}: UsageOptionCardProps) {
  const data = cardData[type];

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
      <div style={{ flexShrink: 0 }}>
        <img src={data.iconSrc} alt={data.title} style={{ width: "68px", height: "68px", opacity: 1 }} />
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
          {data.title}
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
          {data.description}
        </div>
      </div>
    </div>
  );
}
