import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavNextUI from "./components/NavNextUI";

const inter = Inter({ subsets: ["latin"] });

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Landing Page",
  description: "The fastest way to build apps with Next.js and Supabase",
};


export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen min-w-full flex-col items-center">
          <NavNextUI />
          {children}
        </main>
      </body>
    </html>
  );
}
