import NavTop from "@/components/NavTop";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBottom from "@/components/NavBottom";

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
      <body className={inter.className}>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NavTop />
          {children}
          <NavBottom />
        </main>
      </body>
    </html>
  );
}
