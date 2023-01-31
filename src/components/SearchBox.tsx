"use client";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import { Drink } from "./RandomDrinkingList";
import Link from "next/link";

interface SearchBoxProps {
    onDrinkClick?: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onDrinkClick }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchDrinks, setSearchDrinks] = useState<Drink[] | []>([]);
    const debouncedSearch = useDebounce(searchQuery, 500);
    const { data } = useFetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${debouncedSearch}`);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        if (debouncedSearch.length < 2) {
            setSearchDrinks(data?.drinks?.slice(0, 25) || []);
        } else {
            setSearchDrinks(data?.drinks || []);
        }
    }, [debouncedSearch, data]);

    return (
        <>
            <div className="hidden lg:block relative w-[400px] overflow-hidden">
                <div className="text-2xl py-2 font-medium text-white">Search Drinks</div>
                <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex gap-2">
                        <label htmlFor="search">Search</label>
                        <input
                            className="w-full border border-gray-600 bg-gray-200 indent-2 rounded text-black focus:outline-none"
                            placeholder="Ex. Vodka"
                            type="text"
                            id="search"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                    </div>
                </form>
                <div className="mt-5 overflow-hidden">
                    {searchDrinks.length === 0 && (
                        <div className="py-4 text-center text-xl font-semibold">No items found</div>
                    )}
                    <ul className="z-20 text-center max-h-[1075px] overflow-y-auto overflow-x-hidden w-full  border-gray-600 pb-2">
                        {searchDrinks &&
                            searchDrinks.map((drink: Drink) => {
                                return (
                                    <Link
                                        href={`/drinks/${drink.idDrink}`}
                                        as={`/drinks/${drink.idDrink}`}
                                        key={drink.idDrink}>
                                        <li
                                            className="cursor-pointer z-20 flex gap-4 items-center min-w-[277px] border border-transparent hover:border-y  hover:border-teal-300 ease group duration-300 ease"
                                            key={drink.idDrink}
                                            onClick={onDrinkClick}>
                                            <div className="h-20 w-20 grayscale-[25%] hover:grayscale-0 duration-300 ease">
                                                <img
                                                    src={drink.strDrinkThumb}
                                                    loading="lazy"
                                                    alt={drink.strDrink}
                                                />
                                            </div>
                                            <div className="text-lg flex items-start flex-col flex-1 gap-1">
                                                <span className="text-white font-semibold text-left group-hover:text-teal-300 duration-300 ease">
                                                    {drink.strDrink}
                                                </span>
                                                <div className="px-2 py-1 bg-slate-800 w-max">
                                                    {drink.strAlcoholic}
                                                </div>
                                            </div>
                                        </li>
                                    </Link>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SearchBox;
