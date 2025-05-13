/**
 * Renders the global footer with copyright info.
 *
 * @returns {JSX.Element}
 */
export function Footer() {
  return (
    <footer className="bg-dark text-white text-sm text-center py-6">
      &copy; {new Date().getFullYear()} CART. All rights reserved.
    </footer>
  )
}
