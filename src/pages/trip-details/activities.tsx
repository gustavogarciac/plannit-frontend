import { CircleCheck, PlusIcon } from 'lucide-react'

type ActivitiesProps = {
  openCreateActivityModal: () => void
}

export function Activities({ openCreateActivityModal }: ActivitiesProps) {
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
        <div className="space-y-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-zinc-300">Day 17</span>
            <span className="text-xs text-zinc-500">Saturday</span>
          </div>
          <p className="text-sm text-zinc-500">
            There are no activities on this day.
          </p>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-zinc-300">Day 18</span>
            <span className="text-xs text-zinc-500">Sunday</span>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
              <CircleCheck className="size-5 text-purple-300" />
              <span className="text-zinc-100">Group </span>
              <span className="ml-auto text-zinc-400">8am</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
              <CircleCheck className="size-5 text-purple-300" />
              <span className="text-zinc-100">Church</span>
              <span className="ml-auto text-zinc-400">4pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
