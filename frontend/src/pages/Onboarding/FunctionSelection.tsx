import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Check } from "lucide-react";

const functions = [
    "Administrative assistance",
    "Communications",
    "Customer experience",
    "Data or Analytics",
    "Design",
    "Eduction professional",
    "Engineering",
    "Finance and Accounting",
    "Software development",
    "Other",
];

export default function FunctionSelection() {
    const navigate = useNavigate();
    const [selectedFunction, setSelectedFunction] = useState<string | null>(null);

    // Load saved preference
    useEffect(() => {
        const saved = localStorage.getItem("continuum_function");
        if (saved && functions.includes(saved)) {
            setSelectedFunction(saved);
        }
    }, []);

    const handleFunctionClick = (func: string) => {
        setSelectedFunction(func);
        localStorage.setItem("continuum_function", func);
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleContinue = () => {
        if (selectedFunction) {
            navigate("/loading"); // Navigate to animation/loading page
        }
    };

    const handleSkip = () => {
        navigate("/loading");
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
            {/* Header */}
            <div className="w-full px-12 mb-12">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-3 hover:opacity-70 transition-opacity"
                >
                    <ChevronLeft size={20} style={{ color: "#252014" }} />
                    <span
                        style={{
                            fontFamily: "Sarina",
                            fontWeight: 400,
                            fontSize: "20.89px",
                            color: "#252014",
                        }}
                    >
                        Continuum
                    </span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center gap-8 w-full max-w-[600px] px-6">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h1
                        style={{
                            fontFamily: "Satoshi",
                            fontWeight: 700,
                            fontSize: "28px",
                            color: "#0B191F",
                            // maxWidth: "500px", // Removed to fit on one line
                        }}
                    >
                        What function best describes your work?
                    </h1>
                    <p
                        style={{
                            fontFamily: "Satoshi",
                            fontWeight: 700,
                            fontSize: "24px",
                            color: "#727D83",
                        }}
                    >
                        This helps customise your experience
                    </p>
                </div>

                {/* Selected Count */}
                <div className="w-full text-left" style={{ fontFamily: "Satoshi", color: "#727D83", fontSize: "14px" }}>
                    {selectedFunction ? "1 Selected" : "0 Selected"}
                </div>

                {/* Function Grid */}
                <div className="flex flex-wrap gap-3 justify-start w-full">
                    {functions.map((func) => {
                        const isSelected = selectedFunction === func;
                        return (
                            <button
                                key={func}
                                onClick={() => handleFunctionClick(func)}
                                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg border transition-all
                  ${isSelected ? "bg-white border-[#0B191F]" : "bg-white border-[#D3D7DA] hover:border-gray-400"}
                `}
                                style={{
                                    height: "44px",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "Satoshi",
                                        fontWeight: 500,
                                        fontSize: "14px",
                                        color: isSelected ? "#0B191F" : "#727D83",
                                    }}
                                >
                                    {func}
                                </span>
                                {isSelected && <Check size={16} color="#3B82F6" strokeWidth={3} />}
                            </button>
                        );
                    })}
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-[400px]">
                    <button
                        onClick={handleContinue}
                        disabled={!selectedFunction}
                        className="w-full py-3 rounded-lg text-white font-medium transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                            backgroundColor: "#2F95F6", // Matching the blue in the design
                            fontFamily: "Satoshi",
                        }}
                    >
                        Continue
                    </button>

                    <button
                        onClick={handleSkip}
                        className="text-[#727D83] hover:text-[#0B191F] transition-colors"
                        style={{
                            fontFamily: "Satoshi",
                            fontSize: "14px",
                        }}
                    >
                        Skip for now
                    </button>
                </div>
            </div>
        </div>
    );
}
