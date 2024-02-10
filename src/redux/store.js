import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import todoReducer from "./features/todoSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    // Add other reducers if needed
  },
});

export default store;
