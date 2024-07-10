import { Link2, Plus } from 'lucide-react'

import { Button } from '../../components/button'

export function ImportantLinks() {
  return (
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

      <Button variant="secondary" size="full">
        New link
        <Plus className="size-5" />
      </Button>
    </div>
  )
}
