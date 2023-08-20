import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      console.log(`state = ${JSON.stringify(state)}`);
      state.value += 1;
    },
    decrement: (state) => {
      console.log(`state = ${JSON.stringify(state)}`);
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
