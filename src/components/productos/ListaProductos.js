import {Navegacion}  from "../Navbar";
import styles from "../../styles/App.module.css";
import { ProductosGrid } from "./ProductosGrid.js";

//Componente = es la base fundamental de react
//Con cada componente se hace un trabajo diferente en cada pagina. Un componente puede contener otros componentes

export const ListaProductos = () => {
 
  return (
    <div>
      <Navegacion/>
      <header>
        <h1 className={styles.titulo}>Lista de Productos</h1>
      </header>
      <main>
        <ProductosGrid/>
      </main>
    </div>
  )
}

