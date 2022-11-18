import React, { useState,useEffect } from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Button, Card } from "react-bootstrap";
import { setItem } from "../../helpers/useLocalStorage";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AddToCart } from "../../redux/Slices/CartSlice";
import { People } from "../../types/people";
import { Film } from "./Film";

interface Props {
  people: People;
  priceFetch: number;
}

export const CardPeople: React.FC<Props> = ({ people, priceFetch }) => {
  const [disabledButton, setDisabledButton] = useState<Boolean>(false);
  const dispatch = useAppDispatch();
  const itemFind = useAppSelector((state) => state.cartReducer);

  useEffect(() => {
    setDisabledButton(itemFind.some((name) => name.name === people.name));
    setItem("cart", itemFind);
  }, [itemFind]);

  const handleAddToCart = (cartPeople: People) => {
    const { name } = cartPeople;
    dispatch(AddToCart({ name, priceFetch }));
  };

  return (
    <Card
      style={{
        textAlign: "center",
        margin: "2%",
      }}
    >
      <Card.Body
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Card.Title>{people.name}</Card.Title>
        <Card.Subtitle>
          {people.gender !== "n/a" ? people.gender : "No tiene genero"}
        </Card.Subtitle>
        <Card.Text>
          <h5>Peliculas</h5>
          {people.films.map((film, index) => (
            <Film key={index} film={film} />
          ))}
        </Card.Text>
        <Card.Footer
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <strong>${priceFetch}</strong>
          <Button
            disabled={disabledButton ? true : false}
            onClick={() => handleAddToCart(people)}
          >
            <BsFillCartFill />
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
