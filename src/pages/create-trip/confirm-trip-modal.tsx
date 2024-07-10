import { AtSign, UserRound, XIcon } from 'lucide-react'

type ConfirmTripModalProps = {
  handleCloseConfirmTripModal: () => void
  createTrip: () => void
}

export function ConfirmTripModal({
  handleCloseConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Confirm trip creation</h2>
          <button onClick={handleCloseConfirmTripModal}>
            <XIcon className="size-5 text-zinc-400" />
          </button>
        </div>

        <p className="my-2 text-sm text-zinc-400">
          To confirm the trip creation to{' '}
          <span className="font-semibold text-zinc-100">
            Florianópolis, Brazil
          </span>{' '}
          on the date of{' '}
          <span className="font-semibold text-zinc-100">October 15, 2021</span>{' '}
          to
          <span className="font-semibold text-zinc-100">
            {' '}
            October 20, 2021
          </span>{' '}
          please fill the form below with the data.
        </p>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <UserRound className="size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Your personal email address"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <button
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-purple-300 px-5 font-medium text-lime-950 transition-colors duration-200 ease-linear hover:bg-purple-400"
            type="submit"
          >
            Confirm Trip
          </button>
        </form>
      </div>
    </div>
  )
}
