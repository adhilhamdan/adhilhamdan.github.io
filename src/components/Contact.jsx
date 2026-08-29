import React from 'react'
import { useInView } from '../hooks/useInView'
import { Mail, Github, Linkedin, MapPin, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const EMAIL = 'adhil30072003@gmail.com'

export default function Contact() {
  const [ref, inView] = useInView(0.1)
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-navy-800/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label">07 / contact</p>
          <h2 className="section-title mb-4">
            Let's<br />
            <span className="text-cyan-400">connect.</span>
          </h2>
          <p className="text-slate-muted max-w-md mb-12 leading-relaxed">
            Open to MS program discussions, research collaborations, and VLSI/DFT roles.
            Reach out — I respond within 24 hours.
          </p>

          <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
            {/* Email card */}
            <div className="card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-navy-700 border border-navy-500 group-hover:border-cyan-400/40 flex items-center justify-center transition-colors duration-300">
                  <Mail size={16} className="text-cyan-400" />
                </div>
                <span className="font-mono text-xs text-slate-muted uppercase tracking-wider">Email</span>
              </div>
              <p className="font-mono text-sm text-slate-light mb-4 break-all">{EMAIL}</p>
              <div className="flex gap-2">
                <a href={`mailto:${EMAIL}`} className="btn-primary text-xs py-2 px-4 flex-1 text-center">
                  send email
                </a>
                <button
                  onClick={copyEmail}
                  className="btn-outline text-xs py-2 px-3 flex items-center gap-1.5"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
                  {copied ? 'copied' : 'copy'}
                </button>
              </div>
            </div>

            {/* GitHub card */}
            <div className="card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-navy-700 border border-navy-500 group-hover:border-cyan-400/40 flex items-center justify-center transition-colors duration-300">
                  <Github size={16} className="text-cyan-400" />
                </div>
                <span className="font-mono text-xs text-slate-muted uppercase tracking-wider">GitHub</span>
              </div>
              <p className="font-mono text-sm text-slate-light mb-4">github.com/adhilhamdan</p>
              <a
                href="https://github.com/adhilhamdan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2 px-4 inline-flex items-center gap-2"
              >
                <Github size={13} />
                view profile
              </a>
            </div>

            {/* LinkedIn card */}
            <div className="card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-navy-700 border border-navy-500 group-hover:border-cyan-400/40 flex items-center justify-center transition-colors duration-300">
                  <Linkedin size={16} className="text-cyan-400" />
                </div>
                <span className="font-mono text-xs text-slate-muted uppercase tracking-wider">LinkedIn</span>
              </div>
              <p className="font-mono text-sm text-slate-light mb-4">Adhil Hamdan</p>
              <a
                href="https://linkedin.com/in/adhil-hamdan-aa98a724b"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-2 px-4 inline-flex items-center gap-2"
              >
                <Linkedin size={13} />
                connect
              </a>
            </div>

            {/* Location card */}
            <div className="card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-navy-700 border border-navy-500 group-hover:border-cyan-400/40 flex items-center justify-center transition-colors duration-300">
                  <MapPin size={16} className="text-cyan-400" />
                </div>
                <span className="font-mono text-xs text-slate-muted uppercase tracking-wider">Location</span>
              </div>
              <p className="font-mono text-sm text-slate-light mb-1">Bengaluru, Karnataka</p>
              <p className="text-xs text-slate-muted">India · Open to relocation for MS programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
