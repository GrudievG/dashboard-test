export type EventStatus = 'active' | 'finished' | 'upcoming'

export interface Event {
  id: string
  date: number
  name: string
  location: string
  amount: number
  status: EventStatus
}

export interface EventCustomer {
  id: string
  name: string
  email: string
  tickets: number
  purchaseDate: number
  amount: number
}

export interface EventFull extends Event {
  price: number,
  customers: EventCustomer[]
}