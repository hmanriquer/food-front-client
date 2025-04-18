import * as React from 'react'
import { Link, useRouter } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { NavbarItemProps } from './types'

const navbarItemVariants = cva(
  'flex items-center gap-x-2 rounded-md px-3 py-2 transition-colors duration-300 text-sm',
  {
    variants: {
      variant: {
        default: 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
        active:
          'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80',
        disabled: 'opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function NavbarItem({
  className,
  variant,
  href,
  label,
  icon,
  onClick,
  ...props
}: Omit<React.ComponentProps<'a'>, 'onClick'> &
  VariantProps<typeof navbarItemVariants> &
  NavbarItemProps) {
  const router = useRouter()
  const currentPath = router.state.location.pathname
  const isActive = currentPath === href

  return (
    <Link
      to={href}
      className={cn(
        navbarItemVariants({ variant: isActive ? 'active' : variant }),
        className,
      )}
      {...props}
    >
      {icon}
      {label}
    </Link>
  )
}

export { NavbarItem }
