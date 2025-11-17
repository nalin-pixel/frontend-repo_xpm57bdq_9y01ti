import { Flashlight, Share2, Sparkles, Timer } from 'lucide-react'

const features = [
  {
    icon: Flashlight,
    title: 'Studio-Grade Lighting',
    desc: 'Crisp, flattering photos with soft diffused lighting and pro optics.'
  },
  {
    icon: Share2,
    title: 'Instant Sharing',
    desc: 'Text, AirDrop, and QR sharing so guests get photos in seconds.'
  },
  {
    icon: Timer,
    title: 'Fast Set-up',
    desc: 'Clean, cable‑managed booth that’s up and shooting in minutes.'
  },
  {
    icon: Sparkles,
    title: 'Custom Branding',
    desc: 'Overlays, backdrops, and microsites tailored to your event style.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for modern events</h2>
          <p className="mt-3 text-gray-600">Minimal footprint. Maximum impact. A photo booth experience guests actually love.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex rounded-xl bg-gray-900 p-3 text-white">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
