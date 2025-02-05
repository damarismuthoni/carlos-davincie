import Image from 'next/image';

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  imageUrl: string;
}

interface PropertyListProps {
  properties: Property[];
}

export default function PropertyList({ properties }: PropertyListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {properties.map((property) => (
        <div key={property.id} className="border p-4 rounded-lg shadow-lg">
          <Image
            src={property.imageUrl}
            alt={property.title}
            width={400}
            height={300}
            className="rounded-md"
          />
          <h2 className="text-lg font-semibold mt-2">{property.title}</h2>
          <p className="text-gray-500">{property.location}</p>
          <p className="text-green-500 font-bold">${property.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
