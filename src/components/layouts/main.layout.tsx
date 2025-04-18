import * as React from 'react'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full bg-neutral-50 dark:bg-neutral-800">
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}

export default MainLayout
