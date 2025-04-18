import logo from '@/assets/anvorgaming.png'

export default function NavbarBrand() {
  return (
    <div className="flex items-center gap-x-2">
      <img
        src={logo}
        alt="logo"
        className="h-10 w-10"
      />
      <h1 className="text-xl font-bold">AnvorGaming</h1>
    </div>
  )
}
