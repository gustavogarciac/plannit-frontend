import { useNavigate } from 'react-router-dom'

import { Button } from './button'
import { Logo } from './logo'

type Props = {
  title: string
  message: string
  displayButton?: boolean
}

export const NotFound = ({ title, message, displayButton = false }: Props) => {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-pattern bg-left">
      <div className="my-6 border-b border-zinc-600 p-6">
        <Logo />
      </div>
      <div className="rounded-br-lg rounded-tl-lg bg-zinc-900 p-8 shadow-shape">
        <h1 className="text-center text-3xl font-bold leading-relaxed text-zinc-300">
          {title}
        </h1>
        <p className="text-base font-semibold text-zinc-500">{message}</p>

        {displayButton && (
          <div className="mt-4 flex justify-center">
            <Button onClick={() => navigate('/')}>Go back to home</Button>
          </div>
        )}
      </div>
    </div>
  )
}
