import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import UsageOptionCard from "../../components/onboarding/UsageOptionCard";

type CollaborationMode = "with-others" | "on-my-own";

const Collaboration = () => {
    const navigate = useNavigate();
    const [selectedMode, setSelectedMode] = useState<CollaborationMode | null>(null);

    // Load saved preference on mount
    useEffect(() => {
        const saved = localStorage.getItem("continuum_collaboration_mode") as CollaborationMode | null;
        if (saved && ["with-others", "on-my-own"].includes(saved)) {
            setSelectedMode(saved);
        }
    }, []);

    const handleCardClick = (mode: CollaborationMode) => {
        setSelectedMode(mode);
        localStorage.setItem("continuum_collaboration_mode", mode);
        // Navigate to next step or dashboard (placeholder)
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
                        title="With others"
                        description="Tba"
                        icon={<img src="/onboarding-icons/users-round.svg" alt="With others" style={{ width: "68px", height: "68px" }} />}
                        isActive={selectedMode === "with-others"}
                        onClick={() => handleCardClick("with-others")}
                    />
                    <UsageOptionCard
                        title="On my own"
                        description="Tba"
                        icon={<img src="/onboarding-icons/user-round.svg" alt="On my own" style={{ width: "68px", height: "68px" }} />}
                        isActive={selectedMode === "on-my-own"}
                        onClick={() => handleCardClick("on-my-own")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Collaboration;
