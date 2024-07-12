import { format } from 'date-fns'
import { Calendar, MapPin, Settings2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { api } from '../../libs/axios'

export function DestinationAndDateHeader() {
  const navigate = useNavigate()
  const { tripId } = useParams<{ tripId: string }>()

  if (!tripId) {
    navigate('/')
  }

  const [tripDetails, setTripDetails] = useState<Trip | undefined>()

  const displayedDate =
    tripDetails && tripDetails?.ends_at && tripDetails?.starts_at
      ? `${format(tripDetails.starts_at, 'MMMM')}, ${format(tripDetails.starts_at, 'd')} to ${format(tripDetails.ends_at, 'd')}`
      : null

  useEffect(() => {
    async function fetchTripDetails() {
      const response = await api.get<{ trip: Trip }>(`/trips/${tripId}`)

      setTripDetails(response.data.trip)
    }

    fetchTripDetails()
  }, [tripId])

  return (
    <header className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{tripDetails?.destination}</span>
      </div>

      <div className="flex flex-row items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{displayedDate}</span>
        </div>

        <div className="h-6 w-px bg-zinc-800" />

        <Button variant="secondary">
          Change date/destination
          <Settings2 className="size-5" />
        </Button>
      </div>
    </header>
  )
}
