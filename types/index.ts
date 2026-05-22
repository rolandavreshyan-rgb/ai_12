export interface Subscription {
  id: string
  title: string
  description: string
  price: number
  created_at: string
}

export interface Order {
  id: string
  user_id: string
  subscription_id: string
  status: string
  created_at: string
}

export interface GuestLog {
  id: string
  ip_address: string
  user_agent: string
  visited_at: string
}

export interface User {
  id: string
  email: string
  role: 'user' | 'admin'
  created_at: string
}

export interface CartItem {
  subscription: Subscription
  quantity: number
}
