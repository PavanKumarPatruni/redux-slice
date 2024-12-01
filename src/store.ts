import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slices/counterSlice";
import postsSlice from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [postsSlice.name]: postsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
