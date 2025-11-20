import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import MenuGrid from './components/MenuGrid'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <MenuGrid />
        <Gallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
