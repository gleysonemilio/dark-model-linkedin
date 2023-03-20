import '../styles/globals.css'
import { Inter } from '@next/font/google'
import { Header } from '@/components/Header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head />

      <body>
        <div id="container">
          <Header />
          <div className='container-children'>{children}</div>
        </div>
      </body>
    </html>
  )
}
