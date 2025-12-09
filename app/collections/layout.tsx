import React from "react";
import Navbar from "@/components/Navbar";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-16 bg-white">
      <Navbar/>
      {children}
    </div>
  );
}
