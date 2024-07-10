import { Calendar, MapPin, Settings2 } from 'lucide-react'

export function DestinationAndDateHeader() {
  return (
    <header className="flex h-16 items-center justify-between rounded-xl bg-zinc-900 px-4 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">Porto Alegre, Brazil.</span>
      </div>

      <div className="flex flex-row items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">August, 17 to 23.</span>
        </div>

        <div className="h-6 w-px bg-zinc-800" />

        <button className="flex items-center gap-2 rounded-lg bg-zinc-800 px-5 py-2 font-medium text-zinc-200 transition-colors duration-200 ease-linear hover:bg-zinc-700">
          Change date/destination
          <Settings2 className="size-5" />
        </button>
      </div>
    </header>
  )
}
