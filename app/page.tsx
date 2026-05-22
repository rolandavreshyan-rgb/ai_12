'use client'

import { useEffect } from 'react'
import { useCart } from '@/components/CartContext'
import { Subscription } from '@/types'

const basicSubscriptions: Subscription[] = [
  {
    id: '1',
    title: 'AI Мини',
    description: 'Базовый доступ к AI для личного использования. Идеально для начинающих.',
    price: 100,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'AI Стандарт',
    description: 'Расширенный доступ к 10+ моделям. Отличный выбор для фрилансеров.',
    price: 300,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'AI Расширенный',
    description: 'Полный доступ к базовым и продвинутым моделям с приоритетом.',
    price: 700,
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'AI Максимум',
    description: 'Максимальный доступ для частных пользователей. Без ограничений.',
    price: 1000,
    created_at: new Date().toISOString(),
  },
]

const premiumSubscriptions: Subscription[] = [
  {
    id: '5',
    title: 'AI Бизнес',
    description: 'Решение для малого и среднего бизнеса. Командный доступ.',
    price: 5000,
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'AI Профи',
    description: 'Оптимальный тариф для профессионалов и растущих компаний.',
    price: 8000,
    created_at: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'AI Корпоративный',
    description: 'Полноценное корпоративное решение с расширенной поддержкой.',
    price: 12000,
    created_at: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'AI Enterprise',
    description: 'Премиум-решение для крупных компаний. Индивидуальные условия.',
    price: 15000,
    created_at: new Date().toISOString(),
  },
]

export default function Home() {
  const { addToCart } = useCart()

  // Guest logging
  useEffect(() => {
    const logGuest = async () => {
      try {
        await fetch('/api/guest-log', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userAgent: navigator.userAgent,
          }),
        })
      } catch (e) {
        // Игнорируем ошибку в dev-режиме
      }
    }
    logGuest()
  }, [])

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU')
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      {/* Hero */}
      <div className="text-center mb-24">
        <h1 className="text-7xl font-semibold tracking-[-2.5px] mb-6 leading-none">
          Премиальные AI-подписки
        </h1>
        <p className="text-xl text-zinc-400 max-w-lg mx-auto tracking-[-0.2px]">
          Современные решения искусственного интеллекта для частных лиц и бизнеса.
        </p>
      </div>

      {/* Базовые тарифы */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-zinc-800" />
          <span className="text-sm uppercase tracking-[2px] text-zinc-500 font-medium">Базовые тарифы</span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {basicSubscriptions.map((sub) => (
            <div
              key={sub.id}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold tracking-tight mb-3">{sub.title}</h3>
                <p className="text-zinc-400 text-[15px] leading-snug">{sub.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-semibold tabular-nums tracking-[-1px]">
                    {formatPrice(sub.price)}
                  </span>
                  <span className="text-zinc-500 ml-1.5 text-lg">₽</span>
                </div>
                <div className="text-sm text-zinc-500 mt-1">в месяц</div>
              </div>

              <button
                onClick={() => addToCart(sub)}
                className="w-full py-3.5 rounded-xl border border-white text-sm font-medium tracking-wide transition-all active:scale-[0.985] hover:bg-white hover:text-black"
              >
                Оформить подписку
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Премиальные тарифы */}
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-zinc-800" />
          <span className="text-sm uppercase tracking-[2px] text-zinc-500 font-medium">Премиальные тарифы</span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumSubscriptions.map((sub, index) => (
            <div
              key={sub.id}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-0.5 hover:shadow-2xl relative"
            >
              {index === 1 && (
                <div className="absolute -top-3 right-6 bg-white text-black text-xs font-medium px-4 py-1 rounded-full tracking-wider">
                  Популярный
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold tracking-tight mb-3">{sub.title}</h3>
                <p className="text-zinc-400 text-[15px] leading-snug">{sub.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-semibold tabular-nums tracking-[-1px]">
                    {formatPrice(sub.price)}
                  </span>
                  <span className="text-zinc-500 ml-1.5 text-lg">₽</span>
                </div>
                <div className="text-sm text-zinc-500 mt-1">в месяц</div>
              </div>

              <button
                onClick={() => addToCart(sub)}
                className="w-full py-3.5 rounded-xl border border-white text-sm font-medium tracking-wide transition-all active:scale-[0.985] hover:bg-white hover:text-black"
              >
                Оформить подписку
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-20 text-sm text-zinc-500 tracking-wide">
        Все тарифы включают 14-дневный период возврата средств
      </div>
    </main>
  )
}