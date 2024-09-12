import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { ViewTransitions } from "next-view-transitions";
import Nav from "./_components/Nav";
import Footer from "./(home)/_components/Footer";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Tours", "Travesls", "Holidays", "Nepal"],
  other: {
    "google-site-verification": "8awNV2yCQ5JzkpIRBROpRn3WccqvAKDWf3Gr1f0Yu3g",
  },
  authors: [
    {
      name: "Siddhartha Shrestha",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    images: "/images/header_logo.png",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <ViewTransitions>
        <body
          className={
            (cn("min-h-screen bg-background font-sans antialiased"),
            inter.className)
          }
        >
          <div className="flex flex-col justify-between h-screen">
            <Nav />
            {children}
            <Footer />
          </div>
          <Toaster />
        </body>
      </ViewTransitions>
    </html>
  );
}
