import Navbar from "@/components/Navbar";
import React from "react";

export default async function AboutusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-16 bg-white">
      <Navbar />
      {children}
    </div>
  );
}
