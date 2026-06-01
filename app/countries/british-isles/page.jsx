"use client";

const BRITISH_MARKERS = [];

export default function BritishIslesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-4">British Isles</h1>

      <p className="text-slate-400 mb-8">
        Click a marker to open a destination gallery.
      </p>

      <div className="relative mx-auto max-w-5xl h-[850px] rounded-[2rem] border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
        <img
          src="/maps/british-isles.jpeg"
          alt="British Isles map"
          className="absolute inset-0 h-full w-full object-contain opacity-90"
        />
      </div>
    </div>
  );
}
