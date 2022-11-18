import React, { useState } from "react";
import { CartAdd, RemoveToCart } from "../../redux/Slices/CartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Button } from "react-bootstrap";
import style from "../../pages/Checkout/index.module.css";

interface Props {
  item: CartAdd;
}

export const CartComponent: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [priceFetch, setPriceFetch] = useState(() => {
    const priceFind = window.localStorage.getItem("priceFetch");
    if (priceFind) return priceFind;
    else return 0;
  });

  const handleRemoveToCart = (name: string) => {
    dispatch(RemoveToCart({ name }));
  };

  return (
    <li key={item.name} className={style.itemProduct}>
      <div className={style.content}>
        <h4>{item.name}</h4>
      </div>
      <div>
        <strong>${priceFetch}</strong>
        <Button variant="danger" onClick={() => handleRemoveToCart(item.name)}>
          x
        </Button>
      </div>
    </li>
  );
};
