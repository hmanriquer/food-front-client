import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orders')({
  component: Orders,
})

function Orders() {
  return (
    <div className="p-2">
      <h3>Orders</h3>
    </div>
  )
}
