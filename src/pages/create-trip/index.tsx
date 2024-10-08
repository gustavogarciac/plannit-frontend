import { AxiosError } from 'axios'
import { FormEvent, useState } from 'react'
import { DateRange } from 'react-day-picker'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { CustomToast } from '../../components/custom-toast'
import { Logo } from '../../components/logo'
import { api } from '../../libs/axios'
import { ConfirmTripModal } from './confirm-trip-modal'
import { InviteGuestsModal } from './invite-guests-modal'
import { DestinationAndStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'

function CreateTripPage() {
  const navigate = useNavigate()
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] =
    useState<boolean>(false)

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >()

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  async function createTrip(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      if (!destination) return
      if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) return
      if (emailsToInvite.length === 0) return
      if (!ownerName || !ownerEmail) return

      const response = await api.post<{ tripId: string }>('/trips', {
        destination,
        starts_at: eventStartAndEndDates.from,
        ends_at: eventStartAndEndDates.to,
        emails_to_invite: emailsToInvite,
        owner_name: ownerName,
        owner_email: ownerEmail,
      })

      const { tripId } = response.data

      navigate(`/trips/${tripId}`)
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message
        console.log(error)
        return toast.custom((t) => (
          <CustomToast t={t} variant="error" message={message} />
        ))
      }

      toast.custom((t) => (
        <CustomToast t={t} variant="error" message={'Error creating trip!'} />
      ))
    }
  }

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
          <DestinationAndStep
            handleOpenGuestsInput={handleOpenGuestsInput}
            handleCloseGuestsInput={handleCloseGuestsInput}
            isGuestsInputOpen={isGuestsInputOpen}
            setDestination={setDestination}
            setEventsStartAndEndDates={setEventStartAndEndDates}
            eventsStartAndEndDates={eventStartAndEndDates}
            destination={destination}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              handleOpenConfirmTripModal={handleOpenConfirmTripModal}
              handleOpenGuestsModal={handleOpenGuestsModal}
            />
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
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          emailsToInvite={emailsToInvite}
          handleCloseGuestsModal={handleCloseGuestsModal}
          removeEmailToInvite={removeEmailToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          createTrip={createTrip}
          handleCloseConfirmTripModal={handleCloseConfirmTripModal}
          setOwnerEmail={setOwnerEmail}
          setOwnerName={setOwnerName}
          ownerEmail={ownerEmail}
          ownerName={ownerName}
          eventStartAndEndDates={eventStartAndEndDates}
        />
      )}
    </div>
  )
}

export { CreateTripPage }
