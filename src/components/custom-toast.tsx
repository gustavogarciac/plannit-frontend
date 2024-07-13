import { CheckIcon, InfoIcon, TriangleAlert, XCircleIcon } from 'lucide-react'
import { ComponentProps } from 'react'
import toast, { Toast } from 'react-hot-toast'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const toastVariants = tv({
  base: '',
  variants: {
    variant: {
      success: 'bg-green-500',
      error: 'bg-red-500',
      warning: 'bg-yellow-500',
      info: 'bg-blue-500',
    },
  },
  defaultVariants: { variant: 'success' },
})

type Props = ComponentProps<'div'> &
  VariantProps<typeof toastVariants> & {
    variant: 'success' | 'error' | 'warning' | 'info'
    t: Toast
    message: string
  }

export const CustomToast = ({ t, variant = 'success', message }: Props) => {
  let icon: React.ReactNode = null
  switch (variant) {
    case 'success':
      icon = (
        <CheckIcon className="size-8 rounded-full bg-zinc-800 p-2 text-zinc-100" />
      )
      break
    case 'error':
      icon = (
        <XCircleIcon className="size-8 rounded-full bg-zinc-800 p-2 text-zinc-100" />
      )
      break
    case 'warning':
      icon = (
        <TriangleAlert className="size-8 rounded-full bg-zinc-800 p-2 text-zinc-100" />
      )
      break
    case 'info':
      icon = (
        <InfoIcon className="size-8 rounded-full bg-zinc-800 p-2 text-zinc-100" />
      )
      break
  }
  return (
    <div
      className={twMerge(
        toastVariants({ variant }),
        `${
          t.visible ? 'animate-enter' : 'animate-leave'
        } pointer-events-auto flex w-full max-w-md rounded-lg bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5`,
      )}
    >
      <div className="w-0 flex-1 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 pt-0.5">{icon}</div>
          <div className="ml-3 flex-1">
            <p className="line-clamp-3 text-sm font-medium text-zinc-100">
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-zinc-800">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-zinc-400 hover:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-700"
        >
          Close
        </button>
      </div>
    </div>
  )
}
