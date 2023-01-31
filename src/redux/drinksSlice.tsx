import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Drink } from "../components/RandomDrinkingList";

interface DrinksState {
    drinks: Drink[];
}

const initialState: DrinksState = {
    drinks: [],
};

export const drinkSlice = createSlice({
    name: "drinks",
    initialState,
    reducers: {
        ADD_DRINK: (state, action: PayloadAction<Drink>) => {
            console.log(action.payload);
        },
    },
});

export const { ADD_DRINK } = drinkSlice.actions;
export default drinkSlice.reducer;
