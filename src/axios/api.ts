import axios from "axios";

const REACT_APP_API_PORT = 3000

export const api = axios.create({
  baseURL: `http://localhost:${REACT_APP_API_PORT}`,
})