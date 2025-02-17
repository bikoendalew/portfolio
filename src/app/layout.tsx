import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Adsence from "./components/Adsence";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biruk Endalew - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Adsence pId="8232400557982205"/>
      </head>
      <body className={`${inter.className}bg-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}