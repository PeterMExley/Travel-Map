"use client";

const IMAGES = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
];

export default function BerlinPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white p-8">
      <h1 className="text-5xl font-bold mb-8">Berlin</h1>

      <img
        src="/photos/europe/berlin/1.jpeg"
        alt="Berlin"
        className="w-full max-w-5xl h-[500px] object-cover rounded-2xl mb-12"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {IMAGES.map((image) => (
          <a
            key={image}
            href={`/photos/europe/berlin/${image}`}
            target="_blank"
          >
            <img
              src={`/photos/europe/berlin/${image}`}
              alt={image}
              className="rounded-xl w-full aspect-square object-cover hover:opacity-80 transition"
            />
          </a>
        ))}
      </div>

      <div className="mt-12 max-w-4xl text-slate-400 text-sm">
        <h2 className="text-lg font-semibold text-white mb-3">
          Note on Images
        </h2>

        <p className="mb-4">
          Four photographs on this page are representative images of locations I
          visited in Berlin. Unfortunately my original photographs of these
          sites were lost.
        </p>

        <h3 className="text-white font-semibold mb-2">
          Representative Image Credits
        </h3>

        <ul className="list-disc list-inside space-y-1">
          <li>Reichstag – Photo by Aron Marinelli (Unsplash)</li>
          <li>Brandenburg Gate – Photo by Marius Serban (Unsplash)</li>
          <li>Berlin Cathedral – Photo by Julia Solonina (Unsplash)</li>
          <li>Fernsehturm – Photo by Łukasz Czeladziński (Unsplash)</li>
        </ul>
      </div>
    </div>
  );
}
