import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { _siteDetails } from "@/lib/config";

const myFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: _siteDetails.name,
  description: _siteDetails.desc,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
