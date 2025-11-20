export default function MenuCard({ item }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">{item.name}</h3>
          <span className="text-sm font-medium">{item.price}</span>
        </div>
        <p className="text-xs uppercase tracking-wide text-gray-400 mt-1">
          {item.category}
        </p>
        <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
      </div>
    </div>
  )
}
