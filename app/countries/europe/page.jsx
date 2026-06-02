"use client";

const EUROPE_MARKERS = [
  {
    name: "Iceland",
    type: "region",
    x: 12,
    y: 10,
    href: "#",
  },
];

export default function EuropePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-5xl font-bold mb-4">Europe</h1>

      <p className="text-slate-400 mb-8">
        Click a marker to open a destination gallery.
      </p>

      <div className="relative mx-auto max-w-5xl h-[850px] rounded-[2rem] border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">
        <img
          src="/maps/europe.jpeg"
          alt="Europe map"
          className="absolute inset-0 h-full w-full object-contain opacity-90"
        />

        {_MARKERS.map((marker) => (
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

            <div className="absolute left-6 top-[-3px] whitespace-nowrap rounded-md bg-slate-950/70 px-2 py-1 text-xs font-medium text-white">
              {marker.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
