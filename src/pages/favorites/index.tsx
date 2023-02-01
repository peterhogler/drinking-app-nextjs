import FavoriteDrinkingList from "@/components/FavoriteDrinkingList";
import Layout from "@/components/Layout";
import SearchBox from "@/components/SearchBox";

const Favorites: React.FC = () => {
    return (
        <Layout>
            <div className="flex lg:gap-4">
                <div>
                    <SearchBox />
                </div>
                <div className="w-full">
                    <FavoriteDrinkingList />
                </div>
            </div>
        </Layout>
    );
};

export default Favorites;
