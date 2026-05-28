"use client";

const ISLANDS = [
  { name: "Corfu", x: 22, y: 25, route: "/countries/greece/corfu" },
  { name: "Zakynthos", x: 24, y: 55, route: "/countries/greece/zakynthos" },
  { name: "Kefalonia", x: 25, y: 48, route: "/countries/greece/kefalonia" },
  { name: "Skiathos", x: 43, y: 30, route: "/countries/greece/skiathos" },
  { name: "Andros", x: 55, y: 42, route: "/countries/greece/andros" },
  { name: "Syros", x: 58, y: 50, route: "/countries/greece/syros" },
  { name: "Mykonos", x: 62, y: 49, route: "/countries/greece/mykonos" },
  { name: "Naxos", x: 62, y: 56, route: "/countries/greece/naxos" },
  { name: "Paros", x: 59, y: 57, route: "/countries/greece/paros" },
  { name: "Ios", x: 61, y: 65, route: "/countries/greece/ios" },
  { name: "Milos", x: 51, y: 66, route: "/countries/greece/milos" },
  { name: "Sifnos", x: 54, y: 61, route: "/countries/greece/sifnos" },
  { name: "Folegandros", x: 56, y: 67, route: "/countries/greece/folegandros" },
  { name: "Santorini", x: 64, y: 70, route: "/countries/greece/santorini" },
  { name: "Amorgos", x: 68, y: 61, route: "/countries/greece/amorgos" },
  { name: "Crete", x: 62, y: 86, route: "/countries/greece/crete" },
  { name: "Rhodes", x: 84, y: 72, route: "/countries/greece/rhodes" },
  { name: "Kos", x: 78, y: 60, route: "/countries/greece/kos" },
  { name: "Tilos", x: 81, y: 67, route: "/countries/greece/tilos" },
  { name: "Symi", x: 86, y: 69, route: "/countries/greece/symi" },
  { name: "Pserimos", x: 77, y: 56, route: "/countries/greece/pserimos" },
  { name: "Samos", x: 72, y: 47, route: "/countries/greece/samos" },
  { name: "Patmos", x: 73, y: 53, route: "/countries/greece/patmos" },
  { name: "Kalymnos", x: 76, y: 57, route: "/countries/greece/kalymnos" },
];

export default function GreecePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-4">Greece</h1>

      <p className="text-slate-400 mb-8">
        Click an island marker to open its future gallery.
      </p>

      <div className="relative mx-auto max-w-6xl h-[720px] rounded-[2rem] border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
        <img
          src="/maps/greece-islands.jpeg"
          alt="Greek islands map"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-slate-950/20" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_60%)]" />

        <div className="absolute left-[18%] top-[18%] text-slate-600 text-8xl font-bold opacity-20">
          IONIAN
        </div>

        <div className="absolute right-[18%] top-[28%] text-slate-600 text-8xl font-bold opacity-20">
          AEGEAN
        </div>

        <div className="absolute bottom-[8%] left-[42%] text-slate-600 text-7xl font-bold opacity-20">
          CRETE
        </div>

        {ISLANDS.map((island) => (
          <a
            key={island.name}
            href={island.route}
            title={island.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${island.x}%`, top: `${island.y}%` }}
          >
            <span className="absolute -inset-2 rounded-full bg-sky-400 opacity-30 animate-ping" />

            <span className="relative block h-3 w-3 rounded-full bg-sky-400 border border-white group-hover:bg-yellow-300" />

            <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-950/90 px-2 py-1 text-xs text-slate-200 opacity-0 group-hover:opacity-100">
              {island.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
