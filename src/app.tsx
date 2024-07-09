import { ArrowRight, Calendar, MapPin } from 'lucide-react'

import { Logo } from './components/logo'

function App() {
  return (
    <div className="bg-pattern flex h-screen items-center justify-center bg-center bg-no-repeat">
      <div className="w-full max-w-3xl space-y-10 px-6 text-center">
        <div className="mx-auto w-fit">
          <Logo />
        </div>
        <p className="text-lg text-zinc-300">
          Invite your friends and plan your next trip!
        </p>

        <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
          <div className="flex flex-1 items-center gap-2">
            <MapPin className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Where will you go?"
              className="flex-1 bg-transparent text-lg outline-none placeholder:text-zinc-400"
            />
          </div>

          <div className="flex w-fit items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="When?"
              className="w-40 bg-transparent text-lg outline-none placeholder:text-zinc-400"
            />
          </div>

          <div className="h-6 w-px bg-zinc-800" />

          <button className="flex items-center gap-2 rounded-lg bg-purple-300 px-5 py-2 font-medium text-lime-950 transition-colors duration-200 ease-linear hover:bg-purple-400">
            Continue
            <ArrowRight className="size-5" />
          </button>
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
    </div>
  )
}

export { App }
