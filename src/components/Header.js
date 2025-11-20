import { useState } from 'react'
import { makeWhatsAppLink } from '../lib/whatsapp'

const PHONE = '911234567890'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappLink = makeWhatsAppLink(PHONE, 'Hi, I want to place an order.')

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold">
            SR
          </div>
          <div>
            <h1 className="font-semibold">SpiceRoute Kitchen</h1>
            <p className="text-xs text-gray-500">Authentic Indian Cuisine</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
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
            href={whatsappLink}
            className="bg-primary text-white px-3 py-1 rounded"
          >
            Order on WhatsApp
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {/* Icon */}
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            // Hamburger icon
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          ) : (
            // Close (X) icon
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            <a
              href="#menu"
              onClick={closeMenu}
              className="py-1 text-gray-700 hover:text-primary"
            >
              Menu
            </a>
            <a
              href="#gallery"
              onClick={closeMenu}
              className="py-1 text-gray-700 hover:text-primary"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="py-1 text-gray-700 hover:text-primary"
            >
              Contact
            </a>
            <a
              href={`tel:+${PHONE}`}
              onClick={closeMenu}
              className="py-1 text-gray-700 hover:text-primary"
            >
              Call Now
            </a>
            <a
              href={whatsappLink}
              onClick={closeMenu}
              className="mt-2 inline-flex justify-center bg-primary text-white px-3 py-2 rounded text-sm font-medium"
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
