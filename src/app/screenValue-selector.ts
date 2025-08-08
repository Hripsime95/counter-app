import type { RootState } from "./store";

export const screenValueSelector = (state: RootState): number => state.counter.screenValue;