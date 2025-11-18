import type { Metadata } from "next";
import { Montserrat, Kavoon } from "next/font/google";
//@ts-ignore
import "./globals.css";
import FabSupport from "@/components/FabSupport";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const kavoon = Kavoon({
  variable: "--font-kavoon",
  subsets: ["latin"],
  weight: "400",
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
      <body className={`${montserrat.variable} ${kavoon.variable} antialiased`}>
        {children}
        <FabSupport />
        <Footer />
      </body>
    </html>
  );
}
