import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ListaProductos } from "./components/productos/ListaProductos.js";

import { GestionarProducto } from "./components/productos/GestionarProducto.js";
import { Ventas } from "./components/ventas/Ventas.js";

//Usuarios
import { Registro } from "./components/Usuarios/Registro.js";
import { OlvidePassword } from "./components/Usuarios/OlvidePassword.js";
import Confirmar from "./components/Usuarios/Confirmar.js";
import { Perfil } from "./components/Usuarios/Perfil.js";
//Inicio
import { Login } from "./components/Login.js";

import { Cart } from "./components/carrito/Cart";
import { Inicio } from "./Layout/Inicio.js";
import { RutaProtegida } from "./Layout/RutaProtegida.js";
import { CartProvider } from "./components/context/CartProvider.js";
import { AuthProvider } from "./components/context/AuthProvider.js";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Inicio />}>
              <Route index element={<Login />} />
              <Route path="Registro" element={<Registro />} />
              <Route path="Password" element={<OlvidePassword />} />
              <Route path="Confirmar/:id" element={<Confirmar />} />
            </Route>
            <Route path="/Admin" element={<RutaProtegida />}>
              <Route index element={<GestionarProducto />} />
              <Route path="Gestionar" element={<GestionarProducto />} />
              <Route path="Ventas" element={<Ventas />} />
            </Route>
            <Route path="/User" element={<RutaProtegida />}>
              <Route index element={<ListaProductos />} />
              <Route path="Cart" element={<Cart />} />
              <Route path="Perfil" element={<Perfil />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
