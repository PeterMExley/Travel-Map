"use client";

const EUROPE_MARKERS = [
  {
    name: "British Isles",
    type: "explorer",
    x: 25.4,
    y: 48.5,
    href: "/countries/british-isles",
  },
  {
    name: "Greek Islands",
    type: "explorer",
    x: 69.1,
    y: 89.8,
    href: "/countries/greece",
  },
  {
    name: "Oslo",
    type: "city",
    x: 46.0,
    y: 34.5,
    href: "#",
  },

  {
    name: "Helsinki",
    type: "city",
    x: 61.6,
    y: 31.3,
    href: "#",
  },
  {
    name: "Tallinn",
    type: "city",
    x: 61.8,
    y: 33.3,
    href: "#",
  },
  {
    name: "Riga",
    type: "city",
    x: 62.5,
    y: 40.0,
    href: "#",
  },
  {
    name: "Vilnius",
    type: "city",
    x: 65.3,
    y: 45.3,
    href: "#",
  },
  {
    name: "Prague",
    type: "city",
    x: 52.4,
    y: 59.9,
    href: "#",
  },
  {
    name: "Krakow",
    type: "city",
    x: 60.0,
    y: 59.2,
    href: "#",
  },
  {
    name: "Budapest",
    type: "city",
    x: 59.9,
    y: 67.1,
    href: "/countries/europe/budapest",
  },
  {
    name: "Venice",
    type: "city",
    x: 49.5,
    y: 72.0,
    href: "#",
  },
  {
    name: "Split",
    type: "city",
    x: 56.3,
    y: 77.4,
    href: "#",
  },
  {
    name: "Florence",
    type: "city",
    x: 48.2,
    y: 78.4,
    href: "#",
  },
  {
    name: "Rome",
    type: "city",
    x: 50.6,
    y: 82.7,
    href: "#",
  },
  {
    name: "Dubrovnik",
    type: "city",
    x: 58.1,
    y: 79.1,
    href: "/countries/europe/dubrovnik",
  },
  {
    name: "Lisbon",
    type: "city",
    x: 11.7,
    y: 85.6,
    href: "#",
  },
  {
    name: "Istanbul",
    type: "city",
    x: 77.4,
    y: 79.4,
    href: "/countries/europe/istanbul",
  },
  {
    name: "Ice Hotel",
    type: "region",
    x: 54.9,
    y: 10.9,
    href: "/countries/europe/sweden",
  },
  {
    name: "Stockholm",
    type: "city",
    x: 54.2,
    y: 36.1,
    href: "/countries/europe/sweden",
  },
  {
    name: "Iceland",
    type: "region",
    x: 18.2,
    y: 13.3,
    href: "#",
  },
  {
    name: "Gibraltar",
    type: "region",
    x: 15.9,
    y: 94.7,
    href: "/countries/gibraltar",
  },
  {
    name: "Malta",
    type: "region",
    x: 54.3,
    y: 98.8,
    href: "/countries/malta",
  },
  {
    name: "Cyprus",
    type: "region",
    x: 88.4,
    y: 92.9,
    href: "/countries/cyprus",
  },
  {
    name: "St Petersburg",
    type: "city",
    x: 69.8,
    y: 30.4,
    href: "countries/russia",
  },
  {
    name: "Moscow",
    type: "city",
    x: 83.9,
    y: 40.7,
    href: "/countries/russia",
  },
  {
    name: "Luxembourg",
    type: "region",
    x: 40.6,
    y: 61.6,
    href: "#",
  },
  {
    name: "Paris",
    type: "city",
    x: 33.7,
    y: 63.2,
    href: "#",
  },
  {
    name: "Lyon",
    type: "city",
    x: 36.0,
    y: 71.4,
    href: "#",
  },
  {
    name: "Avignon",
    type: "city",
    x: 35.4,
    y: 75.1,
    href: "#",
  },
  {
    name: "Marseille",
    type: "city",
    x: 38.2,
    y: 80.2,
    href: "#",
  },
  {
    name: "Dordogne",
    type: "region",
    x: 31.4,
    y: 73.5,
    href: "#",
  },
  {
    name: "Verdon",
    type: "region",
    x: 39.1,
    y: 77.7,
    href: "#",
  },
  {
    name: "Switzerland",
    type: "region",
    x: 41.4,
    y: 69.1,
    href: "#",
  },
  {
    name: "Bologna",
    type: "city",
    x: 47.9,
    y: 75.5,
    href: "#",
  },
  {
    name: "Tuscany",
    type: "region",
    x: 50.0,
    y: 80.7,
    href: "#",
  },
  {
    name: "Western Front",
    type: "region",
    x: 35.9,
    y: 58.5,
    href: "#",
  },
  {
    name: "Amalfi Coast",
    type: "region",
    x: 54.9,
    y: 86.9,
    href: "#",
  },
  {
    name: "Alentejo",
    type: "region",
    x: 12.8,
    y: 88.7,
    href: "#",
  },
  {
    name: "Algarve",
    type: "region",
    x: 12.2,
    y: 91.2,
    href: "#",
  },
  {
    name: "British Isles",
    type: "explorer",
    x: 25.4,
    y: 48.5,
    href: "/countries/british-isles",
  },
  {
    name: "Greek Islands",
    type: "explorer",
    x: 69.1,
    y: 89.8,
    href: "/countries/greece",
  },
  {
    name: "Oslo",
    type: "city",
    x: 46.0,
    y: 34.5,
    href: "#",
  },
  {
    name: "Helsinki",
    type: "city",
    x: 61.6,
    y: 31.3,
    href: "#",
  },
  {
    name: "Tallinn",
    type: "city",
    x: 61.8,
    y: 33.3,
    href: "#",
  },
  {
    name: "Riga",
    type: "city",
    x: 62.5,
    y: 40.0,
    href: "#",
  },
  {
    name: "Vilnius",
    type: "city",
    x: 65.3,
    y: 45.3,
    href: "#",
  },
  {
    name: "Prague",
    type: "city",
    x: 52.4,
    y: 59.9,
    href: "europe/prague",
  },
  {
    name: "Krakow",
    type: "city",
    x: 60.0,
    y: 59.2,
    href: "#",
  },
  {
    name: "Budapest",
    type: "city",
    x: 59.9,
    y: 67.1,
    href: "/countries/europe/budapest",
  },
  {
    name: "Venice",
    type: "city",
    x: 49.5,
    y: 72.0,
    href: "europe/venice",
  },
  {
    name: "Split",
    type: "city",
    x: 56.3,
    y: 77.4,
    href: "#",
  },
  {
    name: "Florence",
    type: "city",
    x: 48.2,
    y: 78.4,
    href: "#",
  },
  {
    name: "Rome",
    type: "city",
    x: 50.6,
    y: 82.7,
    href: "#",
  },
  {
    name: "Dubrovnik",
    type: "city",
    x: 58.1,
    y: 79.1,
    href: "/countries/europe/dubrovnik",
  },
  {
    name: "Lisbon",
    type: "city",
    x: 11.7,
    y: 85.6,
    href: "#",
  },
  {
    name: "Istanbul",
    type: "city",
    x: 77.4,
    y: 79.4,
    href: "/countries/europe/istanbul",
  },
  {
    name: "Ice Hotel",
    type: "region",
    x: 54.9,
    y: 10.9,
    href: "/countries/europe/sweden",
  },
  {
    name: "Stockholm",
    type: "city",
    x: 54.2,
    y: 36.1,
    href: "/countries/europe/sweden",
  },
  {
    name: "Iceland",
    type: "region",
    x: 18.2,
    y: 13.3,
    href: "#",
  },
  {
    name: "Gibraltar",
    type: "region",
    x: 15.9,
    y: 94.7,
    href: "/countries/gibraltar",
  },
  {
    name: "Malta",
    type: "region",
    x: 54.3,
    y: 98.8,
    href: "/countries/malta",
  },
  {
    name: "Cyprus",
    type: "region",
    x: 88.4,
    y: 92.9,
    href: "/countries/cyprus",
  },
  {
    name: "St Petersburg",
    type: "city",
    x: 69.8,
    y: 30.4,
    href: "#",
  },
  {
    name: "Moscow",
    type: "city",
    x: 83.9,
    y: 40.7,
    href: "#",
  },
  {
    name: "Austria",
    type: "region",
    x: 55.6,
    y: 65.2,
    href: "countries/europe/austria",
  },
  {
    name: "Luxembourg",
    type: "region",
    x: 40.6,
    y: 61.6,
    href: "#",
  },
  {
    name: "Paris",
    type: "city",
    x: 33.7,
    y: 63.2,
    href: "#",
  },
  {
    name: "Lyon",
    type: "city",
    x: 36.0,
    y: 71.4,
    href: "#",
  },
  {
    name: "Avignon",
    type: "city",
    x: 35.4,
    y: 75.1,
    href: "#",
  },
  {
    name: "Marseille",
    type: "city",
    x: 38.2,
    y: 80.2,
    href: "#",
  },
  {
    name: "Dordogne",
    type: "region",
    x: 31.4,
    y: 73.5,
    href: "#",
  },
  {
    name: "Verdon",
    type: "region",
    x: 39.1,
    y: 77.7,
    href: "#",
  },
  {
    name: "Switzerland",
    type: "region",
    x: 41.4,
    y: 69.1,
    href: "#",
  },
  {
    name: "Bologna",
    type: "city",
    x: 47.9,
    y: 75.5,
    href: "#",
  },
  {
    name: "Tuscany",
    type: "region",
    x: 50.0,
    y: 80.7,
    href: "#",
  },
  {
    name: "Western Front",
    type: "region",
    x: 35.9,
    y: 58.5,
    href: "#",
  },
  {
    name: "Amalfi Coast",
    type: "region",
    x: 54.9,
    y: 86.9,
    href: "#",
  },
  {
    name: "Alentejo",
    type: "region",
    x: 12.8,
    y: 88.7,
    href: "#",
  },
  {
    name: "Algarve",
    type: "region",
    x: 12.2,
    y: 91.2,
    href: "#",
  },

  {
    name: "Netherlands",
    type: "region",
    x: 39.4,
    y: 55.5,
    href: "#",
  },
  {
    name: "Belgium",
    type: "region",
    x: 38.2,
    y: 58.7,
    href: "#",
  },
  {
    name: "Romania",
    type: "region",
    x: 69.2,
    y: 67.8,
    href: "#",
  },
  {
    name: "Bulgaria",
    type: "region",
    x: 69.2,
    y: 77.0,
    href: "#",
  },
  {
    name: "Albania",
    type: "region",
    x: 62.0,
    y: 82.8,
    href: "/countries/europe/albania",
  },
];

export default function EuropePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-4">Europe</h1>

      <p className="text-slate-400 mb-8">
        Click a marker to open a destination gallery.
      </p>

      <div className="relative mx-auto max-w-5xl aspect-[1024/850] rounded-[2rem] border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
        <img
          src="/maps/europe.jpeg"
          alt="Europe map"
          className="absolute inset-0 h-full w-full object-contain opacity-90"
        />

        {EUROPE_MARKERS.map((marker) => (
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
                  marker.type === "city"
                    ? "bg-blue-500"
                    : marker.type === "explorer"
                      ? "bg-red-500"
                      : "bg-green-500"
                }`}
              />

              <span
                className={`relative block rounded-full border-2 border-white shadow-lg ${
                  marker.type === "explorer"
                    ? "w-5 h-5 bg-red-500"
                    : marker.type === "city"
                      ? "w-5 h-5 bg-blue-500"
                      : "w-5 h-5 bg-green-500"
                }`}
              />

              <span
                className={`absolute top-[-3px] whitespace-nowrap rounded-md bg-slate-950/70 px-2 py-1 ${
                  marker.type === "city" ? "hidden md:block" : "block"
                } ${
                  marker.type === "explorer"
                    ? "text-sm font-bold text-red-300"
                    : "text-[11px] font-medium text-white"
                } ${
                  marker.name === "Dordogne" || marker.name === "Western Front"
                    ? "left-[-8px] -translate-x-full"
                    : "left-6"
                }`}
              >
                {marker.name}
              </span>
            </>
          </a>
        ))}
      </div>
    </div>
  );
}
