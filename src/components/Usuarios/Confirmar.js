import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../../config/axios";
import { Aviso } from "../Aviso.js";
import styles from "../../styles/Formulario.module.css";
import styles2 from "../../styles/Titulo.module.css";

const Confirmar = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  const { id } = params;
  // console.log(id);
  let token = id;
  //console.log(token);
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/user/confirmar/${token}`;
        const { data } = await clienteAxios(url);
        //const { data } = await clienteAxios( `/usuarios/prueba`);
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
        });
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
      setCargando(false);
    };
    confirmarCuenta();
  }, [token]);
  // const navigate = useNavigate()
  // const volverInicio = () => navigate('/')
  // setTimeout(()=>{
  // volverInicio()
  // }, 4000)
  return (
    <div>
      <br />
      <h1 className={styles2.titulo}>CONFIRMA TU CUENTA</h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <br/>
            <br/>
            <div className={styles.Borde}>
              {!cargando && <Aviso alerta={alerta} setAlerta={setAlerta} />}
              {cuentaConfirmada && <Link to="/" className="btn btn-primary btn-sm">Iniciar Sesion</Link>}
            </div>
          </div>
          <div className="col-6">
            <img src={"/img/Comic.png"} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Confirmar;
