import Link from "next/link";
import { Drink } from "./RandomDrinkingList";

interface DrinkProps {
    drinkDetails: Drink;
}

const Drink: React.FC<DrinkProps> = ({ drinkDetails }) => {
    const handleOnClick = () => {
        console.log(drinkDetails);
    };
    return (
        <Link href={`/drinks/${drinkDetails.idDrink}`}>
            <li
                className="z-0 group border-[1.5px] border-gray-600 duration-300 delay-200 ease rounded hover:border-teal-300 hover:-translate-y-1 cursor-pointer shadow"
                key={drinkDetails.idDrink}
                onClick={handleOnClick}>
                <div className="relative overflow-hidden rounded-t">
                    <img
                        className="grayscale-[25%] group-hover:grayscale-0 duration-300 group-hover:scale-110"
                        src={drinkDetails.strDrinkThumb}
                        alt={drinkDetails.strDrink}
                    />
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
        </Link>
    );
};

export default Drink;
