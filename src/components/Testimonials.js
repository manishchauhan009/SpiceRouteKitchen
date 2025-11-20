export default function Testimonials() {
  const testimonials = [
    { name: 'Rahul', text: 'Best biryani in town!' },
    { name: 'Sneha', text: 'Lovely ambiance and tasty food.' },
    { name: 'Ankit', text: 'Quick service and delicious curries.' },
  ]

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-bold mb-4">What our customers say</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {testimonials.map((item, i) => (
            <blockquote key={i} className="p-4 border rounded bg-white h-full">
              <p className="text-gray-700">“{item.text}”</p>
              <footer className="mt-2 text-sm text-gray-500">— {item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
