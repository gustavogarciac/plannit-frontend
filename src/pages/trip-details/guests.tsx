import { CircleDashed, UsersRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { api } from '../../libs/axios'

export function Guests() {
  const navigate = useNavigate()
  const { tripId } = useParams<{ tripId: string }>()

  if (!tripId) {
    navigate('/')
  }

  const [participants, setParticipants] = useState<Participant[]>([])

  useEffect(() => {
    async function fetchParticipants() {
      const response = await api.get<{ participants: Participant[] }>(
        `/trips/${tripId}/participants`,
      )

      setParticipants(response.data.participants)
    }

    fetchParticipants()
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Guests</h2>

      <div className="space-y-5">
        {participants.map((part) => (
          <div
            className="flex items-center justify-between gap-4"
            key={part.id}
          >
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {part.name ?? 'Pending'}
              </span>
              <span className="block truncate text-xs font-medium text-zinc-400">
                {part.email}
              </span>
            </div>
            <CircleDashed className="size-5 shrink-0 text-zinc-400" />
          </div>
        ))}
      </div>

      <Button variant="secondary" size="full">
        <UsersRound className="size-5" />
        Manage Guests
      </Button>
    </div>
  )
}
