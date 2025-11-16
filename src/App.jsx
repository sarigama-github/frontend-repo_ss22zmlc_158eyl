import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer id="kontakt" className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <p>© {new Date().getFullYear()} Flames Social — Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-900">Datenschutz</a>
              <a href="#" className="hover:text-slate-900">Impressum</a>
              <a href="#" className="hover:text-slate-900">Kontakt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
