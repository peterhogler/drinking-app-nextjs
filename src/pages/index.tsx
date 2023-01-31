import RandomDrinkingList from "../components/RandomDrinkingList";
import SearchBox from "../components/SearchBox";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <>
            <Layout>
                <div className="flex md:gap-4">
                    <div className="p-2 border border-slate-700">
                        <SearchBox />
                    </div>
                    <div className="p-2 border-slate-700 border">
                        <RandomDrinkingList />
                    </div>
                </div>
            </Layout>
        </>
    );
}
