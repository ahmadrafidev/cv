import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import PrintHandler from "@/components/PrintHandler";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "Scho - A Sleek Resume Template",
    template: "%s | Scho"
  },
  description: "A modern and sleek academic portfolio platform for researchers, scholars, and thinkers.",
  keywords: ["academic", "portfolio", "research", "scholar", "education", "university"],
  authors: [{ name: "Ahmad Rafi Wirana" }],
  creator: "Rafi",
  metadataBase: new URL("https://scho.vercel.app/"),
  openGraph: {
    title: "Scho - A Sleek Resume Template",
    description: "A modern and sleek academic portfolio platform for researchers, scholars, and thinkers.",
    url: "https://scho.vercel.app/",
    siteName: "Scho",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scho - Professional Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Scho - A Sleek Resume Template",
    description: "A modern and sleek academic portfolio platform for researchers, scholars, and thinkers.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "verification_token",
    other: {
      me: ["https://scho.vercel.app"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-white text-black dark:bg-zinc-950 dark:text-zinc-100 antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PrintHandler />
          <div className="print-container">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
