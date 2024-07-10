import React, { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'flex items-center gap-2 rounded-lg px-5 py-2 font-medium justify-center transition-colors duration-200 ease-linear',
  variants: {
    variant: {
      primary: 'bg-purple-300 text-purple-950 hover:bg-purple-400',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    },
    size: {
      default: 'py-2',
      full: 'w-full h-11',
    },
  },
  defaultVariants: { variant: 'primary', size: 'default' },
})

type Props = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode
  }

const Button = ({ children, variant, size, ...props }: Props) => {
  return (
    <button className={buttonVariants({ variant, size })} {...props}>
      {children}
    </button>
  )
}

export { Button }
