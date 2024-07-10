import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'

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
    </>
  )
}
