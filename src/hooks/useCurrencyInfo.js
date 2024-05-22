import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                const result = await response.json();
                setData(result[currency]);
            } catch (error) {
                console.error('Error fetching currency data:', error);
            }
        };
        fetchData();
        // Log data inside useEffect to ensure it logs after data is updated
        console.log('Fetched data:', data);
    }, [currency]);

    // Log data outside useEffect if needed for other reasons
    console.log('Current data:', data);

    return data;
}

export default useCurrencyInfo;
