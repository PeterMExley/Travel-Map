"use client";

const IMAGES = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];

export default function ChinaPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white p-8">
      <h1 className="text-5xl font-bold mb-8">China</h1>

      <img
        src="/photos/asia/china/5.jpeg"
        alt="China"
        className="w-full max-w-5xl h-[500px] object-cover rounded-2xl mb-12"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {IMAGES.map((image) => (
          <a key={image} href={`/photos/asia/china/${image}`} target="_blank">
            <img
              src={`/photos/asia/china/${image}`}
              alt={image}
              className="rounded-xl w-full h-48 object-contain bg-black hover:opacity-80 transition"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
