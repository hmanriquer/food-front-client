import { ReactQueryProviders } from '@/components/providers/react-query.providers'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '@/components/providers/theme.provider'

export const Route = createRootRoute({
  component: () => (
    <ReactQueryProviders>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme"
      >
        <main>
          <TanStackRouterDevtools />
          <Outlet />
        </main>
      </ThemeProvider>
    </ReactQueryProviders>
  ),
})
