export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
        <span>© {new Date().getFullYear()} SpiceRoute Kitchen. All rights reserved.</span>
        <span>Demo site made by Manish for portfolio.</span>
      </div>
    </footer>
  )
}
