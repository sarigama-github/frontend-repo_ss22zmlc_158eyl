import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="py-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-900/10">
              Die Social-Business-Plattform der nächsten Generation
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Verknüpfe Karriere, Teams und Aufträge – alles an einem Ort
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-prose">
              Netzwerken wie auf LinkedIn, Talente finden, Einstellungen verwalten und mit dem integrierten Video‑Studio professionelle Inhalte produzieren.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#signup" className="inline-flex items-center rounded-lg bg-slate-900 text-white font-medium px-5 py-3 hover:bg-slate-800">
                Kostenlos starten
              </a>
              <a href="#features" className="inline-flex items-center rounded-lg bg-white ring-1 ring-slate-900/10 text-slate-900 font-medium px-5 py-3 hover:bg-slate-50">
                Funktionen ansehen
              </a>
            </div>
            <div className="mt-6 text-xs text-slate-600">
              Kostenlose Basisversion • Keine Kreditkarte erforderlich
            </div>
          </motion.div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
