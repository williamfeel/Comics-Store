import axios from "axios";

// Cliente axios
const clienteAxios = axios.create({
  baseURL: `http://localhost:3001`,
});
export default clienteAxios;
