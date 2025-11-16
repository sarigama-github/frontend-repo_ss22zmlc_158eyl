import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="signup" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(99,102,241,0.35),transparent_60%)]" />
          <div className="relative p-10 sm:p-12 lg:p-16 grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Starte heute – kostenlos</h3>
              <p className="mt-3 text-slate-300">Erstelle dein Profil, poste deinen ersten Beitrag und entdecke passende Talente oder Aufträge.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center rounded-lg bg-white text-slate-900 font-medium px-5 py-3 hover:bg-slate-200">Kostenlos registrieren</a>
                <a href="#preise" className="inline-flex items-center rounded-lg bg-transparent ring-1 ring-white/40 text-white font-medium px-5 py-3 hover:bg-white/10">Preise ansehen</a>
              </div>
            </motion.div>
            <motion.ul className="space-y-3" initial="hidden" whileInView="show" viewport={{ once: true }}>
              {["Unbegrenzt posten", "AI-gestützte Vorschläge", "Integriertes Video‑Studio", "Team-Features"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-3 text-sm text-slate-200"
                >
                  <span className="h-5 w-5 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 inline-block" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
