"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Camera, MapPin, Mountain, Waves } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const DATA = {
  stats: {
    totalVisited: 102,
    sovereignStates: 78,
    territories: 24,
  },

  continents: {
    Europe: [
      "Albania",
      "Andorra",
      "Austria",
      "Azores",
      "Belgium",
      "Bosnia and Herzegovina",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czechia",
      "Denmark",
      "England",
      "Estonia",
      "Finland",
      "France",
      "Germany",
      "Gibraltar",
      "Greece",
      "Hungary",
      "Iceland",
      "Ireland",
      "Isle of Man",
      "Italy",
      "Jan Mayen",
      "Kosovo",
      "Latvia",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Madeira",
      "Malta",
      "Monaco",
      "Montenegro",
      "Netherlands",
      "North Macedonia",
      "Northern Cyprus",
      "Northern Ireland",
      "Norway",
      "Poland",
      "Portugal",
      "Romania",
      "Scotland",
      "Serbia",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Svalbard and Jan Mayen",
      "Sweden",
      "Switzerland",
      "Turkey",
      "United Kingdom",
      "Vatican City",
      "Wales",
    ],

    Africa: [
      "Botswana",
      "Cape Verde",
      "Egypt",
      "Gambia",
      "Ghana",
      "Kenya",
      "Libya",
      "Madagascar",
      "Mauritius",
      "Morocco",
      "Namibia",
      "Rwanda",
      "Seychelles",
      "South Africa",
      "Tanzania",
      "Tunisia",
      "Uganda",
      "Zanzibar",
      "Zimbabwe",
    ],

    Asia: [
      "Armenia",
      "Cambodia",
      "China",
      "Georgia",
      "Hong Kong",
      "India",
      "Indonesia",
      "Japan",
      "Jordan",
      "Laos",
      "Malaysia",
      "Maldives",
      "Qatar",
      "Russia",
      "Singapore",
      "Sri Lanka",
      "Syria",
      "Thailand",
      "Turkey",
      "United Arab Emirates",
      "Vietnam",
    ],

    "North America": [
      "Canada",
      "Costa Rica",
      "Cuba",
      "El Salvador",
      "Greenland",
      "Guatemala",
      "Honduras",
      "Mexico",
      "Nicaragua",
      "Panama",
      "United States of America"
    ],

    "South America": ["Ecuador", "Peru"],
  },

  featuredTrips: [
    {
      title: "Pantanal Wildlife",
      country: "Brazil",
      icon: <Waves className="h-5 w-5" />,
      description:
        "Future gallery placeholder for jaguars, wetlands, birds and river safaris.",
    },
    {
      title: "Greek Islands",
      country: "Greece",
      icon: <MapPin className="h-5 w-5" />,
      description:
        "Future galleries for Leros, Patmos, Kalymnos and ferry routes.",
    },
    {
      title: "Svalbard Expedition",
      country: "Svalbard and Jan Mayen",
      icon: <Mountain className="h-5 w-5" />,
      description:
        "Future Arctic galleries and polar landscapes.",
    },
  ],
};

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function ClickableWorldMap() {
  const visitedCountries = Object.values(DATA.continents).flat();

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 p-4 shadow-2xl">
      <ComposableMap
        projectionConfig={{ scale: 145 }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;
              const visited = visitedCountries.includes(countryName);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => alert(countryName)}
                  style={{
                    default: {
                      fill: visited ? "#0ea5e9" : "#1e293b",
                      stroke: "#020617",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#38bdf8",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#0284c7",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

function CountryCard({ country }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl border border-slate-700 bg-slate-900 p-4 transition hover:border-sky-400"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="font-medium text-white">{country}</h3>
          <p className="mt-1 text-sm text-slate-400">
            Ready for photo galleries
          </p>
        </div>

        <Camera className="h-5 w-5 text-sky-400" />
      </div>
    </motion.div>
  );
}

function ContinentSection({ name, countries }) {
  return (
    <section className="mb-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">{name}</h2>

        <div className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
          {countries.length} places
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country) => (
          <CountryCard key={country} country={country} />
        ))}
      </div>
    </section>
  );
}

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
