import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "dotenv/config";
import Socials from "./components/Socials";

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
      <body className={`${inter.className} text-white`}>
        <div className="  flex min-h-screen flex-col items-center justify-between p-24 ">
        {children}
        <div className=" p-10 ">
          {<Socials/>}
        </div>
        </div>
      </body>
    </html>
  );
}