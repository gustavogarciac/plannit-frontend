import { AxiosError } from 'axios'
import { Tag, XIcon } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { CustomToast } from '../../components/custom-toast'
import { api } from '../../libs/axios'

type Props = {
  closeCreateLinkModal: () => void
}

export const CreateLinkModal = ({ closeCreateLinkModal }: Props) => {
  const navigate = useNavigate()
  const { tripId } = useParams<{ tripId: string }>()

  if (!tripId) {
    navigate('/')
  }

  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  async function handleCreateLink(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setLoading(true)

      await api.post(`/trips/${tripId}/links`, {
        title,
        url,
      })

      toast.custom((t) => (
        <CustomToast
          t={t}
          variant="success"
          message="Link registered successfuly!"
        />
      ))

      navigate(0)
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message
        console.log(error)
        return toast.custom((t) => (
          <CustomToast t={t} variant="error" message={message} />
        ))
      }

      toast.custom((t) => (
        <CustomToast t={t} variant="error" message="Error registering link!" />
      ))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">New link</h2>
          <button onClick={closeCreateLinkModal}>
            <XIcon className="size-5 text-zinc-400" />
          </button>
        </div>

        <p className="my-2 text-sm text-zinc-400">
          Every guest can access the links. Be careful with the information you
          share.
        </p>

        <form onSubmit={handleCreateLink} className="space-y-3">
          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="What's the title of the link?"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="url"
              name="url"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              placeholder="Link url"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <Button type="submit" size="full" disabled={loading}>
            Save link
          </Button>
        </form>
      </div>
    </div>
  )
}
