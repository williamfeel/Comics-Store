import styles from "../styles/Formulario.module.css";
import styles2 from "../styles/Titulo.module.css";
import AuthContext from "./context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import {Aviso} from "./Aviso"
import clienteAxios from "../config/axios";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext);



export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Validacion");
    if ([email, password].includes("")) {
      setAlerta({ msg: "Todos los Campos son Obligatorios", error: true });
      return;
    }

    // Auntenticar al usuario

    try {
      const { data } = await clienteAxios.post("user/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      console.log(data);
      // Validar la redireccion
      setAuth(data);
      navigate("User/Perfil");
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
      <h1 className={styles2.titulo}>TIENDA ONLINE COMICS</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form className={styles.Borde} onSubmit={handleSubmit}>
              {msg && <Aviso alerta={alerta} setAlerta={setAlerta} />}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  aria-describedby="emailHelp"
                  className="form-control"
                  type="email"
                  id="email"
                  placeholder="ej: correo@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  placeholder="*********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <input
                type="submit"
                value="Ingresar"
                className="btn btn-primary btn-sm"
              />
              <div className={styles.Centrar}>
                <Link to="/Registro" className="badge badge-secondary">
                  No tengo cuenta.
                </Link>
                <Link to="/Password" className="badge badge-secondary">
                  Olvide mi password.
                </Link>
              </div>
              <br />
              <h2 className={styles.Centrar}>4DEVS</h2>
              <p>
                Esta es una aplicación desarrollada por estudiantes Mintic -
                Udea.{" "}
              </p>
              <span>Da click en el siguiente botón para continuar.</span>
              <br></br>
              <Link to="/User" className="btn btn-primary btn-sm">
                Ir a la tienda
              </Link>
            </form>
          </div>
          <div className="col-6">
            <img src={"/img/Comic.png"} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
