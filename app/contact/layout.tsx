import Navbar from "@/components/Navbar";
import React from "react";

export default async function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-16 bg-white min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
