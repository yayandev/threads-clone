import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "Say more with Threads — Instagram new text app.",
  openGraph: {
    images: [
      {
        url: "/android-chrome-192x192.png",
      },
    ],
  },
  manifest: "/site.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="in">
      <body className={`${inter.className} bg-[rgb(16,16,16)]`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
