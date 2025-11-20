import { makeWhatsAppLink } from '../lib/whatsapp'

const PHONE = '911234567890'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-dark mb-3">
            Taste the Tradition — Fresh, Authentic Indian Cuisine
          </h2>
          <p className="text-gray-600 mb-6">
            Dine-in • Takeaway • Online Orders — flavorful meals made with love and
            fresh ingredients.
          </p>
          <div className="flex gap-3">
            <a href="#menu" className="px-5 py-2 border rounded">
              View Menu
            </a>
            <a
              href={makeWhatsAppLink(PHONE, 'Hi, I want to order from SpiceRoute.')}
              className="px-5 py-2 bg-primary text-white rounded"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
          <img
            src="/images/hero.jpg"
            alt="SpiceRoute banner"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
