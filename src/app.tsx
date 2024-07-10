import {
  ArrowRight,
  AtSign,
  Calendar,
  MapPin,
  PlusIcon,
  Settings2,
  UserRound,
  UserRoundPlus,
  XIcon,
} from 'lucide-react'
import { FormEvent, useState } from 'react'

import { Logo } from './components/logo'

function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] =
    useState<boolean>(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  function handleOpenGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function handleCloseGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function handleOpenGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function handleCloseGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function handleOpenConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function handleCloseConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)

    const email = data.get('email')

    if (!email) return

    if (emailsToInvite.includes(email.toString()))
      return e.currentTarget.reset()

    setEmailsToInvite((prev) => [...prev, email.toString()])

    e.currentTarget.reset()
  }

  function removeEmailToInvite(email: string) {
    setEmailsToInvite((prev) => prev.filter((item) => item !== email))
  }

  return (
    <div className="flex h-screen items-center justify-center bg-pattern bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="mx-auto w-fit">
          <Logo />
        </div>
        <p className="text-lg text-zinc-300">
          Invite your friends and plan your next trip!
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
            <div className="flex flex-1 items-center gap-2">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Where will you go?"
                className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
              />
            </div>

            <div className="flex w-fit items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="When?"
                className="w-28 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
              />
            </div>

            <div className="h-6 w-px bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-colors duration-200 ease-linear hover:bg-zinc-700"
                onClick={handleCloseGuestsInput}
              >
                Change date/destination
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                className="flex items-center gap-2 rounded-lg bg-purple-300 px-5 py-2 font-medium text-lime-950 transition-colors duration-200 ease-linear hover:bg-purple-400"
                onClick={handleOpenGuestsInput}
              >
                Continue
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
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
          )}
        </div>

        <p className="text-sm text-zinc-500">
          When planning your trip with Plann.it you automatically agree <br />{' '}
          to our{' '}
          <a href="#" className="text-zinc-300 underline">
            terms of service
          </a>{' '}
          and{' '}
          <a href="#" className="text-zinc-300 underline">
            privacy policy
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
          <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Select guests</h2>
              <button onClick={handleCloseGuestsModal}>
                <XIcon className="size-5 text-zinc-400" />
              </button>
            </div>

            <p className="my-2 text-sm text-zinc-400">
              Guests will receive an email to confirm the participation on the
              trip!
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
      )}

      {isConfirmTripModalOpen && (
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
              <span className="font-semibold text-zinc-100">
                October 15, 2021
              </span>{' '}
              to
              <span className="font-semibold text-zinc-100">
                {' '}
                October 20, 2021
              </span>{' '}
              please fill the form below with the data.
            </p>

            <form onSubmit={addNewEmailToInvite} className="space-y-3">
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
      )}
    </div>
  )
}

export { App }
