export function makeWhatsAppLink(phone, message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encoded}`
}
