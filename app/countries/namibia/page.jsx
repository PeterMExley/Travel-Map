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
<>
Namibia

  <img
    src="/photos/africa/namibia/dunes.jpeg"
    alt="Namibia dunes"
  />

  {IMAGES.map((image) => (
    <img
      key={image}
      src={`/photos/africa/namibia/${image}`}
      alt={image}
    />
  ))}
</>

);
}
