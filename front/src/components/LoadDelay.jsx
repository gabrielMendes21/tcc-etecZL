'use client'

import { useEffect, useState } from 'react'

export default function Delay({ children }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={isLoaded ? `opacity-100 transition-opacity` : `opacity-0`}>
      {children}
    </div>
  )
}
