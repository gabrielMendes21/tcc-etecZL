'use client'

import axios from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export const PageContext = createContext({})

export function PageContextProvider({ children }) {
  const [user, setUser] = useState()

  const router = useRouter()

  // Login function => Called by the login page only
  async function login({ email, senha }) {
    try {
      const response = await axios.post('../api/login', {
        email,
        senha,
      })

      const { token } = response.data

      if (!token) {
        console.log('')
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
    console.log(token)

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
            // console.log(response.data)
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
    <PageContext.Provider value={{ login, user }}>
      {children}
    </PageContext.Provider>
  )
}
