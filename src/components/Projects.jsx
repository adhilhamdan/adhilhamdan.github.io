import React, { useEffect, useState } from 'react'
import { Github, ExternalLink, GitBranch } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const REPO_SLUGS = [
  'bist-4bit-alu-dft',
  'stroke-care-360',
  'geofencing-speed-limiter',
  'dual-layer-image-security',
  'adaptive-dcp-image-enhancement',
]

const REPO_META = {
  'bist-4bit-alu-dft': {
    display: 'BIST for 4-bit ALU',
    domain: 'DFT / Verification',
    highlight: 'Galois LFSR + MISR based Built-In Self Test. Achieves 100% fault coverage on a 4-bit ALU using Verilog RTL. Simulated on Xilinx Vivado.',
    color: '#00D4FF',
  },
  'stroke-care-360': {
    display: 'Stroke Care 360',
    domain: 'Embedded / IoT',
    highlight: 'Integrated health monitoring system — PPG-based SpO₂/HR, RTC, GPS, and GSM. Arduino (.ino) firmware for real-time patient vitals alerting.',
    color: '#4ADE80',
  },
  'geofencing-speed-limiter': {
    display: 'Geofencing Speed Limiter',
    domain: 'Embedded Systems',
    highlight: 'GPS-based adaptive speed control using Haversine formula for distance calculation. Automatically limits vehicle speed inside geofenced zones.',
    color: '#F59E0B',
  },
  'dual-layer-image-security': {
    display: 'Dual-Layer Image Security',
    domain: 'Image Processing',
    highlight: 'Two-tier image encryption using chaotic maps — logistic and Henon maps for pixel scrambling and intensity transformation. Published at ICSSIC.',
    color: '#A78BFA',
  },
  'adaptive-dcp-image-enhancement': {
    display: 'Adaptive DCP Image Enhancement',
    domain: 'Image Processing',
    highlight: 'Dark Channel Prior dehazing enhanced with fuzzy logic for adaptive parameter tuning. Results published in Springer-indexed journal.',
    color: '#FB923C',
  },
}

function LanguageDot({ color }) {
  return (
    <span
      className="inline-block w-2.5 h-2.5 rounded-full mr-1.5 flex-shrink-0"
      style={{ backgroundColor: color || '#8B9BB4' }}
    />
  )
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days < 1) return 'today'
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

function ProjectCard({ repo, meta, index }) {
  const [ref, inView] = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`card group flex flex-col transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-1 h-10 rounded-full flex-shrink-0 mr-3 mt-0.5"
          style={{ backgroundColor: meta.color }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-mono text-sm font-semibold text-slate-light group-hover:text-cyan-400 transition-colors duration-200 leading-tight">
            {meta.display}
          </h3>
          <span
            className="font-mono text-xs mt-1 inline-block"
            style={{ color: meta.color }}
          >
            {meta.domain}
          </span>
        </div>
        <div className="flex items-center gap-2 ml-3 flex-shrink-0">
          <a
            href={`https://github.com/adhilhamdan/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-cyan-400 transition-colors duration-200"
            aria-label="View on GitHub"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-muted leading-relaxed mb-4 flex-1">
        {repo.description || meta.highlight}
      </p>

      {/* Highlight blurb */}
      <p className="text-xs text-slate-muted/70 leading-relaxed mb-4 italic border-l-2 pl-3"
        style={{ borderColor: meta.color + '60' }}>
        {meta.highlight}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-navy-500">
        <div className="flex items-center gap-3">
          {repo.language && (
            <span className="flex items-center text-xs text-slate-muted font-mono">
              <LanguageDot color={
                repo.language === 'Verilog' ? '#00D4FF' :
                repo.language === 'C++' ? '#F34B7D' :
                repo.language === 'Python' ? '#3572A5' :
                repo.language === 'MATLAB' ? '#e16737' :
                '#8B9BB4'
              } />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1 text-xs text-slate-muted font-mono">
              ★ {repo.stargazers_count}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

function SkeletonCard() {
  return (
    <div className="card animate-pulse">
      <div className="h-4 bg-navy-500 rounded w-3/4 mb-3" />
      <div className="h-3 bg-navy-500 rounded w-1/3 mb-4" />
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-navy-500 rounded" />
        <div className="h-3 bg-navy-500 rounded w-5/6" />
        <div className="h-3 bg-navy-500 rounded w-4/6" />
      </div>
      <div className="h-px bg-navy-500 mb-3" />
      <div className="flex justify-between">
        <div className="h-3 bg-navy-500 rounded w-16" />
        <div className="h-3 bg-navy-500 rounded w-12" />
      </div>
    </div>
  )
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [headerRef, headerInView] = useInView(0.1)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/adhilhamdan/repos?per_page=100')
        if (!res.ok) throw new Error('GitHub API error')
        const all = await res.json()
        const filtered = REPO_SLUGS
          .map((slug) => all.find((r) => r.name === slug))
          .filter(Boolean)
        setRepos(filtered)
      } catch (e) {
        setError(e.message)
        // fallback: use slugs with meta only
        setRepos(REPO_SLUGS.map((name) => ({ name, language: null, pushed_at: null, stargazers_count: 0 })))
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  return (
    <section id="projects" className="py-24 px-6 bg-navy-800/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`mb-12 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="section-label">02 / projects</p>
          <div className="flex items-end justify-between">
            <h2 className="section-title">
              What I've<br />
              <span className="text-cyan-400">built.</span>
            </h2>
            <a
              href="https://github.com/adhilhamdan"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 font-mono text-sm text-slate-muted hover:text-cyan-400 transition-colors duration-200"
            >
              <Github size={16} />
              view all on github
            </a>
          </div>
          <p className="text-slate-muted mt-4 max-w-xl">
            Projects spanning VLSI DFT, Physical Design, Embedded Systems, and Image Processing.
            Live data pulled from GitHub.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading
            ? REPO_SLUGS.map((s) => <SkeletonCard key={s} />)
            : repos.map((repo, i) => (
                <ProjectCard
                  key={repo.name}
                  repo={repo}
                  meta={REPO_META[repo.name]}
                  index={i}
                />
              ))}
        </div>

        {/* Coming soon */}
        <div className="mt-5 grid md:grid-cols-2 gap-5">
          {[
            { name: '1×3 Router Physical Design', domain: 'VLSI PD', tools: 'Synopsys Fusion Compiler' },
            { name: '32-bit Vedic Multiplier PD', domain: 'VLSI PD', tools: 'OpenROAD, Nangate45' },
          ].map((p) => (
            <div key={p.name} className="card border-dashed border-navy-500 opacity-50">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch size={14} className="text-cyan-400/50" />
                <span className="font-mono text-xs text-cyan-400/50 tracking-wider">COMING SOON</span>
              </div>
              <h3 className="font-mono text-sm font-semibold text-slate-light/60">{p.name}</h3>
              <p className="text-xs text-slate-muted mt-1">{p.domain} · {p.tools}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <a
            href="https://github.com/adhilhamdan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={15} />
            view all on github
          </a>
        </div>
      </div>
    </section>
  )
}
