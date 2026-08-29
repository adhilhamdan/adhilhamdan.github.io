import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-navy-600/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-cyan-400 font-semibold text-sm">AH://</span>
          <span className="font-mono text-xs text-slate-muted">
            © {new Date().getFullYear()} Adhil Hamdan
          </span>
        </div>

        <p className="font-mono text-xs text-slate-muted text-center">
          Built with React + Vite · Hosted on GitHub Pages
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/adhilhamdan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-cyan-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/adhil-hamdan-aa98a724b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-cyan-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:adhil30072003@gmail.com"
            className="text-slate-muted hover:text-cyan-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
