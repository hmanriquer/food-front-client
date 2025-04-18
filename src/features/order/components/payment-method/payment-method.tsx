import type { PaymentMethod } from './types'

export function PaymentMethod({
  icon,
  name,
  onClick,
  selected,
}: PaymentMethod) {
  return (
    <button
      className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border bg-white p-3 dark:bg-neutral-950 dark:hover:bg-neutral-950/80 ${
        selected
          ? 'border-primary text-primary'
          : 'border-neutral-200 dark:border-neutral-700'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="mt-1 text-xs">{name}</span>
    </button>
  )
}
