import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="pointer-events-none mb-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/80 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Modern photo experiences for events
        </p>
        <h1 className="pointer-events-none text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          Capture moments that last Forever
        </h1>
        <p className="pointer-events-none mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          Premium photo booth rentals with instant sharing, studio lighting, and a minimalist design that elevates your brand.
        </p>
        <div className="pointer-events-auto mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#pricing" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800">
            View Packages
          </a>
          <a href="#contact" className="rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-200 hover:bg-white">
            Book Your Date
          </a>
        </div>
      </div>
    </section>
  )
}
