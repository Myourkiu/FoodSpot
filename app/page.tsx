'use client'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Obtém o estado de login e tipo de usuário dos cookies
    const isLoggedIn = Cookies.get('session')
    const userType = Cookies.get('userType')

    // Redireciona com base no status de login e tipo de usuário
    if (isLoggedIn) {
      if (userType === 'admin') {
        router.push('/pages/admin/home')
      } else if (userType === 'customer') {
        router.push('/pages/customer/home')
      }
    } else {
      router.push('/pages/landing-page') // Redireciona para a landing page se não estiver logado
    }
  }, [router])

  return (
    <></>
  )
}
