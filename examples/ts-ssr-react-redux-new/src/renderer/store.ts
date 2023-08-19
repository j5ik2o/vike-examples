import { createStore, Store } from "redux";

const getStore = (
  preloadedState: {
    value: number;
  } = { value: 100 },
): Store<{ value: number }, { type: string }> => {
  console.log(preloadedState);
  return createStore(counterReducer, preloadedState);
};

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
