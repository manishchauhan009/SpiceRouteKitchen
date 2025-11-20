import { makeWhatsAppLink } from '../lib/whatsapp'

const PHONE = '911234567890'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold">
            SR
          </div>
          <div>
            <h1 className="font-semibold">SpiceRoute Kitchen</h1>
            <p className="text-xs text-gray-500">Authentic Indian Cuisine</p>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          <a href="#menu" className="text-gray-700 hover:text-primary">
            Menu
          </a>
          <a href="#gallery" className="text-gray-700 hover:text-primary">
            Gallery
          </a>
          <a href="#contact" className="text-gray-700 hover:text-primary">
            Contact
          </a>
          <a
            href={`tel:+${PHONE}`}
            className="hidden sm:inline-block px-3 py-1 border rounded"
          >
            Call Now
          </a>
          <a
            href={makeWhatsAppLink(PHONE, 'Hi, I want to place an order.')}
            className="bg-primary text-white px-3 py-1 rounded"
          >
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
