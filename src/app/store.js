import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

/*
configureStore creates the Redux store
reducer: connects all slices
*/

export const store = configureStore({
  reducer: {
    counter: counterReducer, // global state name
  },
});
