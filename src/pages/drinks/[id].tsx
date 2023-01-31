import { useRef } from "react";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBox";
import DrinkDetails from "../../components/DrinkDetails";
import RandomDrinkingList from "../../components/RandomDrinkingList";

const Drink = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleDrinkClick = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        }
    };
    return (
        <Layout>
            <div className="flex lg:gap-4">
                <div>
                    <SearchBar onDrinkClick={handleDrinkClick} />
                </div>
                <div ref={scrollRef} className="h-[1170px] overflow-auto">
                    <DrinkDetails />
                    <RandomDrinkingList onDrinkClick={handleDrinkClick} />
                </div>
            </div>
        </Layout>
    );
};

export default Drink;
