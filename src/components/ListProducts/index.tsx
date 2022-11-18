import { useState, useEffect } from "react";
import { Button, Stack } from "react-bootstrap";
import { useFetch } from "../../hooks/useFetch";
import { CardPeople } from "../Card";

export const ListProducts = () => {
  const [priceFetch, setPriceFetch] = useState(() => {
    const getPriceFetch = JSON.parse(
      window.localStorage.getItem("priceFetch")!
    );
    if (getPriceFetch) {
      return getPriceFetch;
    } else return 20;
  });
  const [price, setPrice] = useState<string>(() => {
    const getPrice = window.localStorage.getItem("price");
    if (getPrice) return getPrice;
    else return "USD";
  });
  const { products, isLoading } = useFetch(price, priceFetch);

  useEffect(() => {
    window.localStorage.setItem("price", price);
    window.localStorage.setItem("priceFetch", JSON.stringify(priceFetch));
  }, [price, priceFetch]);

  const handleArg = () => {
    if (price === "USD") {
      setPriceFetch(Math.ceil(priceFetch * 160));
      setPrice("ARG");
    }
    if (price === "EUR") {
      setPriceFetch(Math.ceil(priceFetch * 170));
      setPrice("ARG");
    }
  };

  const handleUsd = () => {
    if (price === "ARG") {
      setPriceFetch(Math.ceil(priceFetch / 160));
      setPrice("USD");
    }
    if (price === "EUR") {
      setPriceFetch(Math.ceil(priceFetch / 1.03));
      setPrice("USD");
    }
  };

  const handleEur = () => {
    if (price === "ARG") {
      setPriceFetch(Math.ceil(priceFetch / 170));
      setPrice("EUR");
    }
    if (price === "USD") {
      setPriceFetch(Math.ceil(priceFetch * 1.03));
      setPrice("EUR");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>Cambiar de moneda a:</h2>
      <Stack gap={4} className="mx-auto" direction="horizontal">
        <Button onClick={handleUsd}>USD</Button>
        <Button onClick={handleArg}>ARG</Button>
        <Button onClick={handleEur}>EUR</Button>
      </Stack>
      <div
        style={{
          width: "70%",
          marginTop: "2%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {!isLoading ? (
          products.map((people, index) => (
            <CardPeople key={index} people={people} priceFetch={priceFetch} />
          ))
        ) : (
          <h2>Cargando</h2>
        )}
      </div>
    </div>
  );
};
