import Image from "next/image";
import { getBaseUrl } from "@/lib/baseUrl";
interface Property {
  _id: string;
  title: string;
  price: number;
  category?: string;
  createdBy: {
    name: string;
    email: string;
    role: string;
  };
  images: {
    _id: string;
    filename: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

// Dynamic route: /property/[id]
export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch property data from backend
  const res = await fetch(`${getBaseUrl()}/api/items?id=${id}`, { cache: "no-store" });

  if (!res.ok) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Failed to load property details
      </div>
    );
  }

  const property: Property = await res.json();

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{property.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Image Gallery */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {property.images.length > 0 ? (
              property.images.map((img) => (
                <div
                  key={img._id}
                  className="relative w-full aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={`/api/upload/${img._id}`}
                    alt={property.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No images available</p>
            )}
          </div>
        </div>

        {/* Right: Property Details */}
        <div className="flex flex-col gap-4 bg-white shadow-lg rounded-xl p-5 border border-gray-100">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Property Details
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Category:{" "}
              <span className="font-medium">{property.category || "N/A"}</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Price</h3>
            <p className="text-purple-600 text-2xl font-bold mt-1">
              ₹{property.price.toLocaleString("en-IN")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Posted By</h3>
            <p className="text-gray-700 mt-1">
              {property.createdBy.name} ({property.createdBy.role})
            </p>
            <p className="text-gray-500 text-sm">{property.createdBy.email}</p>
          </div>

          <div className="text-sm text-gray-500 border-t pt-3 mt-3">
            <p>Created: {new Date(property.createdAt).toLocaleString()}</p>
            <p>Updated: {new Date(property.updatedAt).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
