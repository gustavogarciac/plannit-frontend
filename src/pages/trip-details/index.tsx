import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import { NotFound } from '../../components/not-found'
import { api } from '../../libs/axios'
import { Activities } from './activities'
import { ConfirmAttendanceModal } from './confirm-attendance-modal'
import { CreateActivityModal } from './create-activity-modal'
import { DestinationAndDateHeader } from './destination-and-date-header'
import { Guests } from './guests'
import { ImportantLinks } from './important-links'

const TripDetailsPage = () => {
  const navigate = useNavigate()
  const { tripId } = useParams<{ tripId: string }>()

  if (!tripId) {
    navigate('/')
  }

  const query = useSearchParams()
  const participantId = query[0].get('participantId')

  const [tripDetails, setTripDetails] = useState<Trip | undefined>()

  const [isConfirmAttendaceModalOpen, setIsConfirmAttendaceModalOpen] =
    useState(false)

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState<boolean>(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  function openConfirmAttendanceModal() {
    setIsConfirmAttendaceModalOpen(true)
  }

  useEffect(() => {
    async function fetchTripDetails() {
      const response = await api.get<{ trip: Trip }>(`/trips/${tripId}`)

      setTripDetails(response.data.trip)
    }

    fetchTripDetails()
  }, [tripId])

  useEffect(() => {
    async function fetchTripDetails() {
      const response = await api.get<{ trip: Trip }>(`/trips/${tripId}`)

      setTripDetails(response.data.trip)
    }

    fetchTripDetails()
    if (participantId) {
      openConfirmAttendanceModal()
    }
  })

  if (!tripDetails) {
    return (
      <NotFound
        title="Sorry, I could not find this trip!"
        message="It looks like there's not a trip with the provided informations."
        displayButton
      />
    )
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8 bg-pattern bg-center bg-no-repeat px-6 py-10">
      <DestinationAndDateHeader tripDetails={tripDetails} />

      <main className="flex gap-16 px-4">
        <Activities openCreateActivityModal={openCreateActivityModal} />

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="h-px w-full bg-zinc-800"></div>

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivyModal={closeCreateActivityModal}
        />
      )}

      {isConfirmAttendaceModalOpen && (
        <ConfirmAttendanceModal
          tripDetails={tripDetails}
          closeConfirmAttendanceModal={() =>
            setIsConfirmAttendaceModalOpen(false)
          }
        />
      )}
    </div>
  )
}

export { TripDetailsPage }
