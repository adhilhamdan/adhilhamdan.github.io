import React from 'react'
import { useInView } from '../hooks/useInView'
import { BookOpen, ExternalLink, Award } from 'lucide-react'

const PUBLICATIONS = [
  {
    title: 'Adaptive Image Enhancement Using Dark Channel Prior and Fuzzy Logic',
    venue: 'Springer — Lecture Notes in Networks and Systems',
    type: 'Journal',
    year: '2024',
    tags: ['Image Processing', 'Fuzzy Logic', 'DCP', 'MATLAB'],
    description:
      'A novel dehazing algorithm combining Dark Channel Prior with adaptive fuzzy logic parameter tuning. Outperforms standard DCP on SSIM and PSNR metrics across hazy benchmark datasets.',
    link: null,
  },
  {
    title: 'Dual-Layer Image Security Using Chaotic Maps',
    venue: 'ICSSIC 2024 — International Conference',
    type: 'Conference',
    year: '2024',
    tags: ['Image Security', 'Chaotic Maps', 'Encryption', 'MATLAB'],
    description:
      'Two-stage encryption scheme using logistic and Henon chaotic maps for pixel-level scrambling and intensity transformation. Demonstrates high key sensitivity and strong resistance to statistical attacks.',
    link: null,
  },
]

export default function Publications() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="publications" className="py-24 px-6 bg-navy-800/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label">04 / publications</p>
          <h2 className="section-title">
            Research<br />
            <span className="text-cyan-400">published.</span>
          </h2>
        </div>

        <div className="space-y-5 max-w-3xl">
          {PUBLICATIONS.map((pub, i) => {
            const [cardRef, cardInView] = useInView(0.1)
            return (
              <div
                key={pub.title}
                ref={cardRef}
                className={`card group transition-all duration-700 ${
                  cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-navy-700 border border-navy-500 group-hover:border-cyan-400/40 flex items-center justify-center flex-shrink-0 transition-colors duration-300 mt-0.5">
                    <BookOpen size={16} className="text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-mono text-sm font-semibold text-slate-light leading-snug">
                        {pub.title}
                      </h3>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-muted hover:text-cyan-400 transition-colors flex-shrink-0"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1.5 font-mono text-xs text-amber-400">
                        <Award size={12} />
                        {pub.venue}
                      </span>
                      <span className="font-mono text-xs text-slate-muted">{pub.year}</span>
                      <span className="tag">{pub.type}</span>
                    </div>

                    <p className="text-sm text-slate-muted leading-relaxed mb-3">
                      {pub.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
