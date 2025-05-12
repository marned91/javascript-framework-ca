import { Link } from 'react-router-dom'

type Props = {
  image: string
  orderNumber: string
}

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
          className="bg-dark hover:bg-black text-white px-6 py-3 rounded-md font-navButtons mt-6"
        >
          Show Now
        </Link>
      </div>
    </div>
  )
}
