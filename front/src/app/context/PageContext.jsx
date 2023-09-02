'use client'

import axios from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export const PageContext = createContext({})

export function PageContextProvider({ children }) {
  // Auth
  const router = useRouter()
  async function login({ email, senha }) {
    try {
      const response = await axios.post('http://localhost:3333/login', {
        email,
        senha,
      })

      const token = response.data
      setCookie(null, 'auth-token', token, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })
      router.push('/')
      console.log('teste')
    } catch (err) {
      console.log(err)
    }
  }

  // useEffect(() => {
  //   const { 'auth-token': token } = parseCookies()

  //   if (router.pathname !== '/login') {
  //     if (token) {
  //       axios(`../api/auth?token=${token}`)
  //         .then((response) => setUser(response.data))
  //         .catch((err) => console.log(err))
  //     }
  //   }
  // }, [])

  return (
    <PageContext.Provider value={{ login }}>{children}</PageContext.Provider>
  )
}
