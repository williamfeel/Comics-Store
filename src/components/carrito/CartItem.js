import styles2 from "../../styles/VentaCard.module.css";
import styles from "../../styles/ProductoCard.module.css";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import CartContext from "../context/CartProvider";

const useProductos = () => useContext(CartContext);

export const CartItem = ({ producto }) => {
  
  const { eliminarDelCarro, modificarCantidad } = useProductos();

  
  //const [cant, setCant] = useState(producto.cantidad);


  return (
    <div className="mt-4">
      <Card className={styles.productoCard}>
        <div className="row">
          <img
            className="col-3"
            src={producto.imagen.url}
            alt="img"
            height={200}
          />
          <div className="col-3">
            <div className={styles2.ventaTexto2}>
              <br />
              {producto.nombre} <br /> $
              {new Intl.NumberFormat("en-EN").format(`${producto.precio}`)}
              <br />
              en stock: {producto.disponibles} <br /> {producto.editorial}{" "}
              <br /> {producto.autor}
            </div>
            <button type="button" onClick={() => eliminarDelCarro(producto)}>
              Eliminar del Carrito
            </button>
          </div>
          <div className="col-3">
            <div className={styles2.ventaTexto2}>
              <br />
              <br />
              Cantidad
              <br />
              <div>
                <input
                  className="form-control"
                  type="number"
                  min="0"
                  max="100"
                  id="typeNumber"
                  value={producto.cantidad}
                  onChange={(ev) => modificarCantidad(producto, ev.target.value)}
                ></input>
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="col-3">
            <div className={styles2.ventaTexto2}>
              <br />
              <br />
              Subotal (+)
              <br />$
              {new Intl.NumberFormat("en-EN").format(
                `${producto.cantidad * producto.precio}`
              )}
            </div>
            <div></div>
          </div>
        </div>
      </Card>
    </div>
  );
};
