import { Mapper } from '@/components/mapper'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { OrderPanel } from '@/types/order.type'
import {
  ArrowLeftRight,
  Banknote,
  CreditCardIcon,
  Trash2Icon,
} from 'lucide-react'
import { OrderItem, PaymentMethod } from '../../components'
import { formatPrice } from '@/helpers/format-price.helper'

export function OrderSection({ clear, orders, total }: OrderPanel) {
  return (
    <section
      data-testid="order-section"
      className="sticky top-20 z-50 h-full w-full overflow-y-auto rounded-lg bg-white p-4 shadow-sm lg:w-96 dark:bg-neutral-900"
    >
      <header className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Orden</h2>
        <Button
          variant="outline"
          size="icon"
          onClick={clear}
          className="rounded-full p-2"
        >
          <Trash2Icon className="h-4 w-4" />
        </Button>
      </header>
      <Separator className="my-4" />
      <div className="flex flex-col gap-4">
        {orders.length === 0 ? (
          <span className="text-muted-foreground text-center text-sm">
            No hay productos en la orden.
          </span>
        ) : (
          <Mapper
            items={orders}
            render={(order) => (
              <OrderItem
                key={order.id}
                {...order}
              />
            )}
          />
        )}
      </div>
      <Separator className="my-4" />
      <PaymentSumary total={total} />
    </section>
  )
}

const PaymentSumary = ({ total }: { total: number }) => (
  <footer className="pt-4">
    <h2 className="mb-4 text-lg font-semibold">Resumen de pago</h2>
    <div className="space-y-2">
      <section className="mt-2 flex justify-between">
        <h3 className="text-neutral-500">Total</h3>
        <p className="font-semibold">{formatPrice(total)}</p>
      </section>
    </div>
    <PaymentMethods />
    <Button className="w-full">Pagar</Button>
  </footer>
)

const PaymentMethods = () => (
  <div className="my-6 grid grid-cols-3 gap-2">
    <PaymentMethod
      icon={<CreditCardIcon className="size-5" />}
      name="Débito / Crédito"
      onClick={() => {}}
      selected={false}
    />
    <PaymentMethod
      icon={<ArrowLeftRight className="size-5" />}
      name="Transferencia"
      onClick={() => {}}
      selected={false}
    />
    <PaymentMethod
      icon={<Banknote className="size-5" />}
      name="Efectivo"
      onClick={() => {}}
      selected={false}
    />
  </div>
)
