import { ModalFactura } from "./ModalFactura";
import { useEffect } from "react";
import { useState } from "react";
import clienteAxios from "../../config/axios";
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import moment from 'moment';

export function VentasProducto() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const traerVentas = async () => {
      try {
        const { data } = await clienteAxios.get("/ventas");
        setVentas(data);
      } catch (error) {
        console.log("Error: " + error.message);
      }
    };
    traerVentas();
  }, []);

  return (
    <Container className="bg-white">
      <Table striped bordered hover size="sm">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Fecha</th>
            <th>Cliente ID</th>
            <th># Factura</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta) => (
            <tr style={{ textAlign: "right" }} key={venta._id} venta={venta}>
              <td>{moment(`${venta.createdAt}`).format("MMM DD, YYYY")}</td>
              <td >{venta.cliente }</td>
              <td>{venta.factura}</td>
              <td>${new Intl.NumberFormat("en-EN").format(`${venta.total}`)}</td>
              <td style={{ textAlign: "center" }}>
                <button
                  style={{ border: "none" }}
                  data-bs-toggle="modal"
                  data-bs-target={`#id${venta._id}`}
                >
                  <img
                    src={"/img/LogoFac.png"}
                    alt="icono"
                    width={30}
                    height={30}
                  />
                </button>
                <ModalFactura
                  factura={`id${venta._id}`}
                  detalle={venta.detalle}
                  NoFactura={venta.factura}
                ></ModalFactura>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
