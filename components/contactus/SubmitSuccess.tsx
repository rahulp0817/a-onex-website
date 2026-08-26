"use client";

import React from "react";
import { motion } from "framer-motion";

interface SubmitSuccessProps {
  /** Optional: show the submitted name for a slightly personal touch */
  name?: string;
  /** Called when the user clicks "Send another message" */
  onReset?: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const SubmitSuccess = ({ name, onReset }: SubmitSuccessProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="flex w-full flex-col items-center justify-center px-6 py-10 mt-10 text-center"
      role="status"
      aria-live="polite"
    >
      {/* CHECK BADGE */}
      <div className="relative mb-6 flex h-20 w-20 items-center justify-center">
        {/* soft pulse ring behind the badge */}
        <motion.span
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ opacity: 0, scale: 1.6 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
          className="absolute inset-0 rounded-full bg-[#152f3e]/15"
        />

        {/* solid circle scaling in */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.05 }}
          className="absolute inset-0 rounded-full bg-green-500/90"
        />

        {/* checkmark, drawn on top */}
        <svg
          viewBox="0 0 52 52"
          className="relative h-10 w-10"
          fill="none"
        >
          <motion.path
            d="M14 27.5L22 35.5L38 17.5"
            stroke="#ffffff"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: EASE,
              delay: 0.45,
            }}
          />
        </svg>
      </div>

      {/* COPY */}
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE, delay: 0.55 }}
        className="text-xl font-semibold text-[#152f3e]"
      >
        Message sent{name ? `, thanks ${name}` : ""}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE, delay: 0.65 }}
        className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500"
      >
        Our team will get back to you within 24 hours.
      </motion.p>

      {/* {onReset && (
        <motion.button
          type="button"
          onClick={onReset}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.75 }}
          className="mt-6 text-sm font-semibold text-[#152f3e] underline decoration-[#152f3e]/30 underline-offset-4 transition-colors duration-200 hover:decoration-[#152f3e] cursor-pointer"
        >
          Send another message
        </motion.button>
      )} */}
    </motion.div>
  );
};

export default SubmitSuccess;