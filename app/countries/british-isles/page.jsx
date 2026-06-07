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
    y: 52.5,
    href: "#",
  },
  {
    name: "Liverpool",
    type: "city",
    x: 57.5,
    y: 56.4,
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
    y: 63.0,
    href: "#",
    labelPosition: "left",
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
    name: "New Forest",
    type: "region",
    x: 64,
    y: 85.4,
    href: "#",
  },
  {
    name: "Somerset",
    type: "region",
    x: 55.2,
    y: 81.5,
    href: "#",
  },
  {
    name: "Dorset",
    type: "region",
    x: 57.6,
    y: 86.1,
    href: "#",
  },
  {
    name: "Kent",
    type: "region",
    x: 79.6,
    y: 79.7,
    href: "#",
  },
  {
    name: "Cheshire",
    type: "region",
    x: 57.6,
    y: 60.9,
    href: "#",
    labelPosition: "left",
  },
  {
    name: "Antrim",
    type: "region",
    x: 42.9,
    y: 42.5,
    href: "#",
  },
  {
    name: "Wicklow",
    type: "region",
    x: 37.4,
    y: 62.6,
    href: "#",
  },
  {
    name: "TT Races",
    type: "region",
    x: 48.9,
    y: 50.9,
    href: "#",
  },
  {
    name: "Northumbria",
    type: "region",
    x: 64.5,
    y: 37.4,
    href: "#",
  },
  {
    name: "Whitby",
    type: "city",
    x: 70.9,
    y: 49.5,
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
    name: "Kerry",
    type: "region",
    x: 23.1,
    y: 69.6,
    href: "#",
  },
  {
    name: "Lakes",
    type: "region",
    x: 57.8,
    y: 44.2,
    href: "/countries/british-isles/lake-district",
  },
  {
    name: "Yorkshire",
    type: "region",
    x: 62.2,
    y: 48.6,
    href: "#",
  },
  {
    name: "Burghley",
    type: "region",
    x: 70.7,
    y: 66.2,
    href: "/countries/british-isles/burghley-horse-trials",
  },
  {
    name: "GTSF",
    type: "region",
    x: 60,
    y: 73,
    href: "/countries/british-isles/gate-to-southwell",
  },
  {
    name: "Peaks",
    type: "region",
    x: 63.6,
    y: 60.7,
    href: "#",
  },
  {
    name: "IoM",
    type: "region",
    x: 50,
    y: 48.4,
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
  {
    name: "Gower",
    type: "region",
    x: 48.6,
    y: 77.4,
    href: "#",
  },
  {
    name: "Mid Wales",
    type: "region",
    x: 50.8,
    y: 66.2,
    href: "#",
  },
  {
    name: "Conwy",
    type: "city",
    x: 51.8,
    y: 58.8,
    href: "#",
  },
  {
    name: "South Coast",
    type: "region",
    x: 75.8,
    y: 84.6,
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

      <div className="relative mx-auto max-w-5xl aspect-[1029/853] rounded-[2rem] border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
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

            <div
              className={`absolute top-[-3px] whitespace-nowrap rounded-md bg-slate-950/70 px-2 py-1 text-xs font-medium text-white ${
                marker.labelPosition === "left" ? "right-6" : "left-6"
              } ${marker.type === "city" ? "hidden md:block" : "block"}`}
            >
              {marker.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
