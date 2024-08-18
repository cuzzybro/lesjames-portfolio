import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "dotenv/config";
import Image from "next/image";
import technology from "@/public/technology.jpg"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Les James | Portfolio",
  description: "Created with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${inter.className} text-white` }
      >
        <div>
          <Image src={technology} alt="" className=" bg-cover z-[-1] fixed opacity-30"/>
        </div>
        <div className="  flex min-h-screen flex-col items-center justify-between p-24 ">
          {children}
        </div>
      </body>
    </html>
  );
}