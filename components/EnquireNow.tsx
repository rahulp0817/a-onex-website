import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface EnquireNowProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquireNow = ({ isOpen, onClose }: EnquireNowProps) => {
  // CLOSE ON ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  // PREVENT BODY SCROLL
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[3px]"
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed 
              left-1/2 
              top-1/2 
              z-50 
              w-[92%] 
              max-w-6xl 
              -translate-x-1/2 
              -translate-y-1/2 
              overflow-hidden 
              rounded-[30px] 
              bg-white
              shadow-2xl
              px-4
            "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="
                absolute 
                right-3 
                top-4 
                z-50 
                flex 
                h-8 
                w-8 
                items-center 
                justify-center 
                rounded-full 
                border 
                border-gray-300 
                bg-white 
                text-gray-600 
                transition-all 
                duration-300 
                hover:rotate-90 
                hover:bg-gray-100
                cursor-pointer
              "
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* LEFT SIDE */}
              <div className="flex flex-col justify-center px-8 py-4 md:px-12">
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="
                    text-xl 
                    font-bold 
                    text-[#1f1f1f] 
                    md:text-3xl
                  "
                >
                  Enquiry Form
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="
                    mt-2 
                    max-w-xl 
                    text-base 
                    text-gray-500
                  "
                >
                  Have a question or need more details? We’re here to help!
                </motion.p>

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 overflow-hidden rounded-3xl"
                >
                  <img
                    src="/images/water-product.png"
                    alt="Water Product"
                    className="h-80 w-full object-cover"
                  />
                </motion.div>
              </div>

              {/* RIGHT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="
                  bg-[#eef6fc] 
                  px-8 
                  py-6 
                  md:px-10
                  my-12
                  rounded-xl
                  mr-8
                "
              >
                <h3 className="text-xl font-bold text-[#202020]">
                  Fill The Details
                </h3>

                <form className="mt-6 space-y-4">
                  {/* NAME */}
                  <div>
                    <label
                      className="
                        mb-2 
                        block 
                        text-sm
                        font-semibold 
                        text-[#202020]
                      "
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="
                        h-10
                        w-full 
                        rounded-md
                        border 
                        border-gray-300 
                        bg-white 
                        px-5 
                        text-base 
                        outline-none 
                        transition 
                        focus:border-blue-500
                      "
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      className="
                        mb-2 
                        block 
                        text-sm
                        font-semibold 
                        text-[#202020]
                      "
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      maxLength={10}
                      className="
                        h-10
                        w-full 
                        rounded-md
                        border 
                        border-gray-300 
                        bg-white 
                        px-5 
                        text-base 
                        outline-none 
                        transition 
                        focus:border-blue-500
                        
                      "
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      className="
                        mb-2 
                        block 
                        text-sm
                        font-semibold 
                        text-[#202020]
                      "
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="
                        h-10
                        w-full 
                        rounded-md 
                        border 
                        border-gray-300 
                        bg-white 
                        px-5 
                        text-base 
                        outline-none 
                        transition 
                        focus:border-blue-500
                      "
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      className="
                        mb-2 
                        block 
                        text-sm
                        font-semibold 
                        text-[#202020]
                      "
                    >
                      Message
                    </label>

                    <textarea
                      rows={2}
                      placeholder="Enter Your Message"
                      className="
                        w-full 
                        rounded-md 
                        border 
                        border-gray-300 
                        bg-white 
                        p-4 
                        text-base 
                        outline-none 
                        transition 
                        focus:border-blue-500
                      "
                    />
                  </div>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      h-10 
                      mt-2
                      w-full 
                      rounded-xl
                      bg-(--primary-color)
                      text-md
                      font-medium
                      text-white 
                      shadow-lg 
                      transition-all
                      cursor-pointer
                    "
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
