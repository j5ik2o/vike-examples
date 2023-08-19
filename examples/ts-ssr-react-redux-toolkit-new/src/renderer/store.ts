import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const INITIAL_STATE: CounterState = {
  value: 100,
};

export const counterSlice = (initialState: CounterState) =>
  createSlice({
    name: "counter",
    initialState,
    reducers: {
      set: (state, action) => {
        state = action.payload;
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

export const store = configureStore({
  reducer: {
    counter: counterSlice(INITIAL_STATE).reducer,
  },
});

export const selectCount = (state: ReturnType<typeof store.getState>) =>
  state.counter.value;

export const { set, increment, decrement } =
  counterSlice(INITIAL_STATE).actions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
