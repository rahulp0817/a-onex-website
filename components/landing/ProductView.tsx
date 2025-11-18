"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductView() {
  const bottleRef = useRef(null);
  const sec1Ref = useRef(null);
  const sec2Ref = useRef(null);
  const sec3Ref = useRef(null);

  useEffect(() => {
    const bottle = bottleRef.current;

    // Section 1 → Section 2 animation
    gsap.fromTo(
      bottle,
      {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: sec2Ref.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        x: -400,
        y: -200,
        rotate: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );

    // Section 2 → Section 3 animation
    gsap.fromTo(
      bottle,
      { x: -100, y: 0, rotate: -4 },
      {
        scrollTrigger: {
          trigger: sec3Ref.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onLeave: () => {
            // STOP THE BOTTLE HERE
            gsap.set(bottle, {
              x: 400,
              y: -800,
              rotate: 0,
            });
          },
        },
        x: 400,
        y: -100,
        rotate: 0,
        opacity: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <>
      {/* Floating bottle */}
      <img
        ref={bottleRef}
        src="/bottle.png"
        className="fixed z-40 top-[40%] left-1/2 -translate-x-1/2 w-64 drop-shadow-2xl"
        alt="Bottle"
      />

      {/* Section 1 */}
      <section
        ref={sec1Ref}
        className="relative w-full h-screen px-40 py-6 flex justify-center items-center bg-white"
      >
        <div className="bg-gray-100 w-full h-full rounded-xl"></div>
      </section>

      {/* Section 2 */}
      <section
        ref={sec2Ref}
        className="relative w-full h-screen mt-20 px-40 py-6 flex justify-center items-center"
      >
        <div className="w-full h-full rounded-xl  bg-blue-50"></div>
        <div className="absolute right-60 top-1/2 -translate-y-1/2">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Sustainable Packaging
          </h1>
          <p className="text-lg opacity-80 text-gray-800">
            Our bottles are environmentally friendly & safe.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section
        ref={sec3Ref}
        className="relative w-full h-screen px-40 py-6 flex justify-center items-center bg-white"
      >
        <div className="bg-gray-100 w-full h-full rounded-xl"></div>

        <div className="absolute left-60 top-1/2 -translate-y-1/2">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Sustainable Packaging
          </h1>
          <p className="text-lg opacity-80 text-gray-800">
            Our bottles are environmentally friendly & safe.
          </p>
        </div>
      </section>
    </>
  );
}
