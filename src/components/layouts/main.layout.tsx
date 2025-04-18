import * as React from 'react'
import { Navbar } from '../navbar'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col bg-neutral-50 dark:bg-neutral-800">
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}

export default MainLayout
