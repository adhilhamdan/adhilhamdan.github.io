import React from 'react'
import { useInView } from '../hooks/useInView'

const SKILL_GROUPS = [
  {
    label: 'HDL & Languages',
    color: '#00D4FF',
    skills: ['Verilog', 'SystemVerilog', 'TCL', 'MATLAB', 'C', 'Python'],
  },
  {
    label: 'VLSI Physical Design',
    color: '#4ADE80',
    skills: [
      'Floorplanning',
      'Power Planning',
      'Placement & CTS',
      'Routing',
      'STA',
      'Timing Closure',
      'IR Drop Analysis',
    ],
  },
  {
    label: 'DFT & Verification',
    color: '#A78BFA',
    skills: [
      'Scan Insertion',
      'ATPG',
      'MBIST',
      'IJTAG',
      'Fault Simulation',
      'SpyGlass DFT',
      'Tessent',
    ],
  },
  {
    label: 'EDA Tools',
    color: '#F59E0B',
    skills: [
      'Synopsys Fusion Compiler',
      'PrimeTime',
      'OpenROAD',
      'Xilinx Vivado',
      'Siemens Tessent',
      'SpyGlass',
    ],
  },
  {
    label: 'Embedded & Hardware',
    color: '#FB923C',
    skills: [
      'Arduino / AVR',
      'ESP32',
      'GPS / GSM Modules',
      'PCB Design',
      'I2C / SPI / UART',
      'RTOS Basics',
    ],
  },
  {
    label: 'Standards & Concepts',
    color: '#F472B6',
    skills: [
      'IEEE 1149.1 JTAG',
      'IEEE 1687 IJTAG',
      'ISO 26262',
      'Silicon Lifecycle Mgmt',
      'Low-Power Design',
      'DFM',
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label">05 / skills</p>
          <h2 className="section-title">
            Tools &<br />
            <span className="text-cyan-400">technologies.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, gi) => {
            const [cardRef, cardInView] = useInView(0.1)
            return (
              <div
                key={group.label}
                ref={cardRef}
                className={`card transition-all duration-700 ${
                  cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${gi * 80}ms` }}
              >
                {/* Group header */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-1.5 h-4 rounded-full"
                    style={{ backgroundColor: group.color }}
                  />
                  <p
                    className="font-mono text-xs font-semibold tracking-wider uppercase"
                    style={{ color: group.color }}
                  >
                    {group.label}
                  </p>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1 rounded-md border text-slate-light/80 transition-colors duration-200 hover:text-slate-light cursor-default"
                      style={{
                        backgroundColor: group.color + '10',
                        borderColor: group.color + '30',
                      }}
                    >
                      {skill}
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
