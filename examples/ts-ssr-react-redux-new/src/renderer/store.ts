import { configureStore, createSlice } from "@reduxjs/toolkit";

const getStore = (
  preloadedState: {
    value: number;
  } = { value: 100 },
) => {
  console.log(preloadedState);
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: {
      counter: preloadedState,
    },
  });
  // return createStore(counterReducer, preloadedState);
};

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

const counterReducer = (state = { value: 0 }, action: { type: string }) => {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export { getStore };
