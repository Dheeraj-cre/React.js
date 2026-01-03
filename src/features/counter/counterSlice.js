import { createSlice } from "@reduxjs/toolkit";

/*
initialState = default value of state
*/

const initialState = {
  value: 0, // counter value
};

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1; // Redux Toolkit allows mutation
    },

    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
      state.value = 0;
    },
  },
});

// Export actions
export const { increment, decrement, reset } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
