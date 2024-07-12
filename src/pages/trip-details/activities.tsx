import { format, isPast } from 'date-fns'
import { CircleCheck, CircleDashed, PlusIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../libs/axios'

type ActivitiesProps = {
  openCreateActivityModal: () => void
}

type ActivityWithData = {
  date: string
  activities: Activity[]
}

export function Activities({ openCreateActivityModal }: ActivitiesProps) {
  const navigate = useNavigate()
  const { tripId } = useParams<{ tripId: string }>()

  if (!tripId) {
    navigate('/')
  }

  const [activities, setParticipants] = useState<ActivityWithData[]>([])

  useEffect(() => {
    async function fetchParticipants() {
      const response = await api.get<{ activities: ActivityWithData[] }>(
        `/trips/${tripId}/activities`,
      )

      setParticipants(response.data.activities)
    }

    fetchParticipants()
  }, [tripId])

  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-3xl font-semibold">Activities</h2>
        <button
          className="flex items-center gap-2 rounded-lg bg-purple-300 px-5 py-2 font-medium text-lime-950 transition-colors duration-200 ease-linear hover:bg-purple-400"
          onClick={openCreateActivityModal}
        >
          <PlusIcon className="size-5" />
          New Activity
        </button>
      </div>

      <div className="space-y-8">
        {activities.map((item, index) => (
          <div className="space-y-2.5" key={`${item.date} + ${index}`}>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-semibold text-zinc-300">
                Day {format(item.date, 'd')}
              </span>
              <span className="text-xs text-zinc-500">
                ({format(item.date, 'EEEE')})
              </span>
            </div>

            {item.activities.length > 0 ? (
              item.activities.map((activity) => (
                <div className="space-y-2.5" key={activity.id}>
                  <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                    {isPast(activity.occurs_at) ? (
                      <CircleCheck className="size-5 text-purple-300" />
                    ) : (
                      <CircleDashed className="size-5 text-zinc-400" />
                    )}
                    <span className="text-zinc-100">{activity.title}</span>
                    <span className="ml-auto text-zinc-400">
                      {format(activity.occurs_at, 'h:mm a')}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-zinc-500">
                There are no activities on this day.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
