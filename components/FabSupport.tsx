"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Clock, User, Bot } from "lucide-react";
import { openWhatsApp } from "@/utils/message";

const FabSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowSupport(true), 200);
      return () => clearTimeout(timer);
    } else {
      setShowSupport(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 cursor-pointer rounded-full shadow-2xl transform transition-all duration-500 ease-out flex items-center justify-center relative overflow-hidden ${
            isOpen
              ? "bg-green-500 hover:bg-green-600 rotate-45 scale-110"
              : "bg-linear-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 hover:scale-110"
          }`}
        >
          <div className="absolute inset-0 bg-white opacity-10 rounded-full animate-ping"></div>
          {isOpen ? (
            <X className="h-7 w-7 text-white transition-transform duration-300 rotate-180" />
          ) : (
            <MessageCircle className="h-7 w-7 text-white transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Chat Modal */}
      <div
        className={`fixed bottom-24 right-6 z-40 transform transition-all duration-500 ease-out ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-12 opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="w-80 md:w-96 h-[350px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-green-500 p-5 flex text-white relative overflow-hidden">
            <div className="relative z-10 flex space-x-3">
              <div>
                <h3 className="font-medium text-md mb-1">
                  Start a Conversation
                </h3>
                <p className="text-sm">
                  Hi! Click our support team below to chat on{" "}
                  <span className="font-semibold">WhatsApp</span>
                </p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 px-4 py-2 overflow-y-auto">
            <p className="text-gray-500 text-xs mb-4 text-center rounded-full py-1 inline-block">
              Team typically replies within a few hours
            </p>

            {/* Support Card with Animation */}
            <div
              className={`transform transition-all duration-700 ease-out ${
                showSupport
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div
                onClick={() => openWhatsApp("Hello, I need help with my order")}
                className="bg-linear-to-br from-white to-gray-50 border-l-4 border-green-500 rounded-xl px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                      A-one Customer Support
                    </h4>
                  </div>
                </div>
                <p className="text-sm  text-gray-600 mb-1 leading-relaxed">
                  Get instant support for all your queries and concerns
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>Mon-Sat (9AM-9PM)</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-30 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FabSupport;
