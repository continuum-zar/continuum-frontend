import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectStatus from "../../components/ProjectStatus";
import ActionCard from "../../components/ActionCard";
import SprintCard from "../../components/SprintCard";
import { Info } from "lucide-react";

const Overview = () => {
  const [activeSprint, setActiveSprint] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-[12px] pr-[8px] pb-[8px] pl-[12px] bg-[linear-gradient(0deg,#F9FAFB,#F9FAFB),linear-gradient(360deg,rgba(178,230,247,0.2)_0%,rgba(255,255,255,0.2)_100%)]">
      <div className="flex gap-[8px] min-h-[962px]">
        <Sidebar />

        <div className="flex-1 min-w-0">
          <div
            className="w-full min-h-[962px] bg-white rounded-[8px] border border-[#EBEDEE]
            pt-[16px] pr-[16px] pb-[16px] pl-[24px]
            flex flex-col gap-[16px]
            shadow-[0px_2px_4px_0px_rgba(15,15,31,0.04),0px_7px_7px_0px_rgba(15,15,31,0.03),0px_16px_10px_0px_rgba(15,15,31,0.02),0px_28px_11px_0px_rgba(15,15,31,0.01),0px_44px_12px_0px_rgba(15,15,31,0)]"
          >
            <ProjectHeader />

            <div className="w-full h-[1.14px] bg-[#EBEDEE]" />

            <div className="w-full pt-[48px] pb-[32px] flex flex-col items-center gap-[64px]">
              <ProjectStatus />

              <div className="w-full px-[12px] sm:px-0">
                <div className="w-full max-w-[815px] mx-auto flex flex-col sm:flex-row gap-[16px]">
                  <div className="flex-1 min-w-0">
                    <ActionCard
                      variant="newSprint"
                      onNewSprintClick={() => {
                        console.log("New sprint clicked");
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <ActionCard variant="dropFiles" />
                  </div>
                </div>
              </div>


              <div className="w-full px-[12px] sm:px-0">
                <div className="w-full max-w-[815px] mx-auto flex flex-col gap-[24px]">
                  {/* Sprints heading */}
                  <div className="flex items-center gap-[8px] h-[32px]">
                    <h2 className="text-[24px] leading-[24px] font-medium text-[#0B191F]">
                      Sprints
                    </h2>
                    <Info className="h-[16px] w-[16px] text-[#6B7280]" />
                  </div>

                  {/* container */}
                  <div className="w-full rounded-[8px] border border-[#EBEDEE] bg-white overflow-hidden relative">

                    <div className="pointer-events-none absolute inset-0 hidden sm:block">
                      <div className="absolute left-1/3 top-[16px] bottom-[16px] w-[1px] bg-[#F2F4F7]" />
                      <div className="absolute left-2/3 top-[16px] bottom-[16px] w-[1px] bg-[#F2F4F7]" />
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-3 sm:h-[163px]">
                      <SprintCard
                        title="Done"
                        subtitle="Short message goes here"
                        state="done"
                        progress={100}
                        selected={activeSprint === "done"}
                        onClick={() => setActiveSprint("done")}
                      />

                      <SprintCard
                        title="In progress"
                        subtitle="Short message goes here"
                        state="in_progress"
                        progress={50}
                        selected={activeSprint === "in_progress"}
                        onClick={() => setActiveSprint("in_progress")}
                      />

                      <SprintCard
                        title="Blocked"
                        subtitle="Short message goes here"
                        state="blocked"
                        progress={20}
                        selected={activeSprint === "blocked"}
                        onClick={() => setActiveSprint("blocked")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* more sections to follow here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
