import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "./store";

export interface CounterState {
  value: number;
}

const INITIAL_STATE: CounterState = {
  value: 100,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    set: (state, action: PayloadAction<number>) => {
      console.log(
        `set: state = ${JSON.stringify(
          state,
        )}, action.payload = ${JSON.stringify(action.payload)}`,
      );
      state.value = action.payload;
    },
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

export const selectCount = (state: ReturnType<typeof store.getState>) =>
  state.counter.value;

export const { set, increment, decrement } = counterSlice.actions;
