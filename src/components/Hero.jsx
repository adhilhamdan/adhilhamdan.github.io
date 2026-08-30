import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const TITLES = [
  'VLSI Engineer',
  'DFT Engineer',
  'Physical Design Engineer',
  'SLM Enthusiast',
  'MS Applicant',
]

function useTyped(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx((c) => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx((w) => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx((c) => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

export default function Hero() {
  const typed = useTyped(TITLES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Circuit trace background SVG — the signature element */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Horizontal trace top */}
        <path
          className="circuit-path"
          d="M 0 180 L 120 180 L 120 140 L 340 140 L 340 180 L 600 180"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="1"
          filter="url(#glow)"
        />
        {/* Vertical left trace */}
        <path
          className="circuit-path"
          d="M 80 0 L 80 100 L 40 100 L 40 300 L 80 300 L 80 500"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="1"
          filter="url(#glow)"
          style={{ animationDelay: '0.8s' }}
        />
        {/* Bottom right trace */}
        <path
          className="circuit-path"
          d="M 100% 400 L calc(100% - 100px) 400 L calc(100% - 100px) 500 L calc(100% - 200px) 500"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="1"
          filter="url(#glow)"
          style={{ animationDelay: '1.2s' }}
        />
        {/* Via dots */}
        <circle cx="120" cy="140" r="3" fill="#00D4FF" opacity="0.6" filter="url(#glow)" />
        <circle cx="340" cy="180" r="3" fill="#00D4FF" opacity="0.6" filter="url(#glow)" />
        <circle cx="80" cy="100" r="3" fill="#00D4FF" opacity="0.6" filter="url(#glow)" />
        <circle cx="40" cy="300" r="3" fill="#00D4FF" opacity="0.6" filter="url(#glow)" />
      </svg>

      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* Profile photo */}
        <div className="flex justify-center mb-8 opacity-0 animate-[fadeUp_0.6s_ease_0.1s_forwards]">
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-lg shadow-cyan-400/10">
              <img
                src="/adhil.jpg"
                alt="Adhil Hamdan"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-navy-900" title="Open to opportunities" />
          </div>
        </div>
        {/* Eyebrow */}
        <p className="font-mono text-cyan-400 text-sm tracking-[0.25em] mb-6 opacity-0 animate-[fadeUp_0.6s_ease_0.2s_forwards]">
          &gt; Hello, World. I'm
        </p>

        {/* Name */}
        <h1 className="font-mono text-5xl md:text-7xl font-bold text-slate-light mb-4 opacity-0 animate-[fadeUp_0.6s_ease_0.4s_forwards]">
          Adhil<span className="text-cyan-400">.</span>
        </h1>

        {/* Typed role */}
        <div className="font-mono text-xl md:text-2xl text-slate-muted mb-8 h-8 opacity-0 animate-[fadeUp_0.6s_ease_0.6s_forwards]">
          <span className="text-cyan-400/50">// </span>
          <span className="text-slate-light">{typed}</span>
          <span className="animate-blink text-cyan-400 ml-0.5">|</span>
        </div>

        {/* Tagline */}
        <p className="text-slate-muted max-w-lg mx-auto leading-relaxed mb-10 opacity-0 animate-[fadeUp_0.6s_ease_0.8s_forwards]">
          ECE graduate & Associate VLSI Engineer specializing in Design for Testability,
          Silicon Lifecycle Management, and Physical Design. Building silicon that works.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-[fadeUp_0.6s_ease_1s_forwards]">
          <a href="#projects" className="btn-primary">
            view projects
          </a>
          <a href="#contact" className="btn-outline">
            get in touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 opacity-0 animate-[fadeUp_0.6s_ease_1.2s_forwards]">
          <a
            href="https://github.com/adhilhamdan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-cyan-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/adhil-hamdan-aa98a724b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-cyan-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:adhil30072003@gmail.com"
            className="text-slate-muted hover:text-cyan-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-muted hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
