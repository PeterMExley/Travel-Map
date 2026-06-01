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
    name: "Newcastle",
    type: "city",
    x: 66.0,
    y: 41.3,
    href: "#",
  },
  {
    name: "Belfast",
    type: "city",
    x: 43.7,
    y: 46.2,
    href: "#",
  },
  {
    name: "York",
    type: "city",
    x: 66.4,
    y: 52,
    href: "#",
  },
  {
    name: "Liverpool",
    type: "city",
    x: 57.3,
    y: 57.1,
    href: "/countries/british-isles/liverpool",
  },
  {
    name: "Dublin",
    type: "city",
    x: 40.0,
    y: 58.4,
    href: "#",
  },
  {
    name: "Nottingham",
    type: "city",
    x: 66.7,
    y: 63,
    href: "#",
  },
  {
    name: "Birmingham",
    type: "city",
    x: 63.8,
    y: 69.2,
    href: "#",
  },
  {
    name: "Cardiff",
    type: "city",
    x: 56.1,
    y: 76.4,
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
    name: "Southampton",
    type: "city",
    x: 64.4,
    y: 82.9,
    href: "#",
  },
  {
    name: "Donegal",
    type: "region",
    x: 33.1,
    y: 42.9,
    href: "#",
  },
  {
    name: "County Kerry",
    type: "region",
    x: 23.1,
    y: 69.6,
    href: "#",
  },
  {
    name: "Lake District",
    type: "region",
    x: 57.1,
    y: 45.4,
    href: "/countries/british-isles/lake-district",
  },
  {
    name: "Yorkshire Dales",
    type: "region",
    x: 61.2,
    y: 48.8,
    href: "#",
  },
  {
    name: "Peak District",
    type: "region",
    x: 64.1,
    y: 61,
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
    name: "Pembrokeshire",
    type: "region",
    x: 44.7,
    y: 73.7,
    href: "#",
  },
  {
    name: "Devon",
    type: "region",
    x: 48.3,
    y: 85.8,
    href: "#",
  },
  {
    name: "Cornwall",
    type: "region",
    x: 44.6,
    y: 90.3,
    href: "#",
  },
  {
    name: "Suffolk",
    type: "region",
    x: 79.2,
    y: 68.2,
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
     <a
  key={marker.name}
  href={marker.href === "#" ? undefined : marker.href}
  className="absolute cursor-pointer group pointer-events-auto"
  style={{
    left: `${marker.x}%`,
    top: `${marker.y}%`,
    transform: "translate(-50%, -50%)",
  }}
>
          >
            <>
              <span
                className={`absolute -inset-2 rounded-full opacity-30 animate-ping ${
                  marker.type === "city" ? "bg-blue-500" : "bg-green-500"
                }`}
              />

              <span
                className={`relative block w-5 h-5 rounded-full border-2 border-white shadow-lg ${
                  marker.type === "city" ? "bg-blue-500" : "bg-green-500"
                }`}
              />
            </>

            <div className="absolute left-6 top-[-3px] whitespace-nowrap rounded-md bg-slate-950/70 px-2 py-1 text-xs font-medium text-white">
              {marker.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
