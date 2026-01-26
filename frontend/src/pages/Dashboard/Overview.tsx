import Sidebar from "../../components/Sidebar";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectStatus from "../../components/ProjectStatus";
import ActionCard from "../../components/ActionCard";

const Overview = () => {
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

            {/* Dashboard content */}
            <div className="w-full pt-[48px] pb-[32px] flex flex-col items-center gap-[64px]">
              {/* Status */}
              <ProjectStatus />

              {/* Action Cards Row */}
              <div className="w-full flex justify-center">
                <div className="w-[815px] h-[156px] flex gap-[10px]">
                  <ActionCard
                    variant="newSprint"
                    onNewSprintClick={() => {
                      // placeholder click handling
                      console.log("New sprint clicked");
                    }}
                  />
                  <ActionCard variant="dropFiles" />
                </div>
              </div>

              {/* NOTE:
                  Later you’ll add Sprints + Members sections here if they exist in your app.
                  The wrapper gap-[64px] matches the Figma “stack spacing” between sections.
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
