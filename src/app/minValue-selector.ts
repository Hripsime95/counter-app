import type { RootState } from "./store";

export const minValueSelector = (state: RootState): number => state.counter.minValue;