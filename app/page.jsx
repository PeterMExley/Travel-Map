import React from "react";
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
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

      {/* REAL CLICKABLE MAP */}
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

      {/* FEATURED TRIPS */}}
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

      {/* CONTINENTS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        {Object.entries(DATA.continents).map(([continent, countries]) => (
          <ContinentSection
            key={continent}
            name={continent}
            countries={countries}
          />
        ))}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center text-slate-400">
          <p className="text-lg">
            Ready for Vercel deployment and future photo uploads.
          </p>

          <p className="mt-3 text-sm">
            Next stage: connect real world map + add galleries.
          </p>
        </div>
      </footer>
    </div>
  );
}

