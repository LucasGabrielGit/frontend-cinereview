/* eslint-disable @typescript-eslint/no-explicit-any */
// criar um context para armazenar os dados do usuário logado
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../axios/api";
import { User } from "../model/User";

interface IProps {
  children: React.ReactNode
}

export interface AuthContextType {
  user: User | null
  signIn: (user: User) => Promise<void>
  signOut: () => void
  isAuthenticated: boolean
  isLoading: boolean
  token: string | null
  error: string | null
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const signIn = async (user: User) => {
    setIsLoading(true)
    console.log(user)
    try {
      if (user.email) {
        api.post("/user/login", {
          email: user.email,
          password_hash: user.password_hash,
        }).then(response => {
          setIsLoading(false)
          setUser(response.data.user)
          setToken(response.data.token)

          setTimeout(() => {
            navigate('/home')
          }, 2000)
        }).catch(error => {
          setError(error.response.data.message)
          setIsLoading(false)
        })
      }
    } catch (error: any) {
      setIsLoading(false)
      setError(error.response.data.message)
    }
  }

  const signOut = () => {
    setUser(null)
    setToken(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, signIn, signOut, isLoading, token, error }}>
      {children}
    </AuthContext.Provider>
  )
}
