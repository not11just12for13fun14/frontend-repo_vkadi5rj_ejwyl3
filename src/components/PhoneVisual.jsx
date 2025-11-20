import React from 'react'
import { Phone, Waveform, PhoneCall, CheckCircle2 } from 'lucide-react'

function WaveBar({ delay = 0 }) {
  return (
    <span
      className="inline-block h-6 w-1 rounded bg-cyan-300/80 mx-[3px]"
      style={{
        animation: `wave 1200ms ease-in-out ${delay}ms infinite`,
      }}
    />
  )
}

export default function PhoneVisual() {
  return (
    <div className="relative h-[540px] w-[340px] [perspective:1200px]">
      {/* Halo ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-500/30 via-purple-500/30 to-yellow-400/20 blur-2xl" />
      </div>

      {/* Orbiting particles */}
      <div className="absolute inset-0 animate-spin-slow">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/80 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            style={{
              top: `${30 + Math.sin(i) * 40}%`,
              left: `${30 + Math.cos(i) * 40}%`,
              animation: `float ${3000 + i * 120}ms ease-in-out ${i * 90}ms infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Phone */}
      <div className="absolute right-0 top-6 h-[520px] w-[300px] rotate-6 [transform-style:preserve-3d]">
        <div className="relative h-full w-full rounded-[36px] bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 shadow-2xl shadow-cyan-500/10 overflow-hidden">
          {/* Glassy edges */}
          <div className="absolute inset-0 rounded-[36px] ring-1 ring-white/10" />
          {/* Speaker notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 h-1.5 w-24 rounded-full bg-white/10" />

          {/* Screen content */}
          <div className="relative z-10 h-full w-full p-4 flex flex-col">
            {/* Call header */}
            <div className="flex items-center justify-between text-xs text-white/70">
              <span className="inline-flex items-center gap-1">
                <PhoneCall className="h-3.5 w-3.5 text-cyan-300" /> Active call
              </span>
              <span>00:42</span>
            </div>

            <div className="mt-8 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400/40 to-purple-400/40 backdrop-blur-md ring-1 ring-white/20 flex items-center justify-center">
                <Phone className="h-8 w-8 text-cyan-200" />
              </div>
              <div className="mt-3 text-white/90 font-medium">New Caller</div>
            </div>

            {/* Waveform */}
            <div className="mt-6 flex items-end justify-center">
              {Array.from({ length: 24 }).map((_, i) => (
                <WaveBar key={i} delay={i * 60} />
              ))}
            </div>

            {/* Transcript bubbles */}
            <div className="mt-6 space-y-3">
              <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 p-3 text-xs">
                “Hi, thanks for calling! Are you booking a table or placing an order?”
              </div>
              <div className="max-w-[88%] ml-auto rounded-2xl rounded-tr-md bg-cyan-400/10 border border-cyan-300/20 text-cyan-100 p-3 text-xs">
                “Got it. I can book you for 7:30 PM tonight.”
              </div>
            </div>

            {/* Bottom controls */}
            <div className="mt-auto grid grid-cols-3 gap-3 pb-2">
              <button className="h-12 rounded-2xl bg-white/5 border border-white/10 text-white/80">Mute</button>
              <button className="h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30">Speak</button>
              <button className="h-12 rounded-2xl bg-white/5 border border-white/10 text-white/80">End</button>
            </div>
          </div>

          {/* Shine */}
          <div className="absolute -left-12 -top-12 h-40 w-40 bg-white/10 blur-3xl rounded-full" />
        </div>
      </div>

      {/* Stat cards */}
      <div className="absolute -left-2 top-10 space-y-3">
        <StatCard title="26 calls answered today" />
        <StatCard title="14 bookings created" icon="check" />
        <StatCard title="0 missed calls" accent="green" />
      </div>
    </div>
  )
}

function StatCard({ title, icon, accent = 'cyan' }) {
  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-3 py-2 shadow-lg shadow-cyan-500/10 min-w-[200px]">
      <div className="flex items-center gap-2 text-[11px] text-white/90">
        {icon === 'check' ? (
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
        ) : (
          <Waveform className="h-3.5 w-3.5 text-cyan-300" />
        )}
        <span>{title}</span>
      </div>
    </div>
  )
}
