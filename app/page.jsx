import React from "react";
import { Globe, Camera } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const DATA = {
  totalVisited: 102,

  continents: {
    Europe: [
      "England",
      "Scotland",
      "Wales",
      "Northern Ireland",
      "France",
      "Italy",
      "Greece",
      "Spain",
      "Portugal",
      "Malta",
      "Monaco",
      "Cyprus",
      "Northern Cyprus",
      "Svalbard and Jan Mayen",
      "Azores",
      "Madeira"
    ],

    Africa: [
      "Botswana",
      "Cape Verde",
      "Egypt",
      "Kenya",
      "Madagascar",
      "Mauritius",
      "Morocco",
      "Namibia",
      "Seychelles",
      "South Africa",
      "Tanzania",
      "Tunisia",
      "Uganda",
      "Zanzibar",
      "Zimbabwe"
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
      "Malaysia",
      "Maldives",
      "Qatar",
      "Singapore",
      "Sri Lanka",
      "Thailand",
      "United Arab Emirates",
      "Vietnam"
    ],

    "North America": [
      "Canada",
      "Costa Rica",
      "Cuba",
      "El Salvador",
      "Greenland",
      "Guatemala",
      "Mexico",
      "Nicaragua",
      "Panama",
      "United States"
    ],

    "South America": [
      "Ecuador",
      "Peru"
    ]
  }
};

function CountryCard({ country }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 hover:border-sky-400 transition">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold">
            {country}
          </h3>

          <p className="text-sm text-slate-400 mt-1">
            Ready for photos
          </p>
        </div>

        <Camera className="text-sky-400" size={20} />
      </div>
    </div>
  );
}
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
function ContinentSection({ name, countries }) {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">
          {name}
        </h2>

        <div className="text-slate-400">
          {countries.length} places
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country) => (
          <CountryCard
            key={country}
            country={country}
          />
        ))}
      </div>
    </section>
  );
}

export default function TravelArchiveWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}

      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 text-sky-300 mb-6">
            <Globe size={32} />

            <span className="uppercase tracking-[0.3em] text-sm">
              Peter Exley Travel Archive
            </span>
          </div>

          <h1 className="text-6xl font-bold mb-6">
            Interactive World Travel Map
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl">
            A personal archive of countries, islands,
            expeditions, wildlife journeys and travel photography.
          </p>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <div className="text-6xl font-bold text-sky-300">
            {DATA.totalVisited}
          </div>

          <div className="text-xl mt-2 text-slate-300">
            Countries & Territories Visited
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

      {/* CONTINENTS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">
        {Object.entries(DATA.continents).map(([continent, countries]) => (
          <ContinentSection
            key={continent}
            name={continent}
            countries={countries}
          />
        ))}
      </section>
    </div>
  );
}




