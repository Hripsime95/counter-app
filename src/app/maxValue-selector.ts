import type { RootState } from "./store";

export const maxValueSelector = (state: RootState): number => state.counter.maxValue;