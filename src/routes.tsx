import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/LoginPage"
import { Home } from "./pages/Home"

export const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}