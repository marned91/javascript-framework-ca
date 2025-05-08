import { useLocation, Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'

export function Header() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <header>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              CART
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
