import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy hours',
  description:
    'Ambiente para alunos e coordenadores do programa P-TECH, da IBM',
}

export default function LoginLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} relative h-screen`}>{children}</body>
    </html>
  )
}
