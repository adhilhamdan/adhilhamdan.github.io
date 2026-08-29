import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'publications', href: '#publications' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-navy-600/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-mono text-cyan-400 font-semibold text-sm tracking-wider">
          AH<span className="text-slate-muted">://</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">
                <span className="text-cyan-400/60 mr-1">./</span>{l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block btn-outline text-xs py-2 px-4"
        >
          resume.pdf
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-muted hover:text-cyan-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-800/98 backdrop-blur-md border-b border-navy-600/50 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="nav-link block py-1"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-cyan-400/60 mr-1">./</span>{l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-block text-xs"
              >
                resume.pdf
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
