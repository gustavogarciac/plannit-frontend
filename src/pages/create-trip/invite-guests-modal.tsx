import { AtSign, PlusIcon, XIcon } from 'lucide-react'
import { FormEvent } from 'react'

type InviteGuestsModalProps = {
  handleCloseGuestsModal: () => void
  emailsToInvite: string[]
  removeEmailToInvite: (email: string) => void
  addNewEmailToInvite: (e: FormEvent<HTMLFormElement>) => void
}

export function InviteGuestsModal({
  handleCloseGuestsModal,
  emailsToInvite,
  removeEmailToInvite,
  addNewEmailToInvite,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Select guests</h2>
          <button onClick={handleCloseGuestsModal}>
            <XIcon className="size-5 text-zinc-400" />
          </button>
        </div>

        <p className="my-2 text-sm text-zinc-400">
          Guests will receive an email to confirm the participation on the trip!
        </p>

        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5">
            <span className="text-zinc-300">joana@email.com</span>
            <button type="button">
              <XIcon className="size-4 text-zinc-400" />
            </button>
          </div>

          {emailsToInvite.map((email) => (
            <div
              key={email}
              onClick={() => removeEmailToInvite(email)}
              className="flex items-center gap-2 rounded-md bg-zinc-800 px-2.5 py-1.5"
            >
              <span className="text-zinc-300">{email}</span>
              <button type="button">
                <XIcon className="size-4 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-zinc-800"></div>

        <form
          onSubmit={addNewEmailToInvite}
          className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 p-2.5"
        >
          <div className="flex flex-1 items-center gap-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Type guest email"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <button
            className="flex items-center gap-2 rounded-lg bg-purple-300 px-5 py-2 font-medium text-lime-950 transition-colors duration-200 ease-linear hover:bg-purple-400"
            type="submit"
          >
            Invite
            <PlusIcon className="size-5" />
          </button>
        </form>
      </div>
    </div>
  )
}
