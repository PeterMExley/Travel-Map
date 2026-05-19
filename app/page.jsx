"use client";
export default function TravelArchiveWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.25),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3 text-sky-300">
              <Globe className="h-8 w-8" />
              <span className="text-sm uppercase tracking-[0.3em]">
                Peter Exley Travel Archive
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
              Interactive World Travel Map
            </h1>

            <p className="max-w-3xl text-xl leading-relaxed text-slate-300">
              A personal archive of countries, territories, islands,
              expeditions, wildlife journeys, canal walks, ferry routes and
              photography.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="text-5xl font-bold text-sky-300">
            {DATA.stats.totalVisited}
          </div>
          <div className="mt-2 text-lg text-slate-300">
            Countries & Territories
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="text-5xl font-bold text-sky-300">
            {DATA.stats.sovereignStates}
          </div>
          <div className="mt-2 text-lg text-slate-300">
            Sovereign States
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="text-5xl font-bold text-sky-300">
            {DATA.stats.territories}
          </div>
          <div className="mt-2 text-lg text-slate-300">
            Territories & Regions
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white">
            Interactive World Map
          </h2>

          <p className="mt-2 text-slate-400">
            Click countries to open future galleries.
          </p>
        </div>

        <ClickableWorldMap />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            Featured Future Galleries
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {DATA.featuredTrips.map((trip) => (
            <motion.div
              key={trip.title}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-300">
                {trip.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {trip.title}
              </h3>

              <p className="mt-2 text-sky-300">{trip.country}</p>

              <p className="mt-4 leading-relaxed text-slate-400">
                {trip.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        {Object.entries(DATA.continents).map(([continent, countries]) => (
          <ContinentSection
            key={continent}
            name={continent}
            countries={countries}
          />
        ))}
      </section>

      <footer className="border-t border-slate-800 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-slate-400">
          <p className="text-lg">
            Ready for future photo uploads.
          </p>

          <p className="mt-3 text-sm">
            Interactive world map enabled.
          </p>
        </div>
      </footer>
    </div>
  );
}
