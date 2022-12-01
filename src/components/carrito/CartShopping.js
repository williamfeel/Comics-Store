import Card from "react-bootstrap/Card";
import styles2 from "../../styles/VentaCard.module.css";
import { CartItem } from "./CartItem.js";
import { useContext } from "react";
import CartContext from "../context/CartProvider";
import { Link } from "react-router-dom";
import { ModalCompra } from "./ModalCompra.js";





const useProductos = () => useContext(CartContext);

export const CartShopping = () => {



  /* const crearVenta = async (carro, cantidad, subtotal) => {
    try {
      await clienteAxios.post("/productos", formData);
      swal.fire("producto creado correctamente!!!");
      //clienteAxios.get("/productos")
    } catch (error) {
      console.log(error.message);
    }
  };
  crearcrearVenta(carro, cantidad, subtotal);
}; */

  const { cart } = useProductos();

  return (
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-8">
            {cart.map((dato) => (
              <CartItem key={dato._id} producto={dato} />
            ))}
          </div>
          <div className="col-4">
            <br />
            <div className="sticky-top">
              <Card>
                <h3 className={styles2.ventaCard}>Resumen de tu pedido</h3>
                <p className={styles2.ventaTexto}>
                  TOTAL A PAGAR: $
                  {new Intl.NumberFormat("en-EN").format(
                    `${cart.reduce((a, c) => a + c.cantidad * c.precio, 0)}`
                  )}
                </p>
                <p className={styles2.ventaTexto}>
                  ( {cart.reduce((a, c) => a + c.cantidad * 1, 0)} productos)
                </p>
                <div className="card-footer bg-transparent border-success">
                  <div className="row" style={{ textAlign: "center" }}>
                    <div className="col-6">
                      <Link
                        to={"/User"}
                        type="button"
                        className="btn btn-success"
                      >
                        Seguir Comprando
                      </Link>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target={`#modalCompraExitosa`}
                      >
                        Proceder a pagar
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <ModalCompra id="modalCompraExitosa" />
          </div>
        </div>
      </div>
  );
};
