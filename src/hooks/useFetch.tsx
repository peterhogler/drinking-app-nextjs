import { useEffect, useState } from "react";
import { Drink } from "../components/RandomDrinkingList";

export interface APIResponse {
    drinks: Drink[];
}

interface FetchHookResults {
    data: APIResponse | null;
    error: Error | null;
    loading: boolean;
}

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
        "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
};

const useFetch = (url: string, refetch?: boolean): FetchHookResults => {
    const [data, setData] = useState<APIResponse>({ drinks: [] });
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const data = await res.json();
                setData(data);
            } catch (e) {
                const error = new Error((e as Error).message);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        if (refetch) {
            try {
                fetchData();
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [url, refetch]);

    return { data, error, loading };
};

export default useFetch;
