import React from 'react'
import { Play } from 'lucide-react'

export default function CreatorFrame() {
  return (
    <div className="relative w-40 sm:w-48 md:w-56">
      <div className="absolute -top-3 -right-3 z-10 inline-flex items-center gap-1 rounded-full bg-white/10 text-white/90 text-[10px] px-2 py-1 backdrop-blur-md border border-white/15">
        <Play className="h-3 w-3 text-yellow-300" /> Watch how it works
      </div>
      <div className="rounded-[20px] p-[2px] bg-[conic-gradient(at_bottom_left,_theme(colors.cyan.400),_theme(colors.yellow.300),_theme(colors.fuchsia.400),_theme(colors.cyan.400))]">
        <div className="rounded-[18px] overflow-hidden bg-white/5 backdrop-blur-md border border-white/10">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Creator" className="object-cover h-56 w-full" />
        </div>
      </div>
      <div className="mt-2 text-center text-[11px] text-white/70">Anthony – Your AI co-pilot</div>
    </div>
  )
}
