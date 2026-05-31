"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Camera, MapPin, Mountain, Waves } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
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
      "United States of America",
    ],

    "South America": ["Ecuador", "Peru"],
  },

  featuredTrips: [
    {
      title: "Pantanal Wildlife",
      country: "Brazil",
      icon: <Waves className="h-5 w-5" />,
      description:
        "Future gallery placeholder for jaguars, wetlands, birds and river safaris.(planned 2027)",
    },
    {
      title: "Greek Islands",
      country: "Greece",
      icon: <MapPin className="h-5 w-5" />,
      description: "Future galleries for Greek island hopping",
    },
    {
      title: "Svalbard Expedition",
      country: "Svalbard and Jan Mayen",
      icon: <Mountain className="h-5 w-5" />,
      description: "Future Arctic galleries and polar landscapes.",
    },
  ],
};
const NAMIBIA_IMAGES = [
  "baboon.jpeg",
  "bar.jpeg",
  "boat.jpeg",
  "bug.jpeg",
  "cart.jpeg",
  "dunes.jpeg",
  "eagle.jpeg",
  "elephant.jpeg",
  "falls.jpeg",
  "giraffes.jpeg",
  "groundsquirrel.jpeg",
  "hawk.jpeg",
  "himba.jpeg",
  "hippo.jpeg",
  "impala.jpeg",
  "jackal.jpeg",
  "kingfisher.jpeg",
  "lechwe.jpeg",
  "lions.jpeg",
  "monkey.jpeg",
  "oryx.jpeg",
  "pier.jpeg",
  "restaurant.jpeg",
  "rhino.jpeg",
  "rocket.jpeg",
  "seals.jpeg",
  "secretarybird.jpeg",
  "snake.jpeg",
  "sundowners.jpeg",
  "sunset.jpeg",
  "swakopmund.jpeg",
  "tent.jpeg",
  "warthog.jpeg",
  "waterhole.jpeg",
  "wreck.jpeg",
  "zebras.jpeg",
];
const ACTIVE_GALLERIES = {
  Armenia: "/countries/armenia",
  Azores: "/countries/azores",
  Botswana: "/countries/botswana",
  "Cape Verde": "/countries/cape-verde",
  China: "/countries/china",
  "Costa Rica": "/countries/costarica",
  Cuba: "/countries/cuba",
  Cyprus: "/countries/cyprus",
  Ecuador: "/countries/ecuador",
  "El Salvador": "/countries/elsalvador",
  Galapagos: "/countries/galapagos",
  Georgia: "/countries/georgia",
  Gibraltar: "/countries/gibraltar",
  Greenland: "/countries/greenland",
  Guatemala: "/countries/guatemala",
  Honduras: "/countries/honduras",

  India: "/countries/india",
  Indonesia: "/countries/indonesia",
  Japan: "/countries/japan",
  Komodo: "/countries/komodo",
  Laos: "/countries/laos",
  Libya: "/countries/libya",
  Madagascar: "/countries/madagascar",
  Madeira: "/countries/madeira",
  Malaysia: "/countries/malaysia",
  Maldives: "/countries/maldives",
  Mauritius: "/countries/mauritius",
  Mexico: "/countries/mexico",
  Namibia: "/countries/namibia",
  Nicaragua: "/countries/nicaragua",
  Panama: "/countries/panama",
  Peru: "/countries/peru",
  Qatar: "/countries/qatar",

  Russia: "/countries/russia",
  Rwanda: "/countries/rwanda",
  "South Africa": "/countries/southafrica",
  Seychelles: "/countries/seychelles",
  "Sri Lanka": "/countries/srilanka",
  Svalbard: "/countries/svalbard",
  Sweden: "/countries/sweden",
  Syria: "/countries/syria",
  Tenerife: "/countries/tenerife",
  Thailand: "/countries/thailand",
  "United Arab Emirates": "/countries/uae",
  "United States of America": "/countries/unitedstates",
  Zimbabwe: "/countries/zimbabwe",
};
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const SPECIAL_LOCATIONS = [
  {
    name: "Cape Verde",
    coordinates: [-23.6, 15.1],
    route: "/countries/cape-verde",
  },
  {
    name: "Seychelles",
    coordinates: [55.45, -4.6],
    route: "/countries/seychelles",
  },
  {
    name: "New York",
    coordinates: [-74.0, 40.7],
    route: "/countries/newyork",
  },

  {
    name: "Zanzibar",
    coordinates: [39.2, -6.16],
    route: "/countries/zanzibar",
  },
  {
    name: "Galapagos",
    coordinates: [-90.5, -0.8],
    route: "/countries/galapagos",
  },
  {
    name: "Azores",
    coordinates: [-25.5, 37.8],
    route: "/countries/azores",
  },

  {
    name: "Malta",
    coordinates: [14.4, 35.9],
    route: "/countries/malta",
  },

  {
    name: "Singapore",
    coordinates: [103.8, 1.35],
    route: "/countries/singapore",
  },

  {
    name: "Maldives",
    coordinates: [73.5, 3.2],
    route: "/countries/maldives",
  },

  {
    name: "Hong Kong",
    coordinates: [114.2, 22.3],
    route: "/countries/hong-kong",
  },
  {
    name: "Svalbard",
    coordinates: [15.6, 78.2],
    route: "/countries/svalbard",
  },

  {
    name: "Isle of Man",
    coordinates: [-4.5, 54.2],
    route: "/countries/isleofman",
  },

  {
    name: "Mauritius",
    coordinates: [57.5, -20.2],
    route: "/countries/mauritius",
  },

  {
    name: "Komodo",
    coordinates: [119.5, -8.6],
    route: "/countries/komodo",
  },
  {
    name: "Gibraltar",
    coordinates: [-5.35, 36.14],
    route: "/countries/gibraltar",
  },

  {
    name: "Madeira",
    coordinates: [-16.9, 32.75],
    route: "/countries/madeira",
  },

  {
    name: "Vatican City",
    coordinates: [12.45, 41.9],
    route: "/countries/vatican-city",
  },

  {
    name: "Cyprus",
    coordinates: [33.36, 35.17],
    route: "/countries/cyprus",
  },

  {
    name: "Tenerife",
    coordinates: [-16.63, 28.29],
    route: "/countries/tenerife",
  },

  {
    name: "Lanzarote",
    coordinates: [-13.64, 29.05],
    route: "/countries/lanzarote",
  },

  {
    name: "Majorca",
    coordinates: [3.0, 39.7],
    route: "/countries/majorca",
  },
  {
    name: "Qatar",
    coordinates: [51.2, 25.3],
    route: "/countries/qatar",
  },

  {
    name: "Liechtenstein",
    coordinates: [9.55, 47.16],
    route: "/countries/liechtenstein",
  },

  {
    name: "Gambia",
    coordinates: [-15.4, 13.45],
    route: "/countries/gambia",
  },

  {
    name: "Andorra",
    coordinates: [1.6, 42.55],
    route: "/countries/andorra",
  },
];
function ClickableWorldMap() {
  const visitedCountries = Object.values(DATA.continents).flat();

  return (
    <>
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
                    onClick={() => {
                      console.log(countryName);
                      if (countryName === "Namibia") {
                        window.location.href = "/countries/namibia";
                      }
                      if (countryName === "United States of America") {
                        window.location.href = "/countries/unitedstates";
                      }

                      if (countryName === "Zimbabwe") {
                        window.location.href = "/countries/zimbabwe";
                      }

                      if (countryName === "China") {
                        window.location.href = "/countries/china";
                        if (countryName === "Libya") {
                          window.location.href = "/countries/libya";
                        }
                      }
                      if (countryName === "United Arab Emirates") {
                        window.location.href = "/countries/uae";
                      }
                      if (countryName === "Japan") {
                        window.location.href = "/countries/japan";
                      }
                      if (countryName === "Guatemala") {
                        window.location.href = "/countries/guatemala";
                      }
                      if (countryName === "Nicaragua") {
                        window.location.href = "/countries/nicaragua";
                      }
                      if (countryName === "El Salvador") {
                        window.location.href = "/countries/elsalvador";
                      }
                      if (countryName === "Indonesia") {
                        window.location.href = "/countries/indonesia";
                      }
                      if (countryName === "Malaysia") {
                        window.location.href = "/countries/malaysia";
                      }
                      if (countryName === "Costa Rica") {
                        window.location.href = "/countries/costarica";
                      }
                      if (countryName === "Peru") {
                        window.location.href = "/countries/peru";
                      }
                      if (countryName === "Mexico") {
                        window.location.href = "/countries/mexico";
                      }
                      if (countryName === "Ecuador") {
                        window.location.href = "/countries/ecuador";
                      }
                      if (countryName === "India") {
                        window.location.href = "/countries/india";
                      }
                      if (countryName === "Qatar") {
                        window.location.href = "/countries/qatar";
                      }
                      if (countryName === "Honduras") {
                        window.location.href = "/countries/honduras";
                      }

                      if (countryName === "Libya") {
                        window.location.href = "/countries/libya";
                      }
                      if (countryName === "Sri Lanka") {
                        window.location.href = "/countries/srilanka";
                      }
                      if (countryName === "Thailand") {
                        window.location.href = "/countries/thailand";
                      }
                      if (countryName === "South Africa") {
                        window.location.href = "/countries/southafrica";
                      }
                      if (countryName === "Botswana") {
                        window.location.href = "/countries/botswana";
                      }
                      if (countryName === "Madagascar") {
                        window.location.href = "/countries/madagascar";
                      }

                      if (countryName === "Greenland") {
                        window.location.href = "/countries/greenland";
                      }
                      if (countryName === "Rwanda") {
                        window.location.href = "/countries/rwanda";
                      }
                      if (countryName === "Cuba") {
                        window.location.href = "/countries/cuba";
                      }
                      if (countryName === "Panama") {
                        window.location.href = "/countries/panama";
                      }
                      if (countryName === "Laos") {
                        window.location.href = "/countries/laos";
                      }
                      if (countryName === "Armenia") {
                        window.location.href = "/countries/armenia";
                      }
                      if (countryName === "Georgia") {
                        window.location.href = "/countries/georgia";
                      }
                      if (countryName === "Russia") {
                        window.location.href = "/countries/russia";
                      }
                      if (countryName === "Greece") {
                        window.location.href = "/countries/greece";
                      }
                      if (countryName === "Sweden") {
                        window.location.href = "/countries/sweden";
                      }
                      if (countryName === "Syria") {
                        window.location.href = "/countries/syria";
                      }
                    }}
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
                  >
                    <title>{countryName}</title>
                  </Geography>
                );
              })
            }
          </Geographies>
          {SPECIAL_LOCATIONS.map((location) => (
            <Marker
              key={location.name}
              coordinates={location.coordinates}
              onClick={() => {
                window.location.href = location.route;
              }}
            >
              <title>{location.name}</title>
              <circle
                r={3}
                fill="#38bdf8"
                stroke="#ffffff"
                strokeWidth={1}
                className="cursor-pointer"
                style={{
                  transition: "fill 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.setAttribute("fill", "#facc15");
                }}
                onMouseLeave={(e) => {
                  e.target.setAttribute("fill", "#38bdf8");
                }}
              />

              <circle
                r={6}
                fill="#38bdf8"
                opacity={0.25}
                className="animate-ping pointer-events-none"
              />
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </>
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
          {ACTIVE_GALLERIES[country] ? (
            <a
              href={ACTIVE_GALLERIES[country]}
              className="mt-1 inline-block text-sm text-sky-400 hover:text-sky-300"
            >
              Gallery →
            </a>
          ) : (
            <p className="mt-1 text-sm text-slate-400">
              Ready for photo galleries
            </p>
          )}
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
              A personal archive of countries, territories, islands, wildlife
              journeys, and photography.
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
          <div className="mt-2 text-lg text-slate-300">Sovereign States</div>
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

              <h3 className="text-2xl font-bold text-white">{trip.title}</h3>

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
          <p className="text-lg">Ready for future photo uploads.</p>

          <p className="mt-3 text-sm">Interactive world map enabled.</p>
        </div>
      </footer>
    </div>
  );
}
