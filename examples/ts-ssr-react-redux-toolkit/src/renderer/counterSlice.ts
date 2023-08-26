import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";
import { RootState } from "./store";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  },
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "idle",
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
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectCount = (state: RootState) => state.counter.value;

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
