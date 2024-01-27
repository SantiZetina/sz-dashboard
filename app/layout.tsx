import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider} from '@/components/ui/theme-provider'
import Navbar from '@/components/ui/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Santiago's Portfolio`,
  description: 'Personal portfolio of Santiago',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
      {children}
      </body>
    </html>
  )
}
