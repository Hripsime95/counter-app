import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
  maxValue: 1,
  minValue: 0
}

export const changeMaxValueAC = createAction<number>('change/maxValue');
export const changeMinValueAC = createAction<number>('change/minValue');
 
export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeMaxValueAC, (state, action) => {
      state.maxValue = action.payload;
    })
    .addCase(changeMinValueAC, (state, action) => {
      state.minValue = action.payload;;
    })
})