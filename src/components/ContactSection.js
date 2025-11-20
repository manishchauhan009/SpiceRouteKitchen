import { makeWhatsAppLink } from '../lib/whatsapp'

const PHONE = '911234567890'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div>
        <h2 className="text-2xl font-bold mb-3">Visit or Contact Us</h2>
        <p className="text-gray-600 mb-4">
          SpiceRoute Kitchen, MG Road, Your City, India
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Hours:</span> 11:00 AM – 11:00 PM (All days)
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Phone:</span> +91 12345 67890
        </p>
        <div className="flex gap-3 mb-4">
          <a
            href={`tel:+${PHONE}`}
            className="px-4 py-2 border rounded"
          >
            Call Now
          </a>
          <a
            href={makeWhatsAppLink(PHONE, 'Hi, I want to reserve a table.')}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            WhatsApp Us
          </a>
        </div>
        <p className="text-xs text-gray-500">
          Note: This is a demo restaurant website built for portfolio purposes.
        </p>
      </div>

      <div className="w-full h-64 rounded overflow-hidden border">
        {/* Use a Google Maps embed link later, placeholder for now */}
        <iframe
          title="Map"
          src="https://maps.google.com/maps?q=india&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}
