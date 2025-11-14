import Image from "next/image";

interface CardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
}

export default function PropertyCard({ name, image, price, rating }: CardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-md transition">
      <div className="relative w-full h-48">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">${price}/night</p>
        <p className="text-yellow-500 font-semibold">⭐ {rating}</p>
      </div>
    </div>
  );
}
