import { configureStore } from "@reduxjs/toolkit";
import { counterSlice, CounterState } from "./counterSlice";

export type RootState = { counter: CounterState };
export const getStore = (preloadedState: CounterState) =>
  configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
    preloadedState: {
      counter: preloadedState,
    },
  });

export type AppStore = ReturnType<typeof getStore>;
export type AppDispatch = AppStore["dispatch"];
