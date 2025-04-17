import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sales')({
  component: Sales,
})

function Sales() {
  return (
    <div className="p-2">
      <h3>Sales</h3>
    </div>
  )
}
