"use client";

const IMAGES = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];

export default function UAEPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white p-8">
      <h1 className="text-5xl font-bold mb-8">United Arab Emirates</h1>

      <img
        src="/photos/asia/uae/1.jpeg"
        alt="United Arab Emirates"
        className="w-full max-w-5xl h-[500px] object-cover rounded-2xl mb-12"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {IMAGES.map((image) => (
          <a key={image} href={`/photos/asia/uae/${image}`} target="_blank">
            <img
              src={`/photos/asia/uae/${image}`}
              alt={image}
              className="rounded-xl w-full aspect-square object-cover hover:opacity-80 transition"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
