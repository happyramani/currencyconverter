import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                const result = await response.json();
                setData(result[currency]);
                console.log('Fetched data:', result[currency]); // Log data after fetching
            } catch (error) {
                console.error('Error fetching currency data:', error);
            }
        };
        fetchData();
    }, [currency]);

    console.log('Current data:', data); // Log current data outside useEffect

    return data;
}

export default useCurrencyInfo;
