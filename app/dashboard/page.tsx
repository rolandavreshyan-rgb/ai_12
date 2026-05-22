'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      } else {
        router.push('/login')
      }
      setLoading(false)
    }
    getUser()
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Загрузка...</div>
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Ваш профиль</h1>
        <div className="bg-zinc-900 p-6 rounded-lg">
          <p className="text-xl">Email: {user?.email}</p>
          <p className="text-xl mt-2">ID пользователя: {user?.id}</p>
          <button onClick={handleSignOut} className="mt-8 px-4 py-2 bg-red-600 rounded-md hover:bg-red-700">
            Выйти
          </button>
        </div>
      </div>
    </div>
  )
}
