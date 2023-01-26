import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBox";
import DrinkDetails from "../../components/DrinkDetails";
import RandomDrinkingList from "../../components/RandomDrinkingList";

const Drink = () => {
    return (
        <Layout>
            <div className="flex lg:gap-4">
                <div>
                    <SearchBar />
                </div>
                <div className="h-[1170px] overflow-auto">
                    <DrinkDetails />
                    <RandomDrinkingList />
                </div>
            </div>
        </Layout>
    );
};

export default Drink;
