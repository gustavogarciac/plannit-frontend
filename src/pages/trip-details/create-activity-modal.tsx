import { Calendar, Tag, XIcon } from 'lucide-react'

import { Button } from '../../components/button'

type CreateActivityModalProps = {
  closeCreateActivyModal: () => void
}

export function CreateActivityModal({
  closeCreateActivyModal,
}: CreateActivityModalProps) {
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

        <form className="space-y-3">
          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="text"
              name="title"
              placeholder="What's the activity"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Date and time of the activity"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <Button type="submit" size="full">
            Save activity
          </Button>
        </form>
      </div>
    </div>
  )
}
