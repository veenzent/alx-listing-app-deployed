import Image from "next/image";
import BookingForm from "@/components/booking/BookingForm";

interface Property {
    id?: string | number;
    name?: string;
    image?: string;
    price?: number;
    rating?: number;
    address?: { city?: string; state?: string; country?: string };
    description?: string;
    [key: string]: any;
}

interface Props {
    property: Property;
}

export default function PropertyDetail({ property }: Props) {
    const {
        name = "Unknown Property",
        image = "/assets/Image 1.png",
        price = 0,
        rating = 0,
        address,
        description,
    } = property || {};

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="relative w-full h-96 rounded-lg overflow-hidden">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="mt-6">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <div className="flex items-center gap-4 mt-2">
                            <p className="text-yellow-500 font-semibold">
                                ⭐ {rating}
                            </p>
                            <p className="text-gray-600">${price}/night</p>
                        </div>

                        {address && (
                            <p className="text-gray-700 mt-4">
                                {address.city ? `${address.city}, ` : ""}
                                {address.state ? `${address.state}, ` : ""}
                                {address.country ?? ""}
                            </p>
                        )}

                        {description && (
                            <p className="mt-4 text-gray-800">{description}</p>
                        )}
                    </div>
                </div>

                <aside className="md:col-span-1">
                    <div className="sticky top-6 space-y-4">
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <p className="text-sm text-gray-500">Per night</p>
                            <p className="text-2xl font-bold">${price}</p>

                            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md">
                                Reserve
                            </button>
                        </div>

                        <BookingForm />
                    </div>
                </aside>
            </div>
        </div>
    );
}
