import { Popsicle } from 'lucide-react'
import {
  IconBubbleTea2,
  IconBurger,
  IconCircleDashed,
  IconPackage,
  IconPlus,
  IconSausage,
} from '@tabler/icons-react'

export type Categories =
  | 'Anvorguesa'
  | 'Hot Dog'
  | 'Banderilla'
  | 'Bebidas'
  | 'Paquetes'
  | 'Extra'

export const categoryIconHelper = (category: Categories): JSX.Element => {
  switch (category) {
    case 'Anvorguesa':
      return <IconBurger className="h-4 w-4" />
    case 'Hot Dog':
      return <IconSausage className="h-4 w-4" />
    case 'Banderilla':
      return <Popsicle className="h-4 w-4" />
    case 'Bebidas':
      return <IconBubbleTea2 className="h-4 w-4" />
    case 'Paquetes':
      return <IconPackage className="h-4 w-4" />
    case 'Extra':
      return <IconPlus className="h-4 w-4" />
    default:
      return <IconCircleDashed className="h-4 w-4" />
  }
}
