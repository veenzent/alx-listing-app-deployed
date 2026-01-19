import Image from "next/image";

export interface Property {
    id?: string | number;
    name: string;
    image: string;
    price: number;
    rating?: number;
    [key: string]: any;
}

interface Props {
    property: Property;
}

export default function PropertyCard({ property }: Props) {
    const {
        name = "Unknown",
        image = "/assets/Image 1.png",
        price = 0,
        rating = 0,
    } = property;

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
