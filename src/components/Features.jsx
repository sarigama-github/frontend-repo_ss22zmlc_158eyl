import { motion } from 'framer-motion'
import { Users, Briefcase, Search, Video, MessageSquare, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Netzwerk & Feed',
    desc: 'Verbinde dich mit Profis, teile Updates und baue Reichweite in einem kuratierten, themenspezifischen Feed auf.'
  },
  {
    icon: Briefcase,
    title: 'Jobs & Recruiting',
    desc: 'Finde Talente, verwalte Bewerbungen und treffe bessere Entscheidungen mit AI-gestützten Vorschlägen.'
  },
  {
    icon: Search,
    title: 'Freelancer-Aufträge',
    desc: 'Poste Projekte, erhalte Angebote und starte Kollaborationen mit transparenten Meilensteinen.'
  },
  {
    icon: Video,
    title: 'Video‑Studio',
    desc: 'Erstelle Produktdemos, Job-Teaser oder Lerninhalte – mit Templates, Untertiteln und Auto-Cuts.'
  },
  {
    icon: MessageSquare,
    title: 'Chat & Communities',
    desc: 'Private DMs, Gruppen und thematische Hubs – sicher, schnell und moderiert.'
  },
  {
    icon: ShieldCheck,
    title: 'Sicherheit & Compliance',
    desc: 'Datenschutz nach EU-Standards, SSO und Rollenrechte für Teams.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Alles, was du fürs Business brauchst</h2>
          <p className="mt-3 text-slate-700">Eine Plattform – Recruiting, Networking, Content und Kollaboration.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl bg-white p-6 ring-1 ring-slate-900/10 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white grid place-items-center">
                {f.icon && <f.icon className="h-6 w-6" />}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
