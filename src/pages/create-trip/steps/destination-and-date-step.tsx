import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'

import { Button } from '../../../components/button'

type DestinationAndStepProps = {
  isGuestsInputOpen: boolean
  handleOpenGuestsInput: () => void
  handleCloseGuestsInput: () => void
}

export function DestinationAndStep({
  isGuestsInputOpen,
  handleOpenGuestsInput,
  handleCloseGuestsInput,
}: DestinationAndStepProps) {
  return (
    <>
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
