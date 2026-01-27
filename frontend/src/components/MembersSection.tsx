import { useState } from "react";
import { Info, Plus, Users, X } from "lucide-react";
import { mockMembers } from "../data/mockMembers";

const MembersSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onInvite = () => {
    console.log("Invite members clicked");
    setIsOpen((v) => !v);
  };

  const close = () => setIsOpen(false);

  return (
    <div className="w-full flex flex-col gap-[16px]">
      {/* Header row */}
      <div className="flex items-center justify-between h-[32px] relative">
        <div className="flex items-center gap-[8px]">
          <h2 className="text-[24px] leading-[24px] font-medium text-[#0B191F]">
            Members
          </h2>
          <Info className="h-[16px] w-[16px] text-[#6B7280]" />
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={onInvite}
            className="h-[32px] px-[12px] rounded-[8px] border border-[#EBEDEE] bg-white
                       inline-flex items-center gap-[8px]
                       text-[14px] leading-[20px] font-medium text-[#0B191F]
                       hover:bg-[#F9FAFB] active:bg-[#F3F4F6]
                       shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
          >
            <Plus className="h-[16px] w-[16px]" />
            Invite Members
          </button>

          {/* Popover */}
          {isOpen && (
            <div className="absolute right-0 mt-[8px] w-[280px] bg-white rounded-[12px] border border-[#EBEDEE] shadow-lg z-50">
              <div className="px-[12px] py-[10px] flex items-center justify-between border-b border-[#EBEDEE]">
                <div className="text-[14px] leading-[18px] font-medium text-[#0B191F]">
                  Members
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="h-[24px] w-[24px] rounded-[6px]
                             hover:bg-[#F9FAFB] active:bg-[#F3F4F6]
                             inline-flex items-center justify-center"
                >
                  <X className="h-[14px] w-[14px] text-[#6B7280]" />
                </button>
              </div>

              <div className="px-[12px] py-[10px] max-h-[240px] overflow-auto">
                <div className="flex flex-col gap-[6px]">
                  {mockMembers.map((m) => (
                    <div
                      key={m.id}
                      className="w-full flex items-center gap-[8px] rounded-[8px] px-[6px] py-[4px]
                                 hover:bg-[#F9FAFB]"
                    >
                      <div className="h-[28px] w-[28px] rounded-full border border-[#EBEDEE] bg-[#F9FAFB]
                                      flex items-center justify-center
                                      text-[11px] leading-[14px] font-medium text-[#0B191F]">
                        {m.initials}
                      </div>

                      <div className="text-[13px] leading-[18px] text-[#0B191F] truncate">
                        {m.name}
                      </div>
                    </div>
                  ))}

                  {mockMembers.length === 0 && (
                    <div className="text-[12px] leading-[16px] text-[#6B7280] py-[6px]">
                      No mock members
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>


      <div className="w-full min-h-[219px] flex flex-col items-center justify-center text-center">
        <Users className="h-[32px] w-[32px] text-[#6B7280]" />

        <div className="mt-[12px] text-[14px] leading-[20px] font-medium text-[#0B191F]">
          No Members assigned
        </div>

        <div className="mt-[4px] text-[12px] leading-[16px] font-normal text-[#6B7280] max-w-[260px]">
          Add members to your project to start assigning tasks
        </div>
      </div>
    </div>
  );
};

export default MembersSection;
