import { properties } from "../../data/properties";
import { useRouter } from "next/router";

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;
  const property = properties.find((prop) => prop.id.toString() === id);

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{property.title}</h1>
      <Image src={property.imageUrl} alt={property.title} width={800} height={600} className="rounded-md" />
      <p className="mt-4 text-lg">{property.description}</p>
      <p className="text-green-500 font-bold mt-2">${property.price.toLocaleString()}</p>
      <p className="text-gray-500 mt-2">{property.location}</p>
    </div>
  );
}
