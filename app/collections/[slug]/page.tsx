"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { copyToClipboard, openWhatsApp } from "@/utils/message";
import { toast } from "sonner";

const products = [
  {
    name: "Aqua Pure Water",
    image: "",
    size: { value: 250, unit: "ML" },
    description:
      "Crystal clear purified water, perfect for daily hydration and healthy living.",
  },
  {
    name: "Fresh Mineral Water",
    image: "",
    size: { value: 500, unit: "ML" },
    description:
      "Rich in natural minerals, sourced from pristine springs for optimal wellness.",
  },
  {
    name: "Hydro Premium",
    image: "",
    size: { value: 1000, unit: "ML" },
    description:
      "Premium quality water with enhanced minerals for your family's health.",
  },
  {
    name: "Blue Drop",
    image: "",
    size: { value: 2000, unit: "ML" },
    description:
      "Large capacity bottle ideal for offices, events, and family gatherings.",
  },
];

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  //@ts-ignore
  // const sizeParam = decodeURIComponent(params?.size || "");
  // const sizeValue = parseInt(sizeParam);
  // const product = products.find((p) => p.size.value === sizeValue);
  const sizeValue = parseInt(slug.match(/\d+/)?.[0] || "0");

  const product = products.find((p) => p.size.value === sizeValue);

  if (!product) {
    return <div className="p-20 text-xl">Product not found.</div>;
  }

  const handleCopy = async () => {
    const success = await copyToClipboard(window.location.href);

    if (success) {
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="px-10 lg:px-40 py-20">
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {product.image ? (
            <img
              src={product.image}
              className="w-full rounded-lg shadow-lg object-cover max-h-[550px]"
            />
          ) : (
            <div className="w-full h-[550px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </motion.div>

        {/* Product Info */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-600 font-bold text-lg">
            {product.size.value} {product.size.unit}
          </p>
          <p className="text-md text-gray-400 leading-relaxed">
            {product.description}
          </p>
          <div className="flex gap-4">
            <Button
              variant="default"
              className="bg-(--primary-color) h-10 rounded-xl font-semibold flex-1 hover:bg-blue-800"
              onClick={() =>
                openWhatsApp(
                  `Hi, I want to know about this product: ${product.name} - ${window.location.href}`
                )
              }
            >
              Enquire Now
            </Button>
            <Button
              className="h-10 w-full flex-1 font-semibold rounded-xl"
              variant="outline"
              size="icon"
              aria-label="Submit"
              onClick={handleCopy}
            >
              Copy Link
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
