import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users')({
  component: Users,
})

function Users() {
  return (
    <div className="p-2">
      <h3>Users</h3>
    </div>
  )
}
