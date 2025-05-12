import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

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
