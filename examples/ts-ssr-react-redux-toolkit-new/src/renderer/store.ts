import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";

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

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const selectCount = (state: ReturnType<typeof store.getState>) =>
  state.counter.value;

export const { set, increment, decrement } =
  counterSlice.actions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
