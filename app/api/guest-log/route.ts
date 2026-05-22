import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  
  const { userAgent } = await request.json()
  const ip = request.headers.get('x-forwarded-for') || 'unknown'

  await supabase.from('guest_logs').insert({
    ip_address: ip,
    user_agent: userAgent,
  })

  return NextResponse.json({ success: true })
}
