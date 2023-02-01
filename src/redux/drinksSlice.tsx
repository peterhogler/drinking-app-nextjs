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
            const existingDrink = state.drinks.find(
                (favoriteDrink) => favoriteDrink.idDrink === action.payload.idDrink
            );
            if (!existingDrink) {
                state.drinks = [...state.drinks, action.payload];
            } else {
                state.drinks = state.drinks.filter(
                    (favoriteDrinks) => favoriteDrinks.idDrink !== action.payload.idDrink
                );
            }
        },
        REMOVE_DRINKS: (state) => {
            state.drinks = [];
        },
    },
});

export const { ADD_DRINK, REMOVE_DRINKS } = drinkSlice.actions;
export default drinkSlice.reducer;
