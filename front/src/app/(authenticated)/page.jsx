'use client'

import Main from '@/components/Main'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => router.push('/dashboard'), [])
  return (
    <Main>
      <h1>Moving to dashboard...</h1>
    </Main>
  )
}
