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
  "17.jpeg",
  "18.jpeg",
  "19.jpeg",
  "20.jpeg",
  "21.jpeg",
  "22.jpeg",
  "23.jpeg",
  "24.jpeg",
];

export default function CostaRicaPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white p-8">
      <h1 className="text-5xl font-bold mb-8">Costa Rica</h1>

      <img
        src="/photos/north-america/costarica/1.jpeg"
        alt="Costa Rica"
        className="w-full max-w-5xl h-[500px] object-cover rounded-2xl mb-12"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {IMAGES.map((image) => (
          <a
            key={image}
            href={`/photos/north-america/costarica/${image}`}
            target="_blank"
          >
            <img
              src={`/photos/north-america/costarica/${image}`}
              alt={image}
              className="rounded-xl w-full aspect-square object-cover hover:opacity-80 transition"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
