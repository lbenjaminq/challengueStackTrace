import { ListProducts } from "../../components/ListProducts";
import { NavbarComponent } from "../../components/Navbar";

export const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <NavbarComponent />
      <h1 style={{ textAlign: "center" }}>Ecommerce Productos Star Wars</h1>
      <ListProducts />
    </div>
  );
};
