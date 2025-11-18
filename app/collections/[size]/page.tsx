const products = [
  {
    name: "Aqua Pure Water",
    image: "",
    size: "250ML",
    description:
      "Crystal clear purified water, perfect for daily hydration and healthy living.",
  },
  {
    name: "Fresh Mineral Water",
    image: "",
    size: "500ML",
    description:
      "Rich in natural minerals, sourced from pristine springs for optimal wellness.",
  },
  {
    name: "Hydro Premium",
    image: "",
    size: "1000ML",
    description:
      "Premium quality water with enhanced minerals for your family's health.",
  },
  {
    name: "Blue Drop",
    image: "",
    size: "2000ML",
    description:
      "Large capacity bottle ideal for offices, events, and family gatherings.",
  },
];

export default function ProductPage({ params }: { params: { size: string } }) {
  const product = products.find(
    (p) => p.size.toLowerCase() === params.size?.toLowerCase()
  );

  if (!product) {
    return <div className="p-20 text-xl">Product not found.</div>;
  }

  return (
    <div className="px-10 lg:px-40 py-20">
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="text-gray-600 mt-2 text-lg">{product.size}</p>

      <div className="mt-10">
        {product.image ? (
          <img
            src={product.image}
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        ) : (
          <div className="w-full max-w-lg h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            No Image
          </div>
        )}
      </div>

      <p className="mt-10 text-lg leading-relaxed">{product.description}</p>
    </div>
  );
}
