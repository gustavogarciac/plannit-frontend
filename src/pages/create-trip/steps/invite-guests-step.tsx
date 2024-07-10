import { ArrowRight, UserRoundPlus } from 'lucide-react'

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

      <button
        className="flex items-center gap-2 rounded-lg bg-purple-300 px-5 py-2 font-medium text-lime-950 transition-colors duration-200 ease-linear hover:bg-purple-400"
        onClick={handleOpenConfirmTripModal}
      >
        Confirm trip
        <ArrowRight className="size-5" />
      </button>
    </div>
  )
}
