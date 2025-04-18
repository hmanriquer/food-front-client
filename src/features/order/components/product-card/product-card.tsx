import { ComponentProps } from 'react'
import type { ProductCard } from './types'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/helpers/format-price.helper'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

type ProductCardProps = Omit<ComponentProps<'div'>, 'id'> & ProductCard

export function ProductCard({
  className,
  id,
  name,
  description,
  price,
  category,
  quantity,
  onAdd,
  onRemove,
  ...props
}: ProductCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-lg bg-white p-4 shadow-sm dark:bg-neutral-900',
        className,
      )}
      {...props}
    >
      <header className="mb-2 flex">
        <section>
          <div className="flex items-center space-x-2">
            <h3 className="font-bold">{name}</h3>
            <Badge variant="outline">{category}</Badge>
          </div>
          <p className="mt-1 text-xs text-neutral-500">{description}</p>
        </section>
      </header>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-lg font-bold">{formatPrice(price)}</span>
        <div className="flex items-center">
          <button
            type="button"
            onClick={onRemove}
            disabled={quantity === 0}
            className="flex h-8 w-8 items-center justify-center rounded-full border"
          >
            <Minus className="h-4 w-4" />
            <p className="sr-only">Quitar</p>
          </button>
          <span className="mx-3">{quantity}</span>
          <button
            type="button"
            onClick={onAdd}
            className="bg-primary hover:bg-primary/80 text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full"
          >
            <Plus className="h-4 w-4" />
            <p className="sr-only">Agregar</p>
          </button>
        </div>
      </div>
    </div>
  )
}
