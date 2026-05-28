"use client";

const AEGEAN_MARKERS = [
  { name: "Tirana", x: 7.69, y: 9.5, route: "/countries/albania" },
  { name: "Istanbul", x: 89.12, y: 10.0, route: "/countries/turkey" },
  { name: "Ohrid", x: 16.49, y: 16.0, route: "/countries/northmacedonia" },

  { name: "Gjirokaster", x: 11.23, y: 25.5, route: "/countries/albania" },
  { name: "Butrint", x: 9.07, y: 31.3, route: "/countries/albania" },

  { name: "Corfu", x: 7.69, y: 34.0, route: "/countries/greece/corfu" },

  { name: "Skiathos", x: 40.59, y: 39.7, route: "/countries/greece/skiathos" },

  { name: "Athens", x: 44.3, y: 57.2, route: "/countries/greece" },
  { name: "Rafina", x: 45.77, y: 55.8, route: "/countries/greece" },

  {
    name: "Kefalonia",
    x: 12.52,
    y: 52.3,
    route: "/countries/greece/kefalonia",
  },
  { name: "Zakynthos", x: 15.8, y: 58.5, route: "/countries/greece/zakynthos" },

  { name: "Andros", x: 53.28, y: 57.7, route: "/countries/greece/andros" },
  { name: "Syros", x: 54.92, y: 63.0, route: "/countries/greece/syros" },

  { name: "Mykonos", x: 58.89, y: 62.8, route: "/countries/greece/mykonos" },
  { name: "Paros", x: 56.8, y: 66.0, route: "/countries/greece/paros" },
  { name: "Naxos", x: 59.76, y: 66.4, route: "/countries/greece/naxos" },

  { name: "Sifnos", x: 52.42, y: 69.4, route: "/countries/greece/sifnos" },
  { name: "Amorgos", x: 63.64, y: 70.6, route: "/countries/greece/amorgos" },
  { name: "Iraklia", x: 59.93, y: 70.5, route: "/countries/greece/iraklia" },

  { name: "Milos", x: 50.09, y: 73.0, route: "/countries/greece/milos" },
  {
    name: "Santorini",
    x: 59.93,
    y: 76.9,
    route: "/countries/greece/santorini",
  },

  { name: "Crete", x: 58.89, y: 91.2, route: "/countries/greece/crete" },

  { name: "Samos", x: 77.1, y: 59.0, route: "/countries/greece/samos" },
  { name: "Patmos", x: 75.5, y: 64.0, route: "/countries/greece/patmos" },

  { name: "Kos", x: 77.63, y: 68.9, route: "/countries/greece/kos" },
  { name: "Pserimos", x: 78, y: 67.0, route: "/countries/greece/pserimos" },
  { name: "Kalymnos", x: 77.4, y: 66.2, route: "/countries/greece/kalymnos" },

  { name: "Tinos", x: 56.04, y: 61.1, route: "/countries/greece/tilos" },

  { name: "Symi", x: 85.6, y: 73.8, route: "/countries/greece/symi" },
  { name: "Rhodes", x: 87.39, y: 74.4, route: "/countries/greece/rhodes" },

  { name: "Fethiye", x: 94.04, y: 72.4, route: "/countries/turkey" },
];

export default function GreecePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-4">Greece</h1>

      <p className="text-slate-400 mb-8">
        Click an island marker to open its future gallery.
      </p>

      <div className="relative mx-auto max-w-6xl h-[1000px] rounded-[2rem] border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
        <img
          src="/maps/greek-islands.jpeg"
          alt="Greek islands map"
          className="absolute inset-0 h-full w-full object-conver opacity-80"
        />

        <div className="absolute inset-0 bg-slate-950/20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_60%)]" />

        {AEGEAN_MARKERS.map((island) => (
          <a
            key={island.name}
            href={island.route}
            title={island.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${island.x}%`, top: `${island.y}%` }}
          >
            <span className="absolute -inset-2 rounded-full bg-sky-400 opacity-30 animate-ping" />

            <span className="relative block h-4 w-4 rounded-full bg-sky-400 border border-white group-hover:bg-yellow-300" />

            <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs text-sky-200">
              {island.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
