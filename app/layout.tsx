import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/CartContext'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'AI Subscriptions',
  description: 'Premium AI tools subscription platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="bg-black text-white min-h-screen">
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}