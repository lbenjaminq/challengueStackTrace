import { Button } from "react-bootstrap";
import { CartComponent } from "../../components/Cart";
import { useAppSelector } from "../../redux/hooks";
import style from "./index.module.css";

export const Checkout = () => {
  const itemsCart = useAppSelector((state) => state.cartReducer);

  return (
    <div className={style.container}>
      <div className={style.order}>
        <h2>Resumen de la orden</h2>
      </div>
      <ul className={style.listProducts}>
        {itemsCart?.map((item) => (
          <CartComponent item={item} />
        ))}
      </ul>
      <Button>Comprar</Button>
    </div>
  );
};
