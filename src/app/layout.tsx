import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "12twelve | Innovative Technology Solutions",
  description:
    "my12twelve.com - Harness the power of cutting-edge technologies to build scalable, efficient, and innovative solutions for the future.",
  keywords: [
    "12twelve",
    "my12twelve",
    "technology",
    "innovation",
    "scalable solutions",
  ],
  openGraph: {
    title: "12twelve | Innovative Technology Solutions",
    description:
      "my12twelve.com - Harness the power of cutting-edge technologies to build scalable, efficient, and innovative solutions for the future.",
    url: "https://my12twelve.com",
    siteName: "12twelve",
    images: [
      {
        url: "https://my12twelve.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "12twelve - Innovative Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "12twelve | Innovative Technology Solutions",
    description:
      "my12twelve.com - Harness the power of cutting-edge technologies to build scalable, efficient, and innovative solutions for the future.",
    images: ["https://my12twelve.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://my12twelve.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={inter.className}>
          {children}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-16709628315"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16709628315');
            `}
          </Script>
        </body>
      </html>
    </ClerkProvider>
  );
}
