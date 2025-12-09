"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { copyToClipboard, openWhatsApp } from "@/utils/message";
import { toast } from "sonner";
import { Droplet } from "lucide-react";

const products = [
  {
    name: "AoneX Premium Drinking Water with Added Minerals",
    image: "",
    size: { value: 250, unit: "ML" },
    description:
      "Say hello to Aonex’s easy-fit 250 ml Packaged Drinking Water your tiny-but-mighty hydration partner for every moment of the day.Light to carry, quick to sip, and perfectly refreshing, it fits effortlessly into your routine whether you’re hustling at work, powering through a gym session, chilling at home, or heading out on a trip. Aonex delivers safe, clean and mineral-enhanced drinking water, crafted for everyday India. From a fast thirst fix to steady hydration, our 250 ml bottle is just the start. Aonex offers a full range of bottle sizes and premium mineral options to match every lifestyle and every thirst.\n Trusted across India, Aonex Packaged Drinking Water stands for purity, consistency, and care ensuring every sip is clean, crisp, and made to elevate your day. Clean water, clear choice that’s Aonex",
  },
  {
    name: "AoneX Fresh Drinking Water with Added Minerals",
    image: "",
    size: { value: 500, unit: "ML" },
    description:
      "Meet the Aonex 500 ml Packaged Drinking Water the perfect balance between “light to carry” and “enough to keep you going.” It’s crafted for the doers, the travellers, the meeting-hoppers, and everyone who loves staying refreshed without slowing down. One bottle, half a litre of pure clarity, and hydration that keeps you switched on.Every sip of Aonex delivers safe, purified, mineral-enhanced water, made to support your busy day from start to finish. Smooth taste, reliable quality, and absolute freshness that’s what this 500 ml bottle is all about.From events and offices to workouts and daily commutes, the Aonex 500 ml bottle slides right into your routine, giving you dependable hydration wherever life takes you. Choose Aonex because great days start with clean water",
  },
  {
    name: "AoneX Fresh Drinking Water with Added Minerals",
    image: "",
    size: { value: 1000, unit: "ML" },
    description:
      "Our 1 Litre Aonex Packaged Drinking Water is built for long days, long journeys, and everything in between. When you’re constantly on the move, this is the bottle that keeps you fueled a clear and reliable choice for staying hydrated from morning to night with premium, refreshing water. \nWhether you need a quick sip or steady hydration that lasts for hours, Aonex offers 1 Litre bottles along with a wide range of other sizes and mineral-rich options to suit every lifestyle and every thirst.\nTrusted across India, Aonex Packaged Drinking Water delivers clean, safe, and consistently pure water to people everywhere ensuring hydration you can count on, wherever the day takes you. Clean water. Confident choice. That’s Aonex",
  },
  {
    name: "AoneX Fresh Drinking Water with Added Minerals",
    image: "",
    size: { value: 2000, unit: "ML" },
    description:
      "Our 2 Litre Aonex water bottle is designed for those long days, long travels, and moments when you simply need more. It’s your clear and dependable choice for staying hydrated throughout the day with our premium, purified drinking water.\nWhether you’re looking for a quick refreshing sip or hydration that lasts for hours, Aonex offers 2 Litre bottles along with a complete range of other sizes and mineral-rich options to match your lifestyle and hydration needs.\n\n As one of India’s trusted premium water brands, Aonex ensures access to clean, safe, and consistently pure drinking water across the nation making every sip count and every moment refreshed",
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
              className="w-full rounded-lg shadow-lg object-cover max-h-[530px]"
            />
          ) : (
            <div className="w-full h-[530px] bg-gray-200 rounded-lg flex flex-col items-center justify-center text-gray-500">
              <Droplet size={62} strokeWidth={1.5} />
              <span className="text-sm mt-2 font-bold">Aonex Waters</span>
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
          <h1 className="text-4xl font-bold text-gray-800 select-none">
            {product.name}
          </h1>
          <p className="text-gray-600 font-bold text-lg">
            {product.size.value} {product.size.unit}
          </p>
          <p className="text-md text-gray-400 leading-relaxed whitespace-pre-line select-none">
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
              Share Link
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
