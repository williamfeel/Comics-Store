import React from "react";
import styles from "../styles/Aviso.module.css"

export const Aviso = ({alerta, setAlerta}) => {
  setTimeout (()=>{
    setAlerta({});
  }, 5000)  
  return(
    <div className = {`${alerta.error ? styles.error : styles.correcto}`}>
      {alerta.msg}
    </div>
  )
}

