import { useState, useEffect } from "react";
import { Aviso } from "../Aviso.js"
import AuthContext from "../context/AuthProvider";
import { useContext } from "react";
import {Navegacion}  from "../Navbar.js";

import styles2 from "../../styles/Titulo.module.css";

const useAuth = () => useContext(AuthContext);

export const Perfil = () => {

  const { auth, actualizarPerfil } = useAuth()
  const [ perfil, setPerfil] = useState({})
  const [ alerta, setAlerta] = useState({})

  useEffect( () => {
    setPerfil(auth.usuario)
    console.log(auth);
  }, [auth])
  
  /* const [verVerfil, setVerPerfil] = useState(false); */

  /* useEffect(()=>setVerPerfil(true),[]) */

  const handleSubmit = async e => {
    e.preventDefault()
    const { nombre, email } = perfil
    if([nombre, email].includes('')) {
        setAlerta({
            msg: 'Email y Nombre son obligatorios',
            error: true
        })
        return
    }

    const resultado = await actualizarPerfil(perfil)

    setAlerta(resultado)
  }

  const { msg } = alerta


  return (
    <div>
      <Navegacion/>
      <br />
      <h1 className={styles2.titulo}>MI PERFIL</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              {msg && <Aviso alerta={alerta} setAlerta={setAlerta}/>}

              <form className={styles2.Borde} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    className="form-control"
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="ej: Juan David Ariza Torres"
                    value={perfil.nombre || ""}
                    onChange={ e => setPerfil({
                      ...perfil, 
                      [e.target.name] : e.target.value
                  })}
                    //onChange={(e) => setNombre(e.target.value)} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="ej: correo@correo.com"
                    value={perfil.email || ""}
                    onChange={ e => setPerfil({
                      ...perfil, 
                      [e.target.name] : e.target.value})}
                    //onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="direccion" className="font-medium">
                    Direccion
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    className="form-control"
                    placeholder="ej: Calle 12 #34-56"
                    value={perfil.direccion || ""}
                    onChange={ e => setPerfil({
                      ...perfil, 
                      [e.target.name] : e.target.value})}
                    //onChange={(e) => setDireccion(e.target.value)} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">
                    Telefono
                  </label>
                  <input
                    type="number"
                    id="telefono"
                    name="telefono"
                    className="form-control"
                    placeholder="ej: 300123456"
                    value={perfil.telefono || ""}
                    onChange={ e => setPerfil({
                      ...perfil, 
                      [e.target.name] : e.target.value})}
                    //onChange={(e) => setTelefono(e.target.value)} 
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="*********"
                    value={perfil.password}
                    onChange={ e => setPerfil({
                      ...perfil, 
                      [e.target.name] : e.target.value})}
                    //onChange= {(e) => setPassword(e.target.value)} 
                  />
                </div>                
                <br />
                <input
                  type="submit"
                  value="Editar"
                  className="btn btn-primary btn-sm"
                />
              </form>
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

