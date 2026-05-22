"use client";

const IMAGES = [
"dunes.jpeg",
"elephant.jpeg",
"giraffes.jpeg",
"lions.jpeg",
"rhino.jpeg",
"zebras.jpeg"
];

export default function NamibiaPage() {
return (
<div className="bg-slate-950 min-h-screen text-white p-8">


  <h1 className="text-5xl font-bold mb-8">
    Namibia
  </h1>

  <img
    src="/photos/africa/namibia/dunes.jpeg"
    alt="Namibia dunes"
    className="w-full max-w-5xl rounded-2xl mb-12"
  />

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {IMAGES.map((image) => (
      <a
        key={image}
        href={`/photos/africa/namibia/${image}`}
        target="_blank"
      >
        <img
          src={`/photos/africa/namibia/${image}`}
          alt={image}
          className="rounded-xl w-full h-64 object-cover hover:opacity-80 transition"
        />
      </a>
    ))}
  </div>
</div>

);
}
