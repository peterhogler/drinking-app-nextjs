import RandomDrinkingList from "../components/RandomDrinkingList";
import SearchBox from "../components/SearchBox";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <>
            <Layout>
                <div className="flex md:gap-4">
                    <div>
                        <SearchBox />
                    </div>
                    <div>
                        <RandomDrinkingList />
                    </div>
                </div>
            </Layout>
        </>
    );
}
