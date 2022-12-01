import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';



import "./estilos.css";

import {App} from "./App";


//Renderización 
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <App/>
  //</React.StrictMode>
)