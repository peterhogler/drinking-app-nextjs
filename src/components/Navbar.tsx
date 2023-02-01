"use client";

import { useEffect, useState } from "react";
import { BiDrink } from "react-icons/bi";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import { Drink } from "./RandomDrinkingList";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchDrinks, setSearchDrinks] = useState<Drink[] | null>([]);

    const debouncedSearch = useDebounce(searchQuery, 500);
    const { data } = useFetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${debouncedSearch}`);

    const favoriteDrinks = useSelector((state: RootState) => state.drinks);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        if (data && data.drinks) {
            if (debouncedSearch.length < 2) {
                setSearchDrinks(data.drinks.slice(0, 20));
            } else {
                setSearchDrinks(data.drinks.slice(0, 25));
            }
        }
    }, [debouncedSearch, data]);

    return (
        <nav className="z-99 lg:h-[65px] py-4 flex items-center flex-wrap  justify-between">
            <div className="flex items-center gap-2 text-2xl font-semibold text-teal-300">
                <Link href="/">Drinks App</Link>
                <BiDrink className="text-teal-300" size={22} />
            </div>
            <div className="ml-6 hidden md:block text-lg">
                <span>Your number #1 - Drinks App</span>
            </div>
            <Link
                href="../favorites"
                className="ml-auto cursor-pointer flex items-center self-stretch gap-2 text-lg font-semibold ">
                <span className="flex items-center gap-2 underline underline-offset-4 text-pink-600">
                    Favorite Drinks{" "}
                    {favoriteDrinks.length <= 0 && <BiDrink className="text-teal-300" size={22} />}
                </span>
                {favoriteDrinks.length > 0 && (
                    <>
                        <span>[{favoriteDrinks && favoriteDrinks.length > 0 && favoriteDrinks.length}]</span>
                        <BiDrink className="text-teal-300" size={22} />
                    </>
                )}
            </Link>
            <div className="relative w-full flex items-center gap-4 mt-2 md:mt-0">
                <div className="flex w-full my-2 lg:hidden items-center gap-2 text-lg">
                    <label className="font-semibold text-white" htmlFor="search">
                        Search
                    </label>
                    <input
                        className="w-full text-black border border-gray-600 bg-slate-200 rounded indent-2 focus:outline-none duration-300 ease"
                        type="text"
                        placeholder="Ex. Mojito"
                        id="search"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                </div>
                {searchDrinks && searchDrinks.length > 0 && searchQuery.length > 0 && (
                    <div className="z-20 absolute top-14 right-0 w-full">
                        <ul
                            className="z-20 text-center bg-gray-900 max-h-[600px] overflow-y-auto overflow-x-hidden w-full border border-gray-800"
                            onMouseLeave={() => setSearchQuery("")}>
                            {searchDrinks &&
                                searchDrinks.map((drink: Drink) => {
                                    return (
                                        <Link href={`/drinks/${drink.idDrink}`}>
                                            <li
                                                className="cursor-pointer z-20 flex gap-4 items-center min-w-[250px] group border-y border-y-transparent hover:border-y-teal-300 duration-300 ease"
                                                key={drink.idDrink}>
                                                <div className="h-20 w-20 grayscale-[25%]">
                                                    <img
                                                        src={drink.strDrinkThumb}
                                                        loading="lazy"
                                                        alt={drink.strDrink}
                                                    />
                                                </div>
                                                <div className="text-lg flex flex-col items-start">
                                                    <span className="text-left text-white max-w-[10ch] group-hover:text-teal-300 duration ease">
                                                        {drink.strDrink}
                                                    </span>
                                                </div>
                                            </li>
                                        </Link>
                                    );
                                })}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
