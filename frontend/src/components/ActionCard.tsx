import React from "react";
import { Plus, Paperclip } from "lucide-react";

type Variant = "newSprint" | "dropFiles";

type ActionCardProps = {
  variant: Variant;
  onNewSprintClick?: () => void;
};

export default function ActionCard({ variant, onNewSprintClick }: ActionCardProps) {
  const isDrop = variant === "dropFiles";
  const [isDragOver, setIsDragOver] = React.useState(false);

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleCardClick = () => {
    if (isDrop) openFilePicker();
    else onNewSprintClick?.();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleCardClick();
      }}
      // Use CAPTURE to catch the events more reliably
      onDragEnterCapture={(e) => {
        if (!isDrop) return;
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
      }}
      onDragOverCapture={(e) => {
        if (!isDrop) return;
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = "copy";
        setIsDragOver(true);
      }}
      onDragLeaveCapture={(e) => {
        if (!isDrop) return;
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
      }}
      onDropCapture={(e) => {
        if (!isDrop) return;
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
        // no uploads performed
      }}
      className={[
        "relative bg-white",
        "w-[399.5px] h-[156px]",
        "rounded-[12px] border",
        "p-[24px]",
        "shadow-sm cursor-pointer select-none transition",
        // Make the drag-over state VERY visible for testing
        isDrop && isDragOver
          ? "border-[#0B191F] bg-[#F9FAFB] ring-1 ring-[#0B191F]"
          : "border-[#EDEDED]",
      ].join(" ")}
    >
      {/* Top-right icon button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (isDrop) openFilePicker();
          else onNewSprintClick?.();
        }}
        className="
          absolute top-[16px] right-[16px]
          w-[32px] h-[32px]
          rounded-[8px]
          border border-[#EDEDED]
          bg-white
          flex items-center justify-center
        "
        aria-label={isDrop ? "Attach files" : "New sprint"}
      >
        {isDrop ? <Paperclip size={16} /> : <Plus size={16} />}
      </button>

      {isDrop && (
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={() => {}}
        />
      )}

      {/* Text block */}
      <div className="w-[351.5px] flex flex-col gap-[20px]">
        <div className="text-[16px] font-medium leading-[100%] text-[#0B191F]">
          {isDrop ? "Drop files here" : "New sprint"}
        </div>

        {isDrop ? (
          <div className="text-[14px] font-medium leading-[100%] text-[#727D83]">
            or{" "}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openFilePicker();
              }}
              className="
                relative
                after:absolute
                after:left-0
                after:-bottom-[1px]
                after:w-full
                after:h-[1px]
                after:bg-[#727D83]
              "
            >
              browse your computer
            </button>
          </div>
        ) : (
          <div className="text-[14px] font-medium leading-[100%] text-[#727D83]">
            Create new sprint
          </div>
        )}
      </div>
    </div>
  );
}
