import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import UsageOptionCard from "../../components/onboarding/UsageOptionCard";

type UsageMode = "work" | "personal" | "school";

const Usage = () => {
  const navigate = useNavigate();
  const [selectedUsage, setSelectedUsage] = useState<UsageMode | null>(null);

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("continuum_usage_mode") as UsageMode | null;
    if (saved && ["work", "personal", "school"].includes(saved)) {
      setSelectedUsage(saved);
    }
  }, []);

  const handleCardClick = (mode: UsageMode) => {
    setSelectedUsage(mode);
    localStorage.setItem("continuum_usage_mode", mode);
    // Navigate to dashboard after selection (placeholder)
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #B2E6F7 -17.26%, #FFFFFF 17.31%)",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      {/* Top-left Brand with Back Arrow */}
      <div className="w-full px-12 mb-12">
        <button
          onClick={handleBack}
          className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          style={{ marginLeft: "0" }}
        >
          <ChevronLeft size={20} style={{ color: "#252014" }} />
          <span
            style={{
              fontFamily: "Sarina",
              fontWeight: 400,
              fontSize: "20.89px",
              lineHeight: "23.42px",
              letterSpacing: "-0.02em",
              color: "#252014",
              textAlign: "center",
            }}
          >
            Continuum
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-12">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center gap-4">
          <h1
            style={{
              fontFamily: "Satoshi",
              fontWeight: 700,
              fontSize: "28px",
              lineHeight: "100%",
              letterSpacing: "-0.02em",
              color: "#0B191F",
              textAlign: "center",
            }}
          >
            How do you want to use Continuum?
          </h1>
          <p
            style={{
              fontFamily: "Satoshi",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-0.02em",
              color: "#727D83",
              textAlign: "center",
            }}
          >
            This helps customise your experience
          </p>
        </div>

        {/* Option Cards */}
        <div className="flex flex-col items-center gap-6">
          <UsageOptionCard
            title="For work"
            description="Track projects, company goals, meeting notes"
            icon={<img src="/onboarding-icons/briefcase-business.svg" alt="For work" style={{ width: "68px", height: "68px" }} />}
            isActive={selectedUsage === "work"}
            onClick={() => handleCardClick("work")}
          />
          <UsageOptionCard
            title="For personal life"
            description="Write better, think more clearly, stay organised"
            icon={<img src="/onboarding-icons/signature.svg" alt="For personal life" style={{ width: "68px", height: "68px" }} />}
            isActive={selectedUsage === "personal"}
            onClick={() => handleCardClick("personal")}
          />
          <UsageOptionCard
            title="For school"
            description="Keep notes, research, and tasks in one place"
            icon={<img src="/onboarding-icons/graduation-cap.svg" alt="For school" style={{ width: "68px", height: "68px" }} />}
            isActive={selectedUsage === "school"}
            onClick={() => handleCardClick("school")}
          />
        </div>
      </div>
    </div>
  );
};

export default Usage;
