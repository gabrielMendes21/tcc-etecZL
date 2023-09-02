'use client'

import axios from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export const PageContext = createContext({})

export function PageContextProvider({ children }) {
  const [user, setUser] = useState({})

  const router = useRouter()

  // Login function => Called by the login page only
  async function login({ email, senha }) {
    try {
      const response = await axios.post('http://localhost:3333/login', {
        email,
        senha,
      })

      const { message, token } = response.data

      if (!token) {
        console.log(message)
      } else {
        setCookie(null, 'auth-token', token, {
          maxAge: 60 * 60 * 24 * 7,
          path: '/',
        })
        router.push('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  // Take the JWT (if it exists) and return the user data
  useEffect(() => {
    const { 'auth-token': token } = parseCookies()

    if (router.pathname !== '/login') {
      if (token) {
        axios(`../api/auth?token=${token}`)
          .then((response) => setUser(response.data))
          .catch((err) => console.log(err))
      }
    }
  }, [router])

  return (
    <PageContext.Provider value={{ login }}>{children}</PageContext.Provider>
  )
}
