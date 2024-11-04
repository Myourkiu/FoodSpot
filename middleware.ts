// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Obtém o estado de login e tipo de usuário dos cookies
  const isLoggedIn = request.cookies.get('session')?.value
  const userType = request.cookies.get('userType')?.value

  // URL da requisição
  const url = request.nextUrl.clone()

  // Se o usuário não está logado e tenta acessar uma página restrita, redireciona para a página de login
  if (!isLoggedIn && !url.pathname.startsWith('/pages/login') && !url.pathname.startsWith('/pages/landing-page')) {
    url.pathname = '/pages/login' // ou '/login'
    return NextResponse.redirect(url)
  }

  // Verifica o tipo de usuário e redireciona para a página correta
  if (isLoggedIn) {
    if (userType === 'admin' && url.pathname.startsWith('/pages/customer')) {
      url.pathname = '/pages/admin/home'
      return NextResponse.redirect(url)
    } else if (userType === 'customer' && url.pathname.startsWith('/pages/admin')) {
      url.pathname = '/pages/customer/home'
      return NextResponse.redirect(url)
    }
  }

  // Permite o acesso à página se nenhuma das condições de redirecionamento foram ativadas
  return NextResponse.next()
}

// Define as rotas onde o middleware será aplicado
export const config = {
  matcher: ['/pages/admin/:path*', '/pages/customer/:path*', '/pages/landing-page', '/pages/login'],
}
