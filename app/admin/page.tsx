'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

export default function AdminPage() {
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/auth/login')
        return
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      if (error || !profile || profile.role !== 'admin') {
        router.push('/dashboard')
        return
      }

      setIsAdmin(true)
      setLoading(false)
    }

    checkAdmin()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Проверка доступа...
      </div>
    )
  }

  if (!isAdmin) return null

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Админ‑панель</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-zinc-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Управление пользователями</h2>
            <p className="text-zinc-400">
              Здесь будет список зарегистрированных пользователей.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Заказы</h2>
            <p className="text-zinc-400">
              Здесь будет отображаться список заказов.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Логи гостей</h2>
            <p className="text-zinc-400">
              Здесь будут отображаться guest_logs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}