'use client'

import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({ email, password })
    if (!error) router.push('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto pt-20 px-6">
      <h1 className="text-3xl font-semibold mb-8">Create account</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-lg" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-zinc-900 border border-zinc-800 p-3 rounded-lg" required />
        <button type="submit" className="btn-primary w-full">Create account</button>
      </form>
    </div>
  )
}
