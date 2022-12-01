import { Link } from "react-router-dom";
import styles from "../../styles/Titulo.module.css";
import styles2 from "../../styles/Formulario.module.css";

export const OlvidePassword = () => {
  return (
    <div>
      <br />
      <h1 className={styles.titulo}>RECUPERA TU CONTRASEÑA</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              <form className={styles2.Borde}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="ej: correo@correo.com"
                  />
                </div>
                <br />
                <input
                  type="submit"
                  value="Ingresar"
                  className="btn btn-primary btn-sm"
                />
                <div className={styles2.Centrar}>
                  <Link to="/Registro" className="badge badge-secondary">
                    No tengo cuenta.
                  </Link>
                  <Link to="/" className="badge badge-primary">
                    <div>Volver</div>
                  </Link>
                  {/* <Link to="/Password" className="badge badge-secondary">
                    <div>Olvide mi password.</div>
                  </Link> */}
                </div>
              </form>
            </div>
          </div>
          <div className="col-6">
            <img src={"img/Comic.png"} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
