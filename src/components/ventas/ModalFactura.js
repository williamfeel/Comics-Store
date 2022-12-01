import Table from 'react-bootstrap/Table';
export const ModalFactura = ({factura, detalle, NoFactura}) => {
  return(
    <div>
      <div className="modal fade" id={factura} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Factura No. {NoFactura}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Table>
                <thead>
                  <tr style={{textAlign: "center"}}>
                    <th>cantidad</th>  
                    <th>nombre del pto</th>
                    <th>precio</th>
                    <th>subtotal</th>
                  </tr>
                </thead>
                <tbody>
                {detalle.map((detal, index)=>(
                  <tr key={index} detal={detal}>
                    <td>{detal.cantidad}</td>
                    <td>{detal.inf.nombre}</td>
                    <td>${new Intl.NumberFormat("en-EN").format(`${detal.inf.precio}`)}</td>
                    <td>{detal.subtotal}</td>
                  </tr>
                ))}
                </tbody>
              </Table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ModalE = () => {

}