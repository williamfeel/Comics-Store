import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../../styles/ProductoCard.module.css";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import clienteAxios from "../../config/axios";
import { useContext } from "react";
import CartContext from "../context/CartProvider.js"

const useProductos = () => useContext(CartContext);

export function ProductosGrid() {
  const [productos, setProductos] = useState([]);
  
  const {agregarAlCarro} = useProductos();


  useEffect(() => {
    const traerProductos = async () => {
      try {
        const { data } = await clienteAxios.get("/productos");
        setProductos(data);
      } catch (error) {
        console.log("Error: " + error.message);
      }
    };
    traerProductos();
  }, []);

  return (
    <Container>
      <Row xs={2} md={5} className="g-4">
        {productos.map((producto) => (
          <Col key={producto._id} producto={producto}>
            <Card>
              <Card.Img
                variant="top"
                src={producto.imagen.url}
                weight={230}
                height={345}
                className={styles.productoImg}
              />
              <Card.Body className={styles.cardBodyTam}>
                <Card.Title className={styles.productoCard}>
                  {producto.nombre}
                </Card.Title>
                <Card.Text className={styles.productoCard}>
                  {producto.estado}: {producto.disponibles}
                  <br />
                  Precio: $
                  {new Intl.NumberFormat("en-EN").format(`${producto.precio}`)}
                </Card.Text>
                <button type="button" className="btn btn-warning btn-sm" onClick={()=>agregarAlCarro(producto)}>
                  Agregra al carrito
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
