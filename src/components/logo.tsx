import { CompassIcon } from 'lucide-react'

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <CompassIcon className="size-10 text-zinc-100" />
      <h1 className="font-kanit text-4xl font-extrabold lowercase text-zinc-100">
        Plann.it
      </h1>
    </div>
  )
}
