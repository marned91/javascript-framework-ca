import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { useState } from 'react'
import { useCartStore } from '../store/cart'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartCount = useCartStore((state) => state.cart.length)

  return (
    <header className="bg-white shadow-md relative z-20">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between relative">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-20 lg:h-25" />
        </Link>
        <nav className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-6 text-sm font-navButtons tracking-wide uppercase">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-black' : 'hover:font-semibold'
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-black' : 'hover:font-semibold'
                }
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-black' : 'hover:font-semibold'
                }
              >
                CART
                {cartCount > 0 && (
                  <span className="text-xs">({cartCount})</span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className="sm:hidden"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav
          className="
      sm:hidden px-4 pb-4
      transition-all duration-300 ease-out
      animate-fadeIn
    "
        >
          <ul className="flex flex-col items-end gap-2 text-sm font-navButtons tracking-wide uppercase">
            <li>
              <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" onClick={() => setIsMenuOpen(false)}>
                CART{' '}
                {cartCount > 0 && (
                  <span className="text-xs">({cartCount})</span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
