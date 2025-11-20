import React from 'react'

export default function GradientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl animate-blob" />
      <div className="absolute top-10 right-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl animate-blob animation-delay-4000" />
    </div>
  )
}
