import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  PlusIcon,
  Settings2,
  UsersRound,
} from 'lucide-react'

const TripDetailsPage = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8 bg-pattern bg-center bg-no-repeat px-6 py-10">
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

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-3xl font-semibold">Activities</h2>
            <button className="flex items-center gap-2 rounded-lg bg-purple-300 px-5 py-2 font-medium text-lime-950 transition-colors duration-200 ease-linear hover:bg-purple-400">
              <PlusIcon className="size-5" />
              New Activity
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Day 17
                </span>
                <span className="text-xs text-zinc-500">Saturday</span>
              </div>
              <p className="text-sm text-zinc-500">
                There are no activities on this day.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-zinc-300">
                  Day 18
                </span>
                <span className="text-xs text-zinc-500">Sunday</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <CircleCheck className="size-5 text-purple-300" />
                  <span className="text-zinc-100">Group </span>
                  <span className="ml-auto text-zinc-400">8am</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2.5 shadow-shape">
                  <CircleCheck className="size-5 text-purple-300" />
                  <span className="text-zinc-100">Church</span>
                  <span className="ml-auto text-zinc-400">4pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Important links</h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Airbnb reservation
                  </span>
                  <a
                    href="#"
                    className="block truncate text-xs font-medium text-zinc-400 transition-colors duration-75 ease-linear hover:text-zinc-200"
                  >
                    https://wwww.airbnb.com/rooms/2131232141231231242131231231
                  </a>
                </div>
                <Link2 className="size-5 shrink-0 text-zinc-400" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Airbnb reservation
                  </span>
                  <a
                    href="#"
                    className="block truncate text-xs font-medium text-zinc-400 transition-colors duration-75 ease-linear hover:text-zinc-200"
                  >
                    https://wwww.airbnb.com/rooms/2131232141231231242131231231
                  </a>
                </div>
                <Link2 className="size-5 shrink-0 text-zinc-400" />
              </div>
            </div>

            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 transition-colors duration-200 ease-linear hover:bg-zinc-700">
              New link
              <Plus className="size-5" />
            </button>
          </div>

          <div className="h-px w-full bg-zinc-800"></div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Guests</h2>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    John Doe
                  </span>
                  <span className="block truncate text-xs font-medium text-zinc-400">
                    johndoe@email.com
                  </span>
                </div>
                <CircleDashed className="size-5 shrink-0 text-zinc-400" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Jessica White
                  </span>
                  <span className="block truncate text-xs font-medium text-zinc-400">
                    jessicawhite@email.com
                  </span>
                </div>
                <CircleDashed className="size-5 shrink-0 text-zinc-400" />
              </div>
            </div>

            <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-5 font-medium text-zinc-200 transition-colors duration-200 ease-linear hover:bg-zinc-700">
              <UsersRound className="size-5" />
              Manage Guests
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export { TripDetailsPage }
