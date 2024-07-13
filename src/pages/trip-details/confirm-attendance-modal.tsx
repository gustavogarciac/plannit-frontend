import { format } from 'date-fns'
import { AtSignIcon, User } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '../../components/button'
import { CustomToast } from '../../components/custom-toast'

type Props = {
  closeConfirmAttendanceModal: () => void
  tripDetails: Trip | undefined
}

export const ConfirmAttendanceModal = ({
  closeConfirmAttendanceModal,
  tripDetails,
}: Props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleConfirmAttendance(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      setLoading(true)
      if (!name || !email) {
        return
      }

      // Do something here

      toast.custom((t) => (
        <CustomToast
          t={t}
          variant="success"
          message="You have confirmed your attendance!"
        />
      ))

      closeConfirmAttendanceModal()
      setLoading(false)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Confirm attendance</h2>
        </div>

        {tripDetails && (
          <p className="my-2 text-sm text-zinc-400">
            You have been invited to a trip to{' '}
            <span className="text-zinc-200">{tripDetails?.destination}</span> on
            the dates of {format(tripDetails?.starts_at, 'MMMM')},{' '}
            <span className="text-zinc-200">
              {format(tripDetails?.starts_at, 'd')} to{' '}
              {format(tripDetails?.ends_at, 'd')}
            </span>
            .
          </p>
        )}

        <p className="text-sm text-zinc-400">
          To confirm your attendance, please provide the following information:
        </p>

        <form onSubmit={handleConfirmAttendance} className="space-y-3">
          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <User className="size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Your name"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex h-14 flex-1 items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <AtSignIcon className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Your personal email"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
            />
          </div>

          <Button type="submit" size="full" disabled={loading}>
            Confirm attendance
          </Button>
        </form>
      </div>
    </div>
  )
}
