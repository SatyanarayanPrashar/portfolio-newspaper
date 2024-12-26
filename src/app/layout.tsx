import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hii! I'm Satya",
  description: "I build stuffs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <p className="font-serif text-[6.4vw] mt-[3vw] text-center leading-none text-amber-950 tracking-wider">
          SATYANARAYAN PRASHAR
        </p>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
