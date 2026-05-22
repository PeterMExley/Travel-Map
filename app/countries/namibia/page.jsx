"use client";

const IMAGES = [
"baboon.jpeg",
"boat.jpeg",
"dunes.jpeg",
"elephant.jpeg",
"giraffes.jpeg",
"himba.jpeg",
"hippo.jpeg",
"jackal.jpeg",
"lions.jpeg",
"oryx.jpeg",
"rhino.jpeg",
"seals.jpeg",
"sunset.jpeg",
"swakopmund.jpeg",
"warthog.jpeg",
"zebras.jpeg",
];

export default function NamibiaPage() {
return (
<>





      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-end p-10">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300">
            Africa
          </p>

          <h1 className="text-6xl font-bold">
            Namibia
          </h1>

          <p className="mt-4 max-w-2xl text-xl text-slate-200">
            Deserts, wildlife, coastlines and safari photography.
          </p>
        </div>
      </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Gallery
        </h2>

        <p className="mt-2 text-slate-400">
          Minimalist travel photography collection.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {IMAGES.map((image) => (
          <a
            key={image}
            href={`/photos/africa/namibia/${image}`}
            target="_blank"
            className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
          >
            <img
              src={`/photos/africa/namibia/${image}`}
              alt={image}
              className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </a>
        ))}
      </div>
    </section>
  </div>
</>

);
}
