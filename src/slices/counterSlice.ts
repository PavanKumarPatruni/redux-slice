import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

const INIT_STATE = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: INIT_STATE,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = INIT_STATE.count;
    },
    switchSign: (state) => {
      state.count *= -1;
    },
  },
});

export const { increment, decrement, reset, switchSign } = counterSlice.actions;

export const counterSelector = createSelector(
  (state: RootState) => state.counter,
  (counter) => counter.count
);

export default counterSlice;
