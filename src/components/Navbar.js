import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartContext from "./context/CartProvider";
import { useState, useEffect, useContext } from "react";

const useProductos = () => useContext(CartContext);

export function Navegacion() {
  const { cart } = useProductos();
  const [cuentaCarritoIcon, setCuentaCarritoIcon] = useState(0);

  useEffect(() => {
    setCuentaCarritoIcon(cart.reduce((a, c) => a + c.cantidad * 1, 0));
  }, [cart]);

  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            4-Devs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/User">
                Lista de Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/Admin/Gestionar">
                Gestionar Producto
              </Nav.Link>
              <Nav.Link as={Link} to="/Admin/Ventas">
                Lista de Ventas
              </Nav.Link>
              <Nav.Link as={Link} to="/User/Cart">
                <Image src={"/img/cart.png"} alt="icon" width={40} height={40} />
                <span className="text-white bg-black rounded p-0.8">
                  {cuentaCarritoIcon}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand as={Link} to="/">
            Cerrar Sesion
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
