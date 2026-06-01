"use client";

const BRITISH_MARKERS = [];
{
    name: "Edinburgh",
    type: "city",
    x: 56,
    y: 23,
    href: "#",
  },
  {
    name: "Liverpool",
    type: "city",
    x: 45,
    y: 48,
    href: "#",
  },
  {
    name: "London",
    type: "city",
    x: 63,
    y: 72,
    href: "#",
  },
  {
    name: "Lake District",
    type: "region",
    x: 46,
    y: 41,
    href: "#",
  },
  {
    name: "Cornwall",
    type: "region",
    x: 24,
    y: 82,
    href: "#",
  },
  {
    name: "Isle of Man",
    type: "region",
    x: 38,
    y: 45,
    href: "#",
  },
];
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
        {BRITISH_MARKERS.map((marker) => (
  <div
    key={marker.name}
    className="absolute cursor-pointer group"
    style={{
      left: `${marker.x}%`,
      top: `${marker.y}%`,
      transform: "translate(-50%, -50%)",
    }}
    onClick={() => {
      if (marker.href !== "#") {
        window.location.href = marker.href;
      }
    }}
  >
    <div
      className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
        marker.type === "city"
          ? "bg-blue-500"
          : "bg-green-500"
      }`}
    />

      </div>
    </div>
  );
}
