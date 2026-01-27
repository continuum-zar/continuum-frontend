export type SprintState = "done" | "in_progress" | "blocked";

export type Sprint = {
  id: string;
  name: string;
  dateRange: string;
  state: SprintState;
};

export const mockSprints: Sprint[] = [
  {
    id: "sprint-1",
    name: "Sprint 1",
    dateRange: "Jan 6 – Jan 19",
    state: "done",
  },
  {
    id: "sprint-2",
    name: "Sprint 2",
    dateRange: "Jan 20 – Feb 2",
    state: "in_progress",
  },
  {
    id: "sprint-3",
    name: "Sprint 3",
    dateRange: "Feb 3 – Feb 16",
    state: "blocked",
  },
];
