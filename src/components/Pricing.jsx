export default function Pricing() {
  const tiers = [
    {
      name: 'Essential',
      price: 699,
      features: ['2 hours coverage', 'Unlimited sessions', 'Instant sharing', 'Online gallery']
    },
    {
      name: 'Signature',
      price: 999,
      featured: true,
      features: ['4 hours coverage', 'Custom overlay', 'Studio lighting kit', 'Attendant on-site']
    },
    {
      name: 'Brand Experience',
      price: 1699,
      features: ['6 hours coverage', 'Full brand kit', 'Microsite & analytics', 'Premium backdrop']
    }
  ]

  return (
    <section id="pricing" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Pick a package, we’ll tailor the details to your event.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.featured ? 'border-gray-900 bg-gray-900 text-white shadow-2xl' : 'border-gray-200 bg-white'} p-6 shadow-sm`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                {t.featured && (
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Most popular</span>
                )}
              </div>
              <p className={`mt-4 text-4xl font-bold ${t.featured ? 'text-white' : 'text-gray-900'}`}>
                ${'{'}t.price{'}'}
                <span className={`ml-1 text-sm font-medium ${t.featured ? 'text-white/70' : 'text-gray-500'}`}>/event</span>
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${t.featured ? 'bg-white' : 'bg-gray-900'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ${t.featured ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} hover:opacity-90`}>
                Book this
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
