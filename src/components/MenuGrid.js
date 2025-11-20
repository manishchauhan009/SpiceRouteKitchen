import { menuItems } from '../data/menu'
import MenuCard from './MenuCard'

export default function MenuGrid() {
  return (
    <section id="menu" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-2">Our Menu</h2>
      <p className="text-gray-600 mb-6">
        Handpicked favorites from our kitchen — made fresh to order.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
