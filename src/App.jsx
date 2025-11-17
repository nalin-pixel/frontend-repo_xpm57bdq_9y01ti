import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Forever Booths. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#pricing" className="hover:text-gray-900">Packages</a>
            <a href="#contact" className="hover:text-gray-900">Book</a>
            <a href="#gallery" className="hover:text-gray-900">Gallery</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
