"use client";
import useFetch from "../hooks/useFetch";
import { usePathname } from "next/navigation";

const DrinkDetails: React.FC = () => {
    const pathname = usePathname();
    const id = pathname?.split("/").pop();

    const { data } = useFetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${id}`);
    const drink = data?.drinks[0];
    console.log(drink);
    return (
        <div>
            <div className="text-2xl pt-3 md:pt-2 pb-2 font-medium border-t border-gray-600 md:border-none text-white">
                Drink <span className="text-pink-600">{drink?.strDrink}</span> ID{" "}
                <span className="text-teal-300">{drink?.idDrink}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <img
                    className="w-full h-[536px] object-cover border-[1.5px] border-gray-600 rounded"
                    src={drink?.strDrinkThumb}
                    alt=""
                />
                <div className="lg:px-2 pb-2 h-max">
                    <div className="mt-2 lg:mt-none">
                        <h1 className="text-2xl text-white">Drink Details</h1>
                        <h1 className="text-2xl text-pink-600">{drink?.strDrink}</h1>
                        <div className="mt-2 py-1 px-2 bg-slate-800 w-max">{drink?.strCategory}</div>
                    </div>
                    <p className="my-3 text-lg max-h-[145px] overflow-auto">{drink?.strInstructions}</p>
                    <div className="my-3">
                        <h2 className="text-xl text-white">Ingredients</h2>
                        <ul className="list-decimal ml-4">
                            {drink?.strIngredient1 && <li>{drink?.strIngredient1}</li>}
                            {drink?.strIngredient2 && <li>{drink?.strIngredient2}</li>}
                            {drink?.strIngredient3 && <li>{drink?.strIngredient3}</li>}
                            {drink?.strIngredient4 && <li>{drink?.strIngredient4}</li>}
                            {drink?.strIngredient5 && <li>{drink?.strIngredient5}</li>}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl text-white">Measurements</h2>
                        <ul className="list-decimal ml-4">
                            {drink?.strMeasure1 && <li>{drink?.strMeasure1}</li>}
                            {drink?.strMeasure2 && <li>{drink?.strMeasure2}</li>}
                            {drink?.strMeasure3 && <li>{drink?.strMeasure3}</li>}
                            {drink?.strMeasure4 && <li>{drink?.strMeasure4}</li>}
                            {drink?.strMeasure5 && <li>{drink?.strMeasure5}</li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrinkDetails;
