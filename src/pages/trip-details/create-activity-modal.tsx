import { AxiosError } from 'axios'
import { Calendar, Tag, XIcon } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { CustomToast } from '../../components/custom-toast'
import { api } from '../../libs/axios'

type CreateActivityModalProps = {
  closeCreateActivyModal: () => void
}

export function CreateActivityModal({
  closeCreateActivyModal,
}: CreateActivityModalProps) {
  const navigate = useNavigate()
  const { tripId } = useParams<{ tripId: string }>()

  if (!tripId) {
    navigate('/')
  }

  const [title, setTitle] = useState('')
  const [occursAt, setOccursAt] = useState('')
  const [loading, startLoading] = useState(false)

  async function handleCreateActivity(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      startLoading(true)
      if (!title || !occursAt) {
        return
      }

      await api.post<{ activityId: string }>(`/trips/${tripId}/activities`, {
        title,
        occurs_at: occursAt,
      })

      toast.custom((t) => (
        <CustomToast
          t={t}
          variant="success"
          message="Activity registered successfuly!"
        />
      ))

      navigate(0)
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message
        return toast.custom((t) => (
          <CustomToast t={t} variant="error" message={message} />
        ))
      }

      toast.custom((t) => (
        <CustomToast
          t={t}
          variant="error"
          message={'Failed to create activity. Try again later.'}
        />
      ))
    } finally {
      startLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">New activity</h2>
          <button onClick={closeCreateActivyModal}>
            <XIcon className="size-5 text-zinc-400" />
          </button>
        </div>

        <p className="my-2 text-sm text-zinc-400">
          Every guest can see the activities
        </p>

        <form onSubmit={handleCreateActivity} className="space-y-3">
          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="What's the activity"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="occurs_at"
              onChange={(e) => setOccursAt(e.target.value)}
              value={occursAt}
              placeholder="Date and time of the activity"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <Button type="submit" size="full" disabled={loading}>
            Save activity
          </Button>
        </form>
      </div>
    </div>
  )
}
