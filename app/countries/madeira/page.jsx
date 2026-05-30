const IMAGES = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
];

export default function MadeiraPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white p-8">
      <h1 className="text-5xl font-bold mb-8">Madeira</h1>

      <img
        src="/photos/europe/madeira/16.jpeg"
        alt="Madeira"
        className="w-full max-w-5xl h-[500px] object-cover rounded-2xl mb-12"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {IMAGES.map((image) => (
          <a
            key={image}
            href={`/photos/europe/madeira/${image}`}
            target="_blank"
          >
            <img
              src={`/photos/europe/madeira/${image}`}
              alt={image}
              className="rounded-xl w-full aspect-square object-cover hover:opacity-80 transition"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
