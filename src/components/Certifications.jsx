import React from 'react'
import { useInView } from '../hooks/useInView'
import { Award, BadgeCheck } from 'lucide-react'

const CERTS = [
  {
    title: 'Design for Testability Fundamentals v25.1',
    issuer: 'Cadence',
    date: 'Feb 2026',
    type: 'cert',
    tags: ['DFT', 'VLSI', 'Scan Insertion', 'ATPG'],
    highlight: 'Industry-recognized DFT certification covering scan architecture, ATPG, and testability fundamentals.',
    color: '#00D4FF',
  },
  {
    title: 'Product Management + Agile Product Manager + Scrum',
    issuer: 'Udemy',
    date: 'May 2025',
    type: 'cert',
    tags: ['Product Management', 'Agile', 'Scrum'],
    highlight: 'Comprehensive certification covering product lifecycle, agile methodologies, and scrum framework.',
    color: '#A78BFA',
  },
  {
    title: 'Team Avengers Award',
    issuer: 'NinjaCart',
    date: 'Jan 2025',
    type: 'award',
    tags: ['Leadership', 'Teamwork', 'Operations'],
    highlight: 'Recognised for outstanding team collaboration and contribution to critical project milestones.',
    color: '#F59E0B',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label">06 / certifications</p>
          <h2 className="section-title">
            Certified &<br />
            <span className="text-cyan-400">recognised.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {CERTS.map((item, i) => {
            const [cardRef, cardInView] = useInView(0.1)
            return (
              <div
                key={item.title}
                ref={cardRef}
                className={`card group flex flex-col transition-all duration-700 ${
                  cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors duration-300"
                    style={{ backgroundColor: item.color + '15', borderColor: item.color + '40' }}
                  >
                    {item.type === 'award'
                      ? <Award size={16} style={{ color: item.color }} />
                      : <BadgeCheck size={16} style={{ color: item.color }} />
                    }
                  </div>
                  <div>
                    <span
                      className="font-mono text-xs font-semibold uppercase tracking-wider"
                      style={{ color: item.color }}
                    >
                      {item.type === 'award' ? 'Award' : 'Certificate'}
                    </span>
                  </div>
                </div>

                <h3 className="font-mono text-sm font-semibold text-slate-light leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-muted mb-3">
                  {item.issuer} · {item.date}
                </p>

                <p className="text-sm text-slate-muted leading-relaxed mb-4 flex-1">
                  {item.highlight}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-navy-500">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 rounded-md border"
                      style={{ backgroundColor: item.color + '10', borderColor: item.color + '30', color: item.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
