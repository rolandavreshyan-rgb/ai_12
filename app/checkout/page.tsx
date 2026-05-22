'use client'

import { useCart } from '@/components/CartContext'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const { cartItems, removeFromCart, clearCart } = useCart()
  const router = useRouter()

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-2xl">Корзина пуста</p>
      </div>
    )
  }

  const handleCheckout = () => {
    alert('Спасибо за заказ! (Имитация оплаты)')
    clearCart()
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Оформление заказа</h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-4 bg-zinc-900 rounded-lg mb-4"
          >
            <div>
              <h3 className="text-xl">{item.title}</h3>
              <p>{item.price.toLocaleString('ru-RU')} ₽</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Удалить
            </button>
          </div>
        ))}

        <div className="mt-8 text-2xl font-bold">
          Итого: {total.toLocaleString('ru-RU')} ₽
        </div>

        <button
          onClick={handleCheckout}
          className="mt-6 w-full bg-white text-black py-3 rounded-lg"
        >
          Оплатить
        </button>
      </div>
    </div>
  )
}