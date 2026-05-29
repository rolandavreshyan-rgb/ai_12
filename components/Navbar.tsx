'use client'

import Link from 'next/link'
import { useCart } from '@/components/CartContext'

export default function Navbar() {
  const { cartItems } = useCart()

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-8 py-4 bg-black border-b border-zinc-800">
      
      {/* Логотип */}
      <Link href="/" className="text-xl font-bold mb-4 md:mb-0">
        AI Subscriptions
      </Link>

      {/* Основная навигация */}
      <div className="flex items-center gap-6 mb-4 md:mb-0">
        <Link href="/dashboard" className="hover:text-zinc-400 transition">
          Профиль
        </Link>

        <Link
          href="/checkout"
          className="flex items-center gap-2 hover:text-zinc-400 transition"
        >
          Корзина
          {cartItems.length > 0 && (
            <span className="bg-white text-black text-xs px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>

      {/* Юридические ссылки */}
      <div className="flex gap-4 text-sm text-zinc-400">
        <Link href="/privacy-policy" className="hover:text-white transition">
          Политика
        </Link>
        <Link href="/terms-of-service" className="hover:text-white transition">
          Соглашение
        </Link>
      </div>

    </nav>
  )
}