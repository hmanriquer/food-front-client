import { HandPlatter } from 'lucide-react'
import NavbarBrand from './navbar-brand'
import { NavbarItem } from './navbar-item'
import { IconReportMoney } from '@tabler/icons-react'
import { UserAvatar } from '../user-avatar'
import { useAuthStore } from '@/stores/auth.store'

export function Navbar() {
  const { user } = useAuthStore()

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white p-3 shadow-sm dark:bg-neutral-950">
      <section className="flex items-center gap-x-4">
        <NavbarBrand />
        <div className="flex items-center gap-x-2">
          <NavbarItem
            icon={<HandPlatter className="h-4 w-4" />}
            href="/orders"
            label="Ordenes"
          />
          <NavbarItem
            icon={<IconReportMoney className="h-4 w-4" />}
            href="/sales"
            label="Ventas"
          />
        </div>
      </section>
      <UserAvatar
        name={user?.name || ''}
        role={user?.role || ''}
      />
    </nav>
  )
}
