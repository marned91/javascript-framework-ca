import Home from '../assets/home.png'

type props = {
  onScrollClick: () => void
}

export function HeroSection({ onScrollClick }: props) {
  return (
    <div className="relative">
      <div className="absolute top-1/10 sm:top-1/3 left-1/2 transform -translate-x-1/2 text-center z-10 bg-white/50 p-8 rounded w-full sm:max-w-md mx-auto">
        <h1 className="text-xl md:text-3xl/12 font-large font-semibold">
          Everything you need, in one place, just for YOU!
        </h1>
        <button
          onClick={onScrollClick}
          className="mt-4 px-6 py-2 bg-dark text-white font-bold rounded cursor-pointer hover:bg-black font-navButtons"
        >
          Shop Now
        </button>
      </div>
      <img
        src={Home}
        alt="Black and white image of a young man"
        className="w-full h-full"
      />
    </div>
  )
}
