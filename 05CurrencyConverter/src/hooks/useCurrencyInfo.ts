{/*}import {useEffect, useState} from "react"
interface CurrencyData {
    [key: string]: number
  }

function useCurrencyInfo(currency:string):CurrencyData{
    const [data, setData] = useState<CurrencyData>({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

        .then((res) => res.json())
        .then((res) => {
            console.log("Fetched Data:", res);
            setData(res[currency])})
        
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;*/}


{/*import { useEffect, useState } from "react";

function useCurrencyInfo(currency: string) {
  const [data, setData] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();
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
*/}


import { useEffect, useState } from "react";

function useCurrencyInfo(currency: string) {
  const [data, setData] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
       {/* const res = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`
        );
*/}
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
