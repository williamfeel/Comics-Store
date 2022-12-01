import {VentasProducto} from "./VentasProducto.js";
import styles from "../../styles/App.module.css";
import {Navegacion}  from "../Navbar";



export const Ventas =() =>{
  
  return (
    <>
    <div>
      <Navegacion/>
      <header>
        <h1 className={styles.titulo}>Ventas</h1>
      </header>
      <main>
       <VentasProducto/>     
      </main>
    </div>
    </>
  );
}

