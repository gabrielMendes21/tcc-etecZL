import '../globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MenuContextProvider } from '../context/MenuContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy hours',
  description:
    'Ambiente para alunos e coordenadores do programa P-TECH, da IBM',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} relative h-screen mt-16`}>
        <MenuContextProvider>
          <Header hasMenu />
          {children}
          <Footer />
        </MenuContextProvider>
      </body>
    </html>
  )
}
