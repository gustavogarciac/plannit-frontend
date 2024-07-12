import { AtSign, UserRound, XIcon } from 'lucide-react'
import { FormEvent } from 'react'

import { Button } from '../../components/button'

type ConfirmTripModalProps = {
  handleCloseConfirmTripModal: () => void
  createTrip: (e: FormEvent<HTMLFormElement>) => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
  ownerName: string
  ownerEmail: string
}

export function ConfirmTripModal({
  handleCloseConfirmTripModal,
  createTrip,
  setOwnerEmail,
  setOwnerName,
  ownerEmail,
  ownerName,
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
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="Your full name"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              value={ownerEmail}
              onChange={(e) => setOwnerEmail(e.target.value)}
              placeholder="Your personal email address"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <Button type="submit" size="full">
            Confirm Trip
          </Button>
        </form>
      </div>
    </div>
  )
}
