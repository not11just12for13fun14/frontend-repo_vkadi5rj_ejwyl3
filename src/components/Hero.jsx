import React from 'react'
import { ArrowRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import GradientBlobs from './GradientBlobs'
import PhoneVisual from './PhoneVisual'
import CreatorFrame from './CreatorFrame'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#070a14]">
      {/* Deep gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_70%_40%,rgba(88,28,135,0.35),transparent_60%),radial-gradient(70%_60%_at_30%_70%,rgba(14,165,233,0.25),transparent_60%)]" />

      <GradientBlobs />

      {/* Spline 3D aura center */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left copy */}
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1 text-[11px] text-white/80 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 animate-pulse" />
              AI VOICE AGENT • ALWAYS ON
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-[64px] leading-[0.95] tracking-tight font-[600] text-white" style={{fontFamily: 'Space Grotesk, var(--font-sans)'}}>
              Your front desk, but smarter.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl">
              Answers every call, books tables or trials, and follows up by SMS automatically — so you never miss revenue.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="group inline-flex items-center justify-center h-12 px-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-950 font-semibold shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)]">
                See it answer a call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="h-12 px-5 rounded-2xl bg-white/5 text-white/90 border border-white/10 hover:bg-white/7 backdrop-blur-md">
                Add to my business
              </button>
            </div>

            <div className="mt-10 hidden md:block">
              <CreatorFrame />
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="absolute -inset-20 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
            </div>
            <PhoneVisual />
          </div>
        </div>

        {/* Mobile creator frame */}
        <div className="mt-10 md:hidden">
          <CreatorFrame />
        </div>
      </div>

      {/* subtle gradient overlay to prevent blocking spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070a14] via-transparent to-transparent" />

      {/* Keyframes */}
      <style>{`
        @keyframes wave { 0%, 100% { transform: scaleY(0.4); opacity: 0.6 } 50% { transform: scaleY(1.6); opacity: 1 } }
        @keyframes float { from { transform: translateY(-4px) } to { transform: translateY(6px) } }
        .animate-blob { animation: blob 14s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes blob { 0%, 100% { transform: translate(0px, 0px) scale(1) } 33% { transform: translate(20px, -30px) scale(1.05) } 66% { transform: translate(-10px, 10px) scale(0.98) } }
        .animate-spin-slow { animation: spin 18s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg) } }
      `}</style>
    </section>
  )
}
