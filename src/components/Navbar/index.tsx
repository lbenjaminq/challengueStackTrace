import { Badge, Container, Navbar } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

export const NavbarComponent = () => {
  const navigate = useNavigate();
  const itemsCart = useAppSelector((state) => state.cartReducer);

  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand style={{ color: "white" }}>ECOMMERCE</Navbar.Brand>
        <Navbar.Brand>
          <BsFillCartFill
            onClick={() => navigate("/checkout")}
            style={{ color: "white", fontSize: "2rem", cursor: "pointer" }}
          />
          <Badge bg="dark">{itemsCart.length}</Badge>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
