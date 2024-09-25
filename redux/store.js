"use client";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
import moviesReducer from "@/redux/features/movies/moviesSlice";
const makeStore = () => {
  const store = configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      movies: moviesReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
  });
  setupListeners(store.dispatch);
  return store;
};

export default makeStore;
