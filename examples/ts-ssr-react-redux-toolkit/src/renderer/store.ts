import {
  Action,
  AnyAction,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { counterSlice, CounterState } from "./counterSlice";

export type RootState = { counter: CounterState };

export const getStore = (
  preloadedState: CounterState = { value: 0, status: "idle" },
) =>
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
export type AppThunkDispatch = ThunkDispatch<RootState, number, AnyAction>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
