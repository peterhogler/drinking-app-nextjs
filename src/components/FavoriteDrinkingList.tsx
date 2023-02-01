import { Drink } from "./RandomDrinkingList";
import DrinkItem from "./Drink";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { REMOVE_DRINKS } from "@/redux/drinksSlice";

const FavoriteDrinkingList: React.FC = () => {
    const favoriteDrinks = useSelector((state: RootState) => state.drinks);
    const dispatch = useDispatch();

    const handleClearButton = () => {
        dispatch(REMOVE_DRINKS());
    };
    return (
        <div className="h-[100vh] w-full">
            <div className="flex flex-col gap-2 md:flex-row md:justify-between py-4 md:py-2  font-medium border-y border-slate-700 my-4 md:my-0 md:border-y-0">
                <div>
                    <h1 className="text-2xl text-white">Favorite Drinks</h1>
                </div>
                <div className="ml-auto">
                    <button
                        className="py-[3px] px-4 text-pink-600 bg-pink-900/25 border border-pink-600 rounded-full shadow  hover:bg-pink-900/50 duration-300 ease"
                        onClick={handleClearButton}>
                        <span>Remove All Drinks [{favoriteDrinks.length ?? 0}]</span>
                    </button>
                </div>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:overflow-auto py-2">
                {favoriteDrinks.map((drink: Drink) => (
                    <DrinkItem drinkDetails={drink} />
                ))}
            </ul>
        </div>
    );
};

export default FavoriteDrinkingList;
