"use client";

const ISLANDS = [
  { name: "Corfu", x: 8, y: 36, route: "/countries/greece/corfu" },
  { name: "Zakynthos", x: 21, y: 61, route: "/countries/greece/zakynthos" },
  { name: "Kefalonia", x: 18, y: 55, route: "/countries/greece/kefalonia" },
  { name: "Skiathos", x: 46, y: 27, route: "/countries/greece/skiathos" },
  { name: "Andros", x: 57, y: 49, route: "/countries/greece/andros" },
  { name: "Syros", x: 55, y: 57, route: "/countries/greece/syros" },
  { name: "Mykonos", x: 58, y: 55, route: "/countries/greece/mykonos" },
  { name: "Naxos", x: 60, y: 58, route: "/countries/greece/naxos" },
  { name: "Paros", x: 56, y: 57, route: "/countries/greece/paros" },
  { name: "Ios", x: 59, y: 68, route: "/countries/greece/ios" },
  { name: "Milos", x: 47, y: 67, route: "/countries/greece/milos" },
  { name: "Sifnos", x: 51, y: 62, route: "/countries/greece/sifnos" },
  { name: "Folegandros", x: 56, y: 69, route: "/countries/greece/folegandros" },
  { name: "Santorini", x: 62, y: 73, route: "/countries/greece/santorini" },
  { name: "Amorgos", x: 67, y: 64, route: "/countries/greece/amorgos" },
  { name: "Crete", x: 59, y: 91, route: "/countries/greece/crete" },
  { name: "Rhodes", x: 87, y: 73, route: "/countries/greece/rhodes" },
  { name: "Kos", x: 77, y: 61, route: "/countries/greece/kos" },
  { name: "Tilos", x: 82, y: 69, route: "/countries/greece/tilos" },
  { name: "Symi", x: 87, y: 70, route: "/countries/greece/symi" },
  { name: "Pserimos", x: 76, y: 58, route: "/countries/greece/pserimos" },
  { name: "Samos", x: 75, y: 46, route: "/countries/greece/samos" },
  { name: "Patmos", x: 74, y: 51, route: "/countries/greece/patmos" },
  { name: "Kalymnos", x: 76, y: 59, route: "/countries/greece/kalymnos" },
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

        {ISLANDS.map((island) => (
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
