import { configureStore } from "@reduxjs/toolkit";
import movies from "./reducers/movies";

export const store = configureStore({
  reducer: {
    movies
  },
});

export type RootState = ReturnType<typeof store.getState>;
