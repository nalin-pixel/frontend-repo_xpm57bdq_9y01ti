import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      setStatus('Sending...')
      // No backend requirement in this task, just simulate
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! We\'ll get back to you shortly.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let’s lock in your date</h2>
          <p className="mt-3 text-gray-600">Tell us about your event and we’ll craft the perfect photo experience.</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Event Date</label>
              <input name="date" type="date" required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Location</label>
              <input name="location" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gray-500">We typically respond within 24 hours.</p>
            <button type="submit" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800">Request Quote</button>
          </div>
          {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
