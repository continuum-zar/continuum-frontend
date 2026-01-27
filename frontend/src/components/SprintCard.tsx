type SprintState = "done" | "in_progress" | "blocked";

type SprintCardProps = {
  title: string;
  subtitle: string;
  state: SprintState;
  progress: number;
  selected?: boolean;
  onClick?: () => void;
};

function clampProgress(value: number) {
  return Math.max(0, Math.min(100, value));
}

function SprintIcon({ state }: { state: SprintState }) {
  if (state === "done") {
    return (
      <img
        src="/icons/circle-check-big.svg"
        className="h-[16px] w-[16px]"
        alt="Done"
      />
    );
  }

  if (state === "blocked") {
    return (
      <img
        src="/icons/traffic-cone.svg"
        className="h-[16px] w-[16px]"
        alt="Blocked"
      />
    );
  }

  return (
    <img
      src="/icons/circle-dashed.svg"
      className="h-[16px] w-[16px]"
      alt="In progress"
    />
  );
}

export function SprintCard({
  title,
  subtitle,
  state,
  progress,
  selected,
  onClick,
}: SprintCardProps) {
  const p = clampProgress(progress);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-full w-full px-[24px] py-[20px] flex flex-col text-left
        rounded-[8px] transition-colors
        hover:bg-[#F9FAFB]
        ${selected ? "bg-[#F3F4F6]" : ""}
      `}
    >
      <div className="flex flex-col gap-[16px]">

        <div className="h-[32px] w-[32px] rounded-[8px] border border-[#EBEDEE] bg-white flex items-center justify-center">
          <SprintIcon state={state} />
        </div>

        {/* text */}
        <div className="flex flex-col gap-[6px]">
          <div className="text-[16px] leading-[16px] font-medium text-[#0B191F]">
            {title}
          </div>
          <div className="text-[14px] leading-[20px] font-normal text-[#6B7280]">
            {subtitle}
          </div>
        </div>
      </div>

      {/* progress bar  */}
      <div className="relative mt-[10px] h-[6px]">

        <div className="absolute inset-0 rounded-full bg-[#EBEDEE]" />


        <div
          className="absolute left-0 top-0 h-[6px] rounded-full bg-[#0B191F]"
          style={{ width: `${p}%` }}
        />

        <div
          className="absolute top-0 h-[6px] w-[6px] rounded-full bg-[#0B191F]"
          style={{
            left: `min(calc(${p}% - 3px), calc(100% - 6px))`,
          }}
        />
      </div>
    </button>
  );
}

export default SprintCard;
