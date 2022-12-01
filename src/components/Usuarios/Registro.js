import { Link } from "react-router-dom";
import styles from "../../styles/Titulo.module.css";
import styles2 from "../../styles/Formulario.module.css";
import { useState } from "react";
import clienteAxios from "../../config/axios.jsx";
import { Aviso } from "../Aviso.js";

export const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const [alerta, setAlerta] = useState({});

  const handleSudmit = async (e) => {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({ msg: "Hay campos vacios", error: true });
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({ msg: "Los password no son iguales", error: true });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "El password es muy corto, agrega minimo 6 caracteres",
        error: true,
      });
      return;
    }

    setAlerta({});

    // Creando el usuario en la API

    try {
      const { data } = await clienteAxios.post("/user", {
        nombre,
        email,
        password,
        telefono,
        direccion,
      });

      console.log(data);

      setAlerta({
        msg: "Creado correctamente, revisa tu email",
        error: false,
      });

      setNombre("");
      setEmail("");
      setPassword("");
      setRepetirPassword("");
      setTelefono("");
      setDireccion("");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <div>
      <br />
      <h1 className={styles.titulo}>REGISTRATE!</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              {msg && <Aviso alerta={alerta} setAlerta={setAlerta}/>}

              <form className={styles2.Borde} onSubmit={handleSudmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    id="nombre"
                    placeholder="ej: Juan David Ariza Torres"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="ej: correo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="direccion" className="font-medium">
                    Direccion
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    className="form-control"
                    placeholder="ej: Calle 12 #34-56"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">
                    Telefono
                  </label>
                  <input
                    type="number"
                    id="telefono"
                    className="form-control"
                    placeholder="ej: 300123456"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="*********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="repetir-password">Re-entry password</label>
                  <input
                    type="password"
                    id="repetir-password"
                    className="form-control"
                    placeholder="*********"
                    value={repetirPassword}
                    onChange={(e) => setRepetirPassword(e.target.value)}
                  />
                </div>
                <br />
                <input
                  type="submit"
                  value="Ingresar"
                  className="btn btn-primary btn-sm"
                />
                <div className={styles2.Centrar}>
                  <Link to="/" className="badge badge-primary">
                    <div>Ya tengo cuenta.</div>
                  </Link>
                  <Link to="/Password" className="badge badge-secondary">
                    <div>Olvide mi password.</div>
                  </Link>
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
