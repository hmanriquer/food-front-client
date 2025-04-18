import { ComponentProps } from 'react'
import type { OrderItem } from '@/types/order.type'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { formatPrice } from '@/helpers/format-price.helper'
type OrderItemProps = Omit<ComponentProps<'div'>, 'id'> & OrderItem

export function OrderItem({
  id,
  name,
  quantity,
  price,
  className,
  productId,
  ...props
}: OrderItemProps) {
  return (
    <div
      className={cn(
        'my-1.5 flex rounded-md border border-neutral-300 p-2.5 dark:border-neutral-800',
        className,
      )}
      {...props}
    >
      <section className="flex-1">
        <div className="flex justify-between">
          <span className="flex items-center space-x-2">
            <h3 className="text-sm font-semibold">{name}</h3>
            <Badge variant="secondary">{quantity}</Badge>
          </span>
          <span className="font-bold">{formatPrice(price)}</span>
        </div>
      </section>
    </div>
  )
}
