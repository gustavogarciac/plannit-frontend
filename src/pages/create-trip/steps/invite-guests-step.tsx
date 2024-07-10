import { ArrowRight, UserRoundPlus } from 'lucide-react'

import { Button } from '../../../components/button'

type InviteGuestsStepProps = {
  handleOpenGuestsModal: () => void
  handleOpenConfirmTripModal: () => void
  emailsToInvite: string[]
}

export function InviteGuestsStep({
  handleOpenGuestsModal,
  handleOpenConfirmTripModal,
  emailsToInvite,
}: InviteGuestsStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <button
        type="button"
        onClick={handleOpenGuestsModal}
        className="flex flex-1 items-center gap-2"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="flex-1 text-left text-lg text-zinc-100">
            {emailsToInvite.length} invited guests
          </span>
        ) : (
          <span className="flex-1 text-left text-lg text-zinc-400">
            Who&apos;s coming?
          </span>
        )}
      </button>

      <div className="h-6 w-px bg-zinc-800" />

      <Button onClick={handleOpenConfirmTripModal}>
        Confirm trip
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}
