"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Camera } from "lucide-react";
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
  Cambodia: "/countries/cambodia",
  China: "/countries/china",
  "Costa Rica": "/countries/costarica",
  Cuba: "/countries/cuba",
  Cyprus: "/countries/cyprus",
  Ecuador: "/countries/ecuador",
  Egypt: "/countries/egypt",
  "El Salvador": "/countries/elsalvador",
  Galapagos: "/countries/galapagos",
  Gambia: "/countries/gambia",
  Georgia: "/countries/georgia",
  Gibraltar: "/countries/gibraltar",
  Ghana: "/countries/ghana",
  Greenland: "/countries/greenland",
  Guatemala: "/countries/guatemala",
  Honduras: "/countries/honduras",

  India: "/countries/india",
  Indonesia: "/countries/indonesia",
  Japan: "/countries/japan",
  Jordan: "/countries/jordan",
  Kenya: "/countries/kenya",
  Komodo: "/countries/komodo",
  Laos: "/countries/laos",
  Libya: "/countries/libya",
  Madagascar: "/countries/madagascar",
  Madeira: "/countries/madeira",
  Malaysia: "/countries/malaysia",
  Maldives: "/countries/maldives",
  Malta: "/countries/malta",
  Mauritius: "/countries/mauritius",
  Mexico: "/countries/mexico",
  Morocco: "/countries/morocco",
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
  Tanzania: "/countries/tanzania",
  Tenerife: "/countries/tenerife",
  Thailand: "/countries/thailand",
  Tunisia: "/countries/tunisia",
  Turkey: "/countries/turkey",
  Uganda: "/countries/uganda",
  "United Arab Emirates": "/countries/uae",
  "United States of America": "/countries/unitedstates",
  "Vatican City": "/countries/vatican",
  Vietnam: "/countries/vietnam",
  Zimbabwe: "/countries/zimbabwe",
  Zanzibar: "/countries/zanzibar",
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
    route: "/countries/new-york",
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
    route: "/countries/vatican",
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
                      console.log("Clicked country:", countryName);
                      if (countryName === "Namibia") {
                        window.location.href = "/countries/namibia";
                      }
                      if (countryName === "United States of America") {
                        window.location.href = "/countries/unitedstates";
                      }

                      if (countryName === "Zimbabwe") {
                        window.location.href = "/countries/zimbabwe";
                      }
                      if (countryName === "Uganda") {
                        window.location.href = "/countries/uganda";
                      }
                      if (countryName === "China") {
                        window.location.href = "/countries/china";
                      }
                      if (countryName === "Libya") {
                        window.location.href = "/countries/libya";
                      }
                      if (countryName === "United Kingdom") {
                        window.location.href = "/countries/british-isles";
                      }

                      if (countryName === "Ireland") {
                        window.location.href = "/countries/british-isles";
                      }
                      if (countryName === "France") {
                        window.location.href = "/countries/europe";
                      }
                      if (
                        [
                          "Albania",
                          "Austria",
                          "Belgium",
                          "Bosnia and Herzegovina",
                          "Bulgaria",
                          "Croatia",
                          "Czechia",
                          "Denmark",
                          "Estonia",
                          "Finland",
                          "France",
                          "Germany",
                          "Hungary",
                          "Iceland",
                          "Italy",
                          "Kosovo",
                          "Latvia",
                          "Lithuania",
                          "Luxembourg",
                          "Montenegro",
                          "Netherlands",
                          "North Macedonia",
                          "Norway",
                          "Poland",
                          "Portugal",
                          "Romania",
                          "Serbia",
                          "Slovakia",
                          "Slovenia",
                          "Spain",
                          "Switzerland",
                          "Sweden",
                          "Turkey",
                        ].includes(countryName)
                      ) {
                        window.location.href = "/countries/europe";
                      }

                      if (countryName === "Germany") {
                        window.location.href = "/countries/europe";
                      }
                      if (countryName === "Kenya") {
                        window.location.href = "/countries/kenya";
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
                      if (countryName === "Ghana") {
                        window.location.href = "/countries/ghana";
                      }
                      if (countryName === "Tunisia") {
                        window.location.href = "/countries/tunisia";
                      }
                      if (countryName === "Indonesia") {
                        window.location.href = "/countries/indonesia";
                      }
                      if (countryName === "Vietnam") {
                        window.location.href = "/countries/vietnam";
                      }
                      if (
                        countryName === "Gambia" ||
                        countryName === "The Gambia"
                      ) {
                        window.location.href = "/countries/gambia";
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
                      if (countryName === "Morocco") {
                        window.location.href = "/countries/morocco";
                      }
                      if (countryName === "Mexico") {
                        window.location.href = "/countries/mexico";
                      }
                      if (countryName === "Ecuador") {
                        window.location.href = "/countries/ecuador";
                      }
                      if (countryName === "Cambodia") {
                        window.location.href = "/countries/cambodia";
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
                      if (countryName === "Tanzania") {
                        window.location.href = "/countries/tanzania";
                      }
                      if (countryName === "Libya") {
                        window.location.href = "/countries/libya";
                      }
                      if (countryName === "Egypt") {
                        window.location.href = "/countries/egypt";
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
                      if (countryName === "Jordan") {
                        window.location.href = "/countries/jordan";
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
                        window.location.href = "/countries/europe/sweden";
                      }
                      if (countryName === "Syria") {
                        window.location.href = "/countries/syria";
                      }
                    }}
                    style={{
                      default: {
                        fill: visited ? "#2d4f9e" : "#111827",
                        stroke: "#5f84d6",
                        strokeWidth: 0.4,
                        outline: "none",
                      },
                      hover: {
                        fill: "#3f6dd6",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#4a7cff",
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

        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-4 flex items-center gap-3 text-sky-300">
              <Globe className="h-8 w-8" />
              <span className="text-sm uppercase tracking-[0.3em]">
                Peter Exley Travel Archive
              </span>
            </div>

            <h1 className="text-2xl font-semibold text-white lg:text-3xl">
              Choose a Map to Explore
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              name: "World",
              map: "/maps/world.jpeg",
              contact: "/maps/world-contact.jpeg",
              href: "/#world-map",
            },
            {
              name: "Europe",
              map: "/maps/europe.jpeg",
              contact: "/maps/europe-contact.jpeg",
              href: "/countries/europe",
            },
            {
              name: "British Isles",
              map: "/maps/british-isles.jpeg",
              contact: "/maps/british-isles-contact.jpeg",
              href: "/countries/british-isles",
            },

            {
              name: "Greek Islands",
              map: "/maps/greek-islands.jpeg",
              contact: "/maps/greek-islands-contact.jpeg",
              href: "/countries/greece",
            },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl transition hover:scale-[1.02]"
            >
              <div className="relative aspect-square">
                <img
                  src={item.map}
                  alt={`${item.name} map`}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                <img
                  src={item.contact}
                  alt={`${item.name} photo collage`}
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>
              </div>
            </a>
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

      <section id="world-map" className="mx-auto max-w-7xl px-6 pb-14">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white">
            Interactive World Map
          </h2>

          <p className="mt-2 text-slate-400">
            Click countries to open galleries.
          </p>
        </div>

        <ClickableWorldMap />
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
