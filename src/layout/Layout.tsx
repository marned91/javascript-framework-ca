import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

/**
 * Global layout component that wraps all routed pages.
 *
 * It includes:
 * - <Header /> at the top
 * - <Footer /> at the bottom
 * - An <Outlet /> in the middle that renders the current route
 *
 * This component is used in the main route structure (in App.tsx).
 *
 * @returns {JSX.Element} The layout wrapper with header, outlet, and footer
 */
export function Layout() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
