import { configureStore } from "@reduxjs/toolkit";
import drinkReducer from "./drinksSlice";

export const store = configureStore({
    reducer: drinkReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
