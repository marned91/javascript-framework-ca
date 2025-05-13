import { Link } from 'react-router-dom'

type Props = {
  image: string
  orderNumber: string
}

/**
 * Displays a thank-you message after a successful checkout.
 *
 * Includes:
 * - A fullscreen background image
 * - Order number for confirmation
 * - A link to go back to the homepage
 *
 * @param {Props} props - Image and order number for confirmation
 * @returns {JSX.Element} The rendered thank-you message section
 */
export function ThankYouMessage({ image, orderNumber }: Props) {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" flex flex-col justify-center items-center w-full sm:max-w-sm mx-auto">
        <h1 className="font-large text-3xl font-bold pt-20">THANK YOU</h1>
        <p className="font-medium text-2xl font-semibold mt-3">
          Order number: <span className="">{orderNumber}</span>
        </p>
        <Link
          to="/"
          className="mt-4 px-6 py-2 bg-dark text-white font-bold rounded cursor-pointer hover:bg-black font-navButtons"
        >
          Shop More!
        </Link>
      </div>
    </div>
  )
}
