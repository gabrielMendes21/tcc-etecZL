'use client'

import axios from 'axios'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export const PageContext = createContext({})

export function PageContextProvider({ children }) {
  const [user, setUser] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = () => setIsOpen(!isOpen)

  const router = useRouter()

  // Login function => Called by the login page only
  async function login({ email, senha }) {
    // Login request
    try {
      const loginResponse = await axios.post('../api/login', {
        email,
        senha,
      })

      // Get the token and the user info
      const { token, user } = loginResponse.data

      // Create the auth cookie
      setCookie(null, 'auth-token', token, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })

      const userInfo = user

      // Redirect to user dashboard
      if (userInfo.tipoCoordenador) {
        if (userInfo.tipoCoordenador === 'Coordenador ETEC') {
          router.push('/coordenador-ETEC/dashboard')
        } else {
          router.push('/coordenador-IBM/dashboard')
        }
      } else {
        router.push('/')
      }
    } catch (err) {
      console.log(err.response.data.error)
    }
  }

  // Logout function
  function logout() {
    destroyCookie(null, 'auth-token')
    router.push('/login')
  }

  // Take the JWT (if it exists) and return the user data
  useEffect(() => {
    const { 'auth-token': token } = parseCookies()

    if (router.pathname !== '/login') {
      if (token) {
        // axios('../api/login', {
        //   headers: {
        //     Authorization: `bearer ${token}`,
        //   },
        // })
        axios('../api/login', {
          params: {
            token,
          },
        })
          .then((response) => {
            setUser(response.data)
          })
          .catch((err) => {
            console.log(err)
            router.push('/')
          })
      }
    }
  }, [router])

  return (
    <PageContext.Provider
      value={{ login, user, isOpen, setIsOpen, handleMenu, logout }}
    >
      {children}
    </PageContext.Provider>
  )
}
