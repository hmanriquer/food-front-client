import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getUserInitalsHelper } from '@/helpers/user-initals.helper'

export function UserAvatar({ name, role }: { name: string; role: string }) {
  return (
    <div className="mx-4 flex items-center gap-x-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src="" />
        <AvatarFallback>{getUserInitalsHelper(name)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col space-y-0">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-neutral-500">{role}</p>
      </div>
    </div>
  )
}
