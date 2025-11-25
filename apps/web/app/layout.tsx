import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets:["devanagari"]
});

export const metadata: Metadata = {
  title: "Property Bajar",
  description: "INDIA,S NO1 PROPERTY FINDING PLATFORM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} font-sans antialiased `}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-[#8812FC] to-[#6D10F4] shadow-lg">
          <Navbar />
        </header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}