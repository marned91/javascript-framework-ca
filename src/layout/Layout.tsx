import { Header } from './header'
import { Outlet } from 'react-router-dom'
import { Footer } from './footer'

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
