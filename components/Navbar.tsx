'use client'

import Link from 'next/link'
import { useCart } from '@/components/CartContext'

export default function Navbar() {
  const { cartItems } = useCart()

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black border-b border-zinc-800">
      <Link href="/" className="text-xl font-bold">
        AI Subscriptions
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/dashboard" className="hover:text-zinc-400">
          Профиль
        </Link>

        <Link
          href="/checkout"
          className="flex items-center gap-2 hover:text-zinc-400"
        >
          Корзина
          {cartItems.length > 0 && (
            <span className="bg-white text-black text-xs px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
