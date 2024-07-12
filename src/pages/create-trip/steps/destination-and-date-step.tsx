import 'react-day-picker/dist/style.css'

import { format } from 'date-fns'
import { ArrowRight, Calendar, MapPin, Settings2, XIcon } from 'lucide-react'
import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'

import { Button } from '../../../components/button'

type DestinationAndStepProps = {
  isGuestsInputOpen: boolean
  handleOpenGuestsInput: () => void
  handleCloseGuestsInput: () => void
  setDestination: (destination: string) => void
  setEventsStartAndEndDates: (dates: DateRange | undefined) => void
  eventsStartAndEndDates: DateRange | undefined
  destination: string
}

export function DestinationAndStep({
  isGuestsInputOpen,
  handleOpenGuestsInput,
  handleCloseGuestsInput,
  setDestination,
  setEventsStartAndEndDates,
  eventsStartAndEndDates,
  destination,
}: DestinationAndStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  const displayedDate =
    eventsStartAndEndDates &&
    eventsStartAndEndDates.from &&
    eventsStartAndEndDates.to
      ? `${format(eventsStartAndEndDates.from, 'MMMM')}, ${format(eventsStartAndEndDates.from, 'd')} to ${format(eventsStartAndEndDates.to, 'd')}`
      : null

  return (
    <>
      <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
        <div className="flex flex-1 items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <input
            disabled={isGuestsInputOpen}
            type="text"
            placeholder="Where will you go?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
          />
        </div>

        <button
          onClick={openDatePicker}
          className="flex w-fit items-center gap-2 outline-none"
        >
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-left text-lg text-zinc-400">
            {displayedDate || 'When?'}
          </span>
        </button>

        {isDatePickerOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60">
            <div className="w-fit space-y-5 rounded-xl bg-zinc-900 px-6 py-5 shadow-shape">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Select date</h2>
                <button onClick={closeDatePicker}>
                  <XIcon className="size-5 text-zinc-400" />
                </button>
              </div>

              <DayPicker
                mode="range"
                selected={eventsStartAndEndDates}
                onSelect={setEventsStartAndEndDates}
                styles={{
                  with_weeknumber: {
                    color: 'red',
                  },
                }}
              />
            </div>
          </div>
        )}

        <div className="h-6 w-px bg-zinc-800" />

        {isGuestsInputOpen ? (
          <Button onClick={handleCloseGuestsInput} variant="secondary">
            Change date/destination
            <Settings2 className="size-5" />
          </Button>
        ) : (
          <Button onClick={handleOpenGuestsInput}>
            Continue
            <ArrowRight className="size-5" />
          </Button>
        )}
      </div>
    </>
  )
}
