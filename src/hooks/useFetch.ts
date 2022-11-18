import { useEffect, useState } from "react";
import { getData } from "../helpers/getData";
import { Data } from "../types/people";

export const useFetch = (price: string, priceFetch: number) => {
  const [data, setData] = useState<Data>({
    products: [],
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    getData()
      .then((response) => {
        setData({
          products: response.map((item: any) => ({
            ...item,
            price: priceFetch,
          })),
          isLoading: false,
          isError: false,
        });
      })
      .catch(() => {
        setData({ products: [], isLoading: false, isError: true });
      });
  }, [priceFetch, price]);
  console.log(data);
  return data;
};
