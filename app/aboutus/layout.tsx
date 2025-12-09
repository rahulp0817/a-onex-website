import Navbar from "@/components/Navbar";
import React from "react";

export default async function AboutusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white flex-col items-center justify-between p-0">
      <Navbar />
      {children}
    </div>
  );
}
