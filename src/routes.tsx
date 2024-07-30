import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/LoginPage"

export const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}