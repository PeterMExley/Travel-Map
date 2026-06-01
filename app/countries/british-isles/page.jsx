"use client";

const BRITISH_MARKERS = [
  {
    name: "Edinburgh",
    type: "city",
    x: 58.1,
    y: 32.7,
    href: "#",
  },
  {
    name: "Birmingham",
    type: "city",
    x: 61.0,
    y: 63.0,
    href: "#",
  },
  {
    name: "Nottingham",
    type: "city",
    x: 64.0,
    y: 59.0,
    href: "#",
  },
  {
    name: "Dublin",
    type: "city",
    x: 42.0,
    y: 55.0,
    href: "#",
  },
  {
    name: "Belfast",
    type: "city",
    x: 43.0,
    y: 41.0,
    href: "#",
  },
  {
    name: "York",
    type: "city",
    x: 64.0,
    y: 51.0,
    href: "#",
  },
  {
    name: "Newcastle",
    type: "city",
    x: 69.0,
    y: 44.0,
    href: "#",
  },
  {
    name: "Cardiff",
    type: "city",
    x: 52.0,
    y: 69.0,
    href: "#",
  },
  {
    name: "Southampton",
    type: "city",
    x: 63.0,
    y: 80.0,
    href: "#",
  },

  {
    name: "Liverpool",
    type: "city",
    x: 57.3,
    y: 57.1,
    href: "#",
  },
  {
    name: "London",
    type: "city",
    x: 74.2,
    y: 76.7,
    href: "#",
  },
  {
    name: "Lake District",
    type: "region",
    x: 57.1,
    y: 45.4,
    href: "#",
  },
  {
    name: "Yorkshire Dales",
    type: "region",
    x: 61.0,
    y: 47.0,
    href: "#",
  },
  {
    name: "Peak District",
    type: "region",
    x: 60.0,
    y: 57.0,
    href: "#",
  },
  {
    name: "Pembrokeshire",
    type: "region",
    x: 44.0,
    y: 72.0,
    href: "#",
  },
  {
    name: "Devon",
    type: "region",
    x: 50.0,
    y: 82.0,
    href: "#",
  },
  {
    name: "Suffolk",
    type: "region",
    x: 73.0,
    y: 73.0,
    href: "#",
  },
  {
    name: "Donegal",
    type: "region",
    x: 33.0,
    y: 34.0,
    href: "#",
  },
  {
    name: "County Kerry",
    type: "region",
    x: 30.0,
    y: 67.0,
    href: "#",
  },
  {
    name: "Isle of Man",
    type: "region",
    x: 50.0,
    y: 49.2,
    href: "#",
  },
  {
    name: "Cornwall",
    type: "region",
    x: 44.6,
    y: 90.3,
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
              className={`w-5 h-5 rounded-full border-2 border-white shadow-lg ${
                marker.type === "city" ? "bg-blue-500" : "bg-green-500"
              }`}
            />

            <div className="absolute left-6 top-[-3px] whitespace-nowrap rounded-md bg-slate-950/70 px-2 py-1 text-sm font-medium text-white">
              {marker.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
