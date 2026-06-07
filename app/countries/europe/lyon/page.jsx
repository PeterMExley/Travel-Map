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

export default function LyonPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white p-8">
      <h1 className="text-5xl font-bold mb-8">Lyon</h1>

      <img
        src="/photos/europe/lyon/1.jpeg"
        alt="Lyon"
        className="w-full max-w-5xl h-[500px] object-cover rounded-2xl mb-12"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {IMAGES.map((image) => (
          <a
            key={image}
            href={`/photos/europe/lyon/${image}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`/photos/europe/lyon/${image}`}
              alt={image}
              className="rounded-xl w-full aspect-square object-cover hover:opacity-80 transition"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
