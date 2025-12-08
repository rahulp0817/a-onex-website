import React from "react";
import NavbarGlobal from "@/components/NavbarGlobal";

export default async function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white flex-col items-center justify-between p-0">
      <NavbarGlobal />
      {children}
    </div>
  );
}
