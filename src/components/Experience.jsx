import React from 'react'
import { useInView } from '../hooks/useInView'
import { Briefcase, GraduationCap } from 'lucide-react'

const EXPERIENCE = [
  {
    role: 'Associate VLSI Engineer',
    company: 'Krivya Semicon (at SanDisk)',
    period: 'Feb 2026 – Present',
    type: 'work',
    tags: ['Tessent', 'Spyglass DFT', 'MBIST', 'IJTAG', 'ATPG'],
    points: [
      'IP wrapper generation and IJTAG network integration for hierarchical DFT',
      'MBIST insertion and ATPG using Siemens Tessent',
      'Lint and DFT rule checks with Synopsys SpyGlass',
    ],
  },
  {
    role: 'Physical Design Trainee',
    company: 'MavenSilicon, Bengaluru',
    period: 'Aug 2025 – Feb 2026',
    type: 'work',
    tags: ['Synopsys Fusion Compiler', 'STA', 'PnR', 'CTS'],
    points: [
      'End-to-end ASIC PD flow: floorplanning, power planning, placement, CTS, routing',
      'Static Timing Analysis and timing closure using PrimeTime',
      'Independent project: 1×3 Router full PD implementation',
    ],
  },
  {
    role: 'Freelance Software Developer',
    company: 'Ninjacart, Remote',
    period: 'Nov 2024 – Jan 2025',
    type: 'work',
    tags: ['Web Dev', 'Freelance'],
    points: [
      'Developed client-specific web solutions on a contract basis',
    ],
  },
  {
    role: 'Hardware Engineer Intern',
    company: 'Bright Burnishing Machine Pvt. Ltd.',
    period: 'May 2024 – Oct 2024',
    type: 'work',
    tags: ['Hardware', 'Embedded', 'PCB'],
    points: [
      'Hardware design and testing for industrial burnishing equipment',
      'Embedded firmware development for machine control systems',
    ],
  },
  {
    role: 'Industrial Trainee',
    company: 'ISRO Propulsion Complex, Mahendragiri',
    period: 'Dec 2023',
    type: 'training',
    tags: ['Propulsion', 'ISRO', 'Systems'],
    points: [
      'Hands-on exposure to liquid propulsion systems and test facilities',
      'Training on propellant handling, engine testing, and quality assurance',
    ],
  },
]

function TimelineItem({ item, index, isLast }) {
  const [ref, inView] = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 transition-all duration-700 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center z-10 border ${
          item.type === 'work'
            ? 'bg-navy-700 border-cyan-400/40'
            : 'bg-navy-700 border-amber-400/40'
        }`}>
          {item.type === 'work'
            ? <Briefcase size={15} className="text-cyan-400" />
            : <GraduationCap size={15} className="text-amber-400" />
          }
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-navy-500 to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 flex-1 ${isLast ? 'pb-0' : ''}`}>
        <div className="card group">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="font-mono text-sm font-semibold text-slate-light">
                {item.role}
              </h3>
              <p className="text-sm text-slate-muted mt-0.5">{item.company}</p>
            </div>
            <span className="font-mono text-xs text-cyan-400/70 whitespace-nowrap flex-shrink-0">
              {item.period}
            </span>
          </div>

          <ul className="space-y-1.5 mb-4">
            {item.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-muted">
                <span className="text-cyan-400 mt-1 flex-shrink-0 text-xs">▸</span>
                {pt}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label">03 / experience</p>
          <h2 className="section-title">
            Where I've<br />
            <span className="text-cyan-400">worked.</span>
          </h2>
        </div>

        <div className="max-w-2xl">
          {EXPERIENCE.map((item, i) => (
            <TimelineItem
              key={item.role + item.company}
              item={item}
              index={i}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
