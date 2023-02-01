import { configureStore } from "@reduxjs/toolkit";
import drinkReducer from "./drinksSlice";

export const store = configureStore({
    reducer: drinkReducer,
});

export type RootState = ReturnType<typeof drinkReducer>;
export type AppDispatch = typeof store.dispatch;
