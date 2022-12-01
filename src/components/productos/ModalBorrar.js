import styles from "../../styles/Formulario.module.css";

import clienteAxios from "../../config/axios";

export const ModalBorrar = ({ id, ptoId }) => {
  
  

  const borrarProducto = async (pto) => {
    
    
    try {
      await clienteAxios.delete(`/productos/${pto.ptoId}`);
      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className={styles.Formulario}>
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Eliminando pto de la base de datos...
                </h1>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Estas seguro?</p>
              <p>Estas accion no se podra revertir!</p>
              <p></p>
              <span className={styles.Botones}>
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btn-secondary"
                  style={{ border: "none" }}
                >
                  Canelar
                </button>
              </span>
              <span>
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{ border: "none" }}
                  onClick ={() => borrarProducto({ptoId})}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Confirmar
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
