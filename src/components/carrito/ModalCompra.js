import styles from "../../styles/Formulario.module.css";

export const ModalCompra = ({ id }) => {
  return (
    <div>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className={styles.ventaTexto2}>
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Su compra ha sido exitosa...
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
              <div className={styles.ventaTexto2}>
                <p>!!! FELICIDADES !!!</p>
              </div>
              <span>
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  className="btn btn-secondary"
                  style={{ border: "none" }}
                >
                  Cerrar
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
