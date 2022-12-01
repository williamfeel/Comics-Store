import swal from "sweetalert2";
import styles from "../../styles/Formulario.module.css";
import clienteAxios from "../../config/axios.jsx";


const onSubmit = (pcto) => {
   
  
  const formData = new FormData();
  formData.append("nombre", pcto.nombre);
  formData.append("autor", pcto.autor);
  formData.append("editorial", pcto.editorial);
  formData.append("disponibles", pcto.disponibles);
  formData.append("precio", pcto.precio);
  formData.append("imagen", pcto.file[0]);


  const crearProducto = async (formData) => {
    try {
      await clienteAxios.post("/productos", formData);
      swal.fire("producto creado correctamente!!!");
      //clienteAxios.get("/productos")
    } catch (error) {
      console.log(error.message);
    }
  };
  crearProducto(formData);
};



export const ModalCrear = ({ register, handleSubmit}) => {


  
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <div className={styles.Formulario}>
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Agregar un Producto a la Base de Datos
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
              <form
                className={styles.Formulario}
                onSubmit={handleSubmit(onSubmit)}
              >
                <fieldset>
                  <legend className={styles.Centrar}>Ingrese los datos</legend>
                  <div className="contenedor-campos">
                    <div className="form-group">
                      <label className={styles.Centrar} htmlFor="nombre">
                        Nombre:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="nombre"
                        {...register("nombre")}
                      />
                    </div>
                    <div className="form-group">
                      <label className={styles.Centrar} htmlFor="autor">
                        Autor:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="autor"
                        name="autor"
                        placeholder="autor"
                        {...register("autor")}
                      />
                    </div>
                    <div className="form-group">
                      <label className={styles.Centrar} htmlFor="editorial">
                        Editorial:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="editorial"
                        name="editorial"
                        placeholder="editorial"
                        {...register("editorial")}
                      />
                    </div>

                    <div className="form-group">
                      <label className={styles.Centrar} htmlFor="precio">
                        Precio:
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="precio"
                        name="precio"
                        placeholder="precio"
                        {...register("precio")}
                      />
                    </div>
                    <div className="form-group">
                      <label className={styles.Centrar} htmlFor="disponibles">
                        Disponibles:
                      </label>
                      <input
                        className="form-control"
                        type="number"
                        id="disponibles"
                        name="disponibles"
                        placeholder="disponibles"
                        {...register("disponibles")}
                      />
                    </div>
                    <div className="form-group">
                      <label className={styles.Centrar} htmlFor="img">
                        Suba la imagen:
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        accept="image/png, image/jpeg"
                        id="imagen"
                        name="imagen"
                        placeholder="imagen"
                        {...register("file")}
                      />
                    </div>

                    {/* operador ternario && */}

                    {/* {msg && <Aviso alerta={alerta} setAlerta={setAlerta} />} */}
                    <br />
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        value="Crear"
                        className="btn btn-primary"
                      >
                        Crear
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
