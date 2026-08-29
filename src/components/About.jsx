import React from 'react'
import { useInView } from '../hooks/useInView'
import { Cpu, FlaskConical, Zap } from 'lucide-react'

const interests = [
  {
    icon: Cpu,
    title: 'Silicon Lifecycle Management',
    desc: 'In-field BIST, aging mechanisms, PVT sensors, and ISO 26262 for long-lived silicon.',
  },
  {
    icon: Zap,
    title: 'DFT for Low-Power SoCs',
    desc: 'Scan insertion, ATPG, MBIST, IJTAG, and SpyGlass DFT verification for IoT-grade chips.',
  },
  {
    icon: FlaskConical,
    title: 'Hardware-Software Co-design',
    desc: 'Bridging RTL and firmware — from embedded sensor systems to ASIC physical design flows.',
  },
]

export default function About() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label">01 / about</p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text */}
            <div>
              <h2 className="section-title mb-6">
                Building silicon<br />
                <span className="text-cyan-400">that lasts.</span>
              </h2>
              <div className="space-y-4 text-slate-muted leading-relaxed">
                <p>
                  I'm an Electronics & Communication Engineering graduate from{' '}
                  <span className="text-slate-light">PSG College of Technology</span> (NIRF Rank 67),
                  currently working as an Associate VLSI Engineer at{' '}
                  <span className="text-slate-light">Krivya Semicon</span>, contributing to DFT
                  workflows at SanDisk — covering IP wrapper generation, IJTAG, MBIST insertion,
                  and ATPG using Tessent and Spyglass.
                </p>
                <p>
                  Before that, I completed Physical Design training at{' '}
                  <span className="text-slate-light">MavenSilicon</span> — end-to-end ASIC PD
                  flow from floorplanning through timing closure. I'm a published researcher with
                  a <span className="text-slate-light">Springer-indexed paper</span> in image
                  processing, and I'm applying for Master's programs to go deeper into
                  silicon reliability and testability.
                </p>
                <p>
                  Outside of chips — I founded the{' '}
                  <span className="text-slate-light">Green Kanyakumari Foundation</span> and
                  served as Secretary of the IETE Student Chapter at PSG Tech.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-navy-600">
                {[
                  { val: '7.93', label: 'CGPA' },
                  { val: '5+', label: 'Projects' },
                  { val: '7.0', label: 'IELTS Band' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-mono text-2xl font-bold text-cyan-400">{s.val}</div>
                    <div className="font-mono text-xs text-slate-muted mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research interests */}
            <div className="space-y-4">
              <p className="font-mono text-xs text-slate-muted tracking-widest uppercase mb-6">
                Research Interests
              </p>
              {interests.map((item) => (
                <div
                  key={item.title}
                  className="card group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-navy-700 border border-navy-500 group-hover:border-cyan-400/40 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <item.icon size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-mono text-sm font-semibold text-slate-light mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Education badge */}
              <div className="card mt-4">
                <p className="font-mono text-xs text-cyan-400 tracking-wider mb-2">EDUCATION</p>
                <p className="text-sm font-semibold text-slate-light">
                  B.E. Electronics & Communication Engineering
                </p>
                <p className="text-sm text-slate-muted mt-1">
                  PSG College of Technology, Coimbatore
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="tag">CGPA: 7.93</span>
                  <span className="tag">2021 – 2025</span>
                  <span className="tag">NIRF #67</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
