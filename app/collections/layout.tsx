import React from "react";
import NavbarGlobal from "@/components/NavbarGlobal";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-16 bg-white h-screen">
      <NavbarGlobal />
      {children}
    </div>
  );
}
