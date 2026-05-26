"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SupportFormProps {
  onSubmitForm: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  }) => Promise<void>;
}

const SupportForm = ({ onSubmitForm }: SupportFormProps) => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      // console.log("FORM DATA:", formData);

      await onSubmitForm(formData);

      setSent(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{ once: true }}
      className="w-full"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* NAME ROW */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* FIRST NAME */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#152f3e]">
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="First name"
              className="
                h-10
                w-full
                rounded-lg
                border
                border-gray-300
                bg-white
                px-4
                text-base
                outline-none
                transition-all
                duration-300
                focus:border-[#152f3e]
                focus:ring-4
                focus:ring-[#152f3e]/10
              "
            />
          </div>

          {/* LAST NAME */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#152f3e]">
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Last Name"
              className="
                h-10
                w-full
                rounded-lg
                border
                border-gray-300
                bg-white
                px-4
                text-base
                outline-none
                transition-all
                duration-300
                focus:border-[#152f3e]
                focus:ring-4
                focus:ring-[#152f3e]/10
              "
            />
          </div>
        </div>

        {/* EMAIL + PHONE */}
        <div className="grid gap-4 md:grid-cols-1">
          {/* EMAIL */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#152f3e]">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="
                h-10
                w-full
                rounded-lg
                border
                border-gray-300
                bg-white
                px-4
                text-base
                outline-none
                transition-all
                duration-300
                focus:border-[#152f3e]
                focus:ring-4
                focus:ring-[#152f3e]/10
              "
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#152f3e]">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={15}
              required
              placeholder="9876543210"
              className="
                h-10
                w-full
                rounded-lg
                border
                border-gray-300
                bg-white
                px-4
                text-base
                outline-none
                transition-all
                duration-300
                focus:border-[#152f3e]
                focus:ring-4
                focus:ring-[#152f3e]/10
              "
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#152f3e]">
            Message
          </label>

          <textarea
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Leave us a message..."
            className="
              w-full
              rounded-lg
              border
              border-gray-300
              bg-white
              p-4
              text-base
              outline-none
              transition-all
              duration-300
              focus:border-[#152f3e]
              focus:ring-4
              focus:ring-[#152f3e]/10
            "
          />
        </div>

        {/* BUTTON */}
        <motion.button
          type="submit"
          disabled={loading}
          className="
            flex
            h-10
            w-full
            items-center
            justify-center
            rounded-full
            bg-[#152f3e]
            text-base
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            cursor-pointer
            hover:bg-[#1d4459]
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {loading ? "Sending..." : sent ? "Message Sent" : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default SupportForm;
