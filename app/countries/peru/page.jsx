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
"9.jpeg",
"10.jpeg",
"11.jpeg",
"12.jpeg",
"13.jpeg",
"14.jpeg",
];
export default function PeruPage() {
return (


Peru

  <img
    src="/photos/south-america/peru/7.jpeg"
    alt="Peru"
    className="w-full max-w-5xl h-[500px] object-cover rounded-2xl mb-12"
  />

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {IMAGES.map((image) => (
      <a
        key={image}
        href={`/photos/south-america/peru/${image}`}
        target="_blank"
      >
        <img
          src={`/photos/south-america/peru/${image}`}
          alt={image}
          className="rounded-xl w-full aspect-square object-cover hover:opacity-80 transition"
        />
      </a>
    ))}
  </div>
</div>
);
}