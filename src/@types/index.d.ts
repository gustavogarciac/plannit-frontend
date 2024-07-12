interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

interface Link {
  id: string
  title: string
  url: string
}
