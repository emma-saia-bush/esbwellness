import type { Metadata } from "next";
import { Libre_Baskerville, Public_Sans } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { Toaster } from "@/components/ui/sonner";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-geist-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "ESB Wellness",
  description: "ESB Wellness Center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${publicSans.variable} antialiased w-full min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}
