import {Navegacion}  from "../Navbar";
import styles from "../../styles/App.module.css";
import {Formulario} from "./Formulario.js";


export const GestionarProducto = () => {
  return (
    <>
    <div>
      <Navegacion/>
      <header>
        <h1 className={styles.titulo}> Gestionar Producto </h1>
      </header>
      <main>
      <Formulario/>
      </main> 
    </div>
    </>
  );
}
