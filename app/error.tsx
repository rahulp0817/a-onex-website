"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center border border-gray-200">
        {/* Icon */}
        <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-red-100 mb-6">
          <svg
            className="w-12 h-12 text-red-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-red-600 mb-3">
          Something went wrong
        </h1>

        {/* Message */}
        <p className="text-gray-700 mb-6">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>

        {/* Refresh Button */}
        <Button
          onClick={() => reset()}
          className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-xl transition-all w-full"
        >
          Try Again
        </Button>

        {/* Home Button */}
        <a
          href="/"
          className="mt-4 inline-block text-gray-600 hover:text-gray-900 underline transition"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
