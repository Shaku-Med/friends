import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'dotenv/config'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gain Access",
  description: "Gain access to the account now. Here. Click on the link and open.",
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      type: 'image/x-icon'
    },
    {
      rel: 'apple-touch-icon',
      url: '/fav.png'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" w-full h-full" lang="en">
      <body className={`${inter.className} flex w-full h-full items-center justify-center flxmxt`}>{children}</body>
    </html>
  );
}
