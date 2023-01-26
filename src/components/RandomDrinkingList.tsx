"use client";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import DrinkItem from "./Drink";

export interface Drink {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strDrinkThumb: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
}

const DrinkingList: React.FC = () => {
    const [refetch, setRefetch] = useState(false);
    const { data } = useFetch("https://the-cocktail-db.p.rapidapi.com/randomselection.php", refetch);
    const drinks = data?.drinks || [];

    useEffect(() => {
        setRefetch(false);
    }, [refetch]);

    const handleRefetchButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setRefetch(true);
    };

    return (
        <div className="w-full">
            <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between py-6 md:py-2 my-4 md:my-0 font-medium border-y border-slate-700 md:border-y-0">
                <div>
                    <h1 className="text-2xl text-white">Random Drink List</h1>
                </div>
                <div>
                    <button
                        className="py-1 px-4 text-teal-300 bg-teal-900 border border-teal-300 rounded-full shadow hover:bg-teal-800 duration-300 ease"
                        onClick={handleRefetchButton}>
                        Refetch Random List
                    </button>
                </div>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-2 md:h-[1119px]  border-b border-teal-400 md:overflow-auto  grid-auto">
                {drinks.map((drink: Drink) => (
                    <DrinkItem drinkDetails={drink} />
                ))}
            </ul>
        </div>
    );
};

export default DrinkingList;
