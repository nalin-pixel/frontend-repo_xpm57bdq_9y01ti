export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542038784332-971309b37c45?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop'
  ]

  return (
    <section id="gallery" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Moments</h2>
          <p className="mt-3 text-gray-600">A quick peek at the vibe — crisp, clean, and share‑ready.</p>
        </div>
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((src, i) => (
            <img key={i} src={src} className="mb-4 w-full rounded-xl object-cover shadow" alt="Forever Booths event" />
          ))}
        </div>
      </div>
    </section>
  )
}
