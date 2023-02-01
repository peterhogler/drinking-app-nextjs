import Link from "next/link";
import { BiDrink } from "react-icons/bi";
import { Drink } from "../components/RandomDrinkingList";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DRINK } from "@/redux/drinksSlice";
import { RootState } from "@/redux/store";

interface DrinkProps {
    drinkDetails: Drink;
    onDrinkClick?: () => void;
}

const Drink: React.FC<DrinkProps> = ({ drinkDetails, onDrinkClick }) => {
    const favoriteDrink = useSelector((state: RootState) => state.drinks);
    const existingDrink = favoriteDrink.find(
        (favoriteDrink) => favoriteDrink.idDrink === drinkDetails.idDrink
    );

    const iconColor = existingDrink ? "text-yellow-400" : "text-slate-400";

    const dispatch = useDispatch();

    const handleFavoriteButton = () => {
        dispatch(ADD_DRINK(drinkDetails));
    };
    return (
        <li
            className="z-0 group border-[1.5px] border-gray-600 duration-300 delay-200 ease rounded hover:border-teal-300 hover:-translate-y-1 cursor-pointer shadow"
            key={drinkDetails.idDrink}
            onClick={onDrinkClick}>
            <div className="relative overflow-hidden rounded-t">
                <Link href={`/drinks/${drinkDetails.idDrink}`}>
                    <img
                        className="grayscale-[25%] group-hover:grayscale-0 duration-300 group-hover:scale-110"
                        src={drinkDetails.strDrinkThumb}
                        alt={drinkDetails.strDrink}
                        loading="lazy"
                    />
                </Link>
                <div className="grid place-items-center absolute top-5 right-5 h-10 w-10 bg-slate-900 rounded-full">
                    <button onClick={handleFavoriteButton}>
                        <BiDrink className={iconColor} size={26} />
                    </button>
                </div>
            </div>
            <div className="p-2 h-max">
                <div className="truncate flex flex-col gap-1">
                    <div className="text-xl text-white font-semibold group-hover:text-teal-300 duration-300 ease">
                        {drinkDetails.strDrink}
                    </div>
                    <div className="text-sm px-2 py-1 bg-slate-800 w-max">{drinkDetails.strCategory}</div>
                </div>
            </div>
        </li>
    );
};

export default Drink;
