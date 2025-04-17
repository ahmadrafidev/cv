import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scholaris",
  description: "A sleek academic resume template for researchers, scholars, and thinkers.",
  metadataBase: new URL("https://scholariss.vercel.app/"),
  openGraph: {
    title: "Scholaris",
    description: "A sleek academic resume template for researchers, scholars, and thinkers.",
    url: "https://scholariss.vercel.app/",
    siteName: "Scholaris",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-white text-black dark:bg-zinc-950 dark:text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
