import Image from "next/image";
import React from "react";

interface ProductBannerProps {
  name: string;
  description?: string;
}

const HeadingBanner = ({ name, description }: ProductBannerProps) => {
  return (
    <section
      className="
        flex
        min-h-90
        flex-col
        items-center
        justify-center
        px-6
        text-center
        relative
        overflow-hidden
      "
    >
      {/* BOTTOM WHITE FADE */}
<div
  className="
    absolute
    bottom-0
    left-0
    z-1
    h-10
    w-full
    bg-linear-to-b
    from-transparent
    via-white/70
    to-white
    blur-2xl
    border
  "
/>
      <div className="absolute inset-0 opacity-[0.07]">
        <Image
          src="/promotion-water-splash.png"
          alt="bg"
          fill
          className="object-cover"
        />
      </div>
      {/* HEADING */}
      <h1
        className="
          font-heading
          text-[70px]
          font-bold
          uppercase
          leading-none
          tracking-tight
          text-[#152f3e]
          md:text-[120px]
        "
      >
        {name}
      </h1>

      {/* DESCRIPTION */}
      <p
        className="
          mt-6
          max-w-2xl
          font-body
          text-sm
          leading-relaxed
          text-[#5c5c5c]
          md:text-base
        "
      >
        {description}
      </p>
    </section>
  );
};

export default HeadingBanner;
