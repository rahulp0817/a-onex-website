import type { Metadata } from "next";
import {
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";

//@ts-ignore
import "./globals.css";

import FabSupport from "@/components/FabSupport";
import Footer from "@/components/Footer";

import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

/* BODY FONT */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

/* HEADING FONT */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "A-Onex Waters",
  description: "Pure Filtered Water for a Healthier Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${jakarta.variable}
          antialiased
          font-body
        `}
      >
        <NextTopLoader
          color="#3B82F6"
          showSpinner={false}
        />

        <Toaster />

        {children}

        <FabSupport />

        <Footer />
      </body>
    </html>
  );
}