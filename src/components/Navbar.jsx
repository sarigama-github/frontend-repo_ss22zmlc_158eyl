import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Funktionen', href: '#features' },
    { label: 'Video-Studio', href: '#studio' },
    { label: 'Preise', href: '#preise' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 grid place-items-center text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-slate-800">Flames Social</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#signup" className="inline-flex items-center rounded-lg bg-slate-900 text-white text-sm font-medium px-4 py-2 hover:bg-slate-800 transition-colors">
              Jetzt beitreten
            </a>
          </nav>

          <button aria-label="Menü öffnen" className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-700" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-2 py-2 rounded-md text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
              <a href="#signup" className="mt-2 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white text-sm font-medium px-4 py-2">
                Jetzt beitreten
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
