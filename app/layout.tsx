import NavTop from "@/components/NavTop";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBottom from "@/components/NavBottom";
import { ModalAddPostProvider } from "@/context/modalContext";
import ModalPost from "@/components/ModalPost";

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
        <ModalAddPostProvider>
          <main className="max-w-7xl mx-auto py-4 sm:py-6 lg:px-8">
            <ModalPost />
            <NavTop />
            {children}
            <NavBottom />
          </main>
        </ModalAddPostProvider>
      </body>
    </html>
  );
}
