import swal from "sweetalert2";
import { useState } from "react";
import styles from "../../styles/Formulario.module.css";
import clienteAxios from "../../config/axios.jsx";
import { useForm } from "react-hook-form";

const onSubmit = (pto) => {


  const formData = new FormData();
  formData.append("_id", pto._id);
  formData.append("nombre", pto.nombre);
  formData.append("autor", pto.autor);
  formData.append("editorial", pto.editorial);
  formData.append("disponibles", pto.disponibles);
  formData.append("precio", pto.precio);
  formData.append("imagen", pto.file[0]);

  
  const actualizarProducto = async (formData) => {
    try {
      
      await clienteAxios.put(`/productos/${formData.get("_id")}`, formData);
      swal.fire("producto creado correctamente!!!");
    } catch (error) {
      console.log(error.message);
    }
  };
  actualizarProducto(formData);
};

export const ModalEditar = ({ id, pcto }) => {
  const [actnonombre, setActnombre] = useState(pcto.nombre);
  const [actautor, setActautor] = useState(pcto.autor);
  const [acteditorial, setActeditorial] = useState(pcto.editorial);
  const [actdisponibles, setActdisponibles] = useState(pcto.disponibles);
  const [actprecio, setActprecio] = useState(pcto.precio);
  const [actimagen, setActimagen] = useState([]);
  

  const { register, handleSubmit } = useForm();

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
                <h1 className="modal-title fs-5" id="exampleModalLabel2">
                  Actualizando Producto...
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
                  <legend className={styles.Centrar}></legend>
                  <div className="contenedor-campos">
                  <div className="form-group">
                      <label className={styles.Centrar} htmlFor="_id">
                        Id: 
                      </label>
                      <input
                        className="form-control"
                        readOnly={true}
                        type="text"
                        id="_id"
                        name="_id"
                        value={pcto._id}
                        {...register("_id")}
                      />
                    </div>
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
                        value={actnonombre}
                        {...register("nombre")}
                        onChange={(ev) => setActnombre(ev.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className={styles.Centrar} htmlFor="autor">
                        Autor:
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="nombre"
                        name="autor"
                        placeholder="autor"
                        value={actautor}
                        {...register("autor")}
                        onChange={(ev) => setActautor(ev.target.value)}
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
                        value={acteditorial}
                        {...register("editorial")}
                        onChange={(ev) => setActeditorial(ev.target.value)}
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
                        value={actprecio}
                        {...register("precio")}
                        onChange={(ev) => setActprecio(ev.target.value)}
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
                        value={actdisponibles}
                        {...register("disponibles")}
                        onChange={(ev) => setActdisponibles(ev.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className={styles.Centrar} htmlFor="img">
                        Si desea cambiar la imagen, suba la nueva imagen:
                        <a
                          href={pcto.imagen.url}
                          rel="noreferrer"
                          target="_blank"
                        >
                          imagen actual
                        </a>
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        accept="image/png, image/jpeg"
                        id="imagen"
                        name="imagen"
                        placeholder="imagen"
                        value={actimagen}
                        {...register("file")}
                        onChange={(ev) => setActimagen(ev.target.value)}
                        
                      />
                    </div>

                    {/* operador ternario && */}

                    {/* {msg && <Aviso alerta={alerta} setAlerta={setAlerta} />} */}
                    <br />
                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        value="Modificar"
                        className="btn btn-primary"
                      >
                        Modificar
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
