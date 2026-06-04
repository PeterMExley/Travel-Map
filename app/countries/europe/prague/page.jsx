import Image from "next/image";

const photos = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
];

export default function PraguePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/photos/europe/prague/3.jpeg"
          alt="Prague"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <h1 className="text-5xl font-bold p-8">Prague</h1>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={`/photos/europe/prague/${photo}`}
                alt={`Prague ${photo}`}
                fill
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
