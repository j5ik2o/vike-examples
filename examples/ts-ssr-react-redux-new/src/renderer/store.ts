import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
// export type RootState = ReturnType<typeof store.getState>;

const getStore = (PRELOADED_STATE: any) => {
  // const store = configureStore({ counterReducer, PRELOADED_STATE });
  const store = createStore(counterReducer, PRELOADED_STATE);
  return store;
};

const counterReducer = (state = { value: 0 }, action: any) => {
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
