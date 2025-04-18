import { ComponentProps } from 'react'
import {
  categoryIconHelper,
  Categories,
} from '@features/order/helpers/category-icon.helper'
import { Category } from '@/types/category.type'
import { cn } from '@/lib/utils'

type CategorySelectorProps = Omit<ComponentProps<'div'>, 'id'> &
  Category & {
    onClick: () => void
    active: boolean
  }

export function CategorySelector({
  className,
  name,
  onClick,
  active,
  ...props
}: CategorySelectorProps) {
  return (
    <div
      className={cn(
        `flex cursor-pointer items-center rounded-lg border bg-neutral-900 p-4 transition-colors hover:bg-neutral-900/80 ${active ? 'border-primary border' : null}`,
        className,
      )}
      onClick={onClick}
      {...props}
      id={props.id?.toString()}
    >
      <span className="mr-3 text-2xl">
        {categoryIconHelper(name as Categories)}
      </span>
      <section>
        <h3 className="font-medium">{name}</h3>
      </section>
    </div>
  )
}
