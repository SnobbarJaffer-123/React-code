
import { useEffect, useState } from "react";
function useCurrencyInfo(currency: string) {
  const [data, setData] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
  `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();

        // 🔥 CORRECT WAY TO ACCESS THE CURRENCY RATES
        setData(json[currency.toLowerCase()]);
      } catch (err) {
        console.error("Error fetching currency data:", err);
        setData({});
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
