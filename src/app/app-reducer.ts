import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
  maxValue: 1,
  minValue: 0,
  screenValue: 0
}

export const changeIntervalValuesAC = createAction<{maxValue?: number, minValue?: number}>('change/intervalValues');
export const changeScreenValueAC = createAction<number>('change/screenValue');

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeIntervalValuesAC, (state, action) => {
      if( action.payload.maxValue ) state.maxValue = action.payload.maxValue;
      if( action.payload.minValue ) {
        state.minValue = action.payload.minValue;
        state.screenValue = action.payload.minValue;
      }
    })
    .addCase(changeScreenValueAC, (state, action)=> {
      state.screenValue = action.payload;
    })
})