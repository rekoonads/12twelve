import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "12twelve | Digital Marketing & Influencer Agency",
  description:
    "12twelve is a leading digital marketing agency specializing in influencer marketing. We connect brands with top influencers across various platforms to drive engagement and growth.",
  keywords: [
    "12twelve",
    "my12twelve",
    "digital marketing",
    "influencer marketing",
    "social media marketing",
    "brand partnerships",
    "content creation",
    "influencer outreach",
    "digital strategy",
    "marketing agency",
  ],
  openGraph: {
    title: "12twelve | Digital Marketing & Influencer Agency",
    description:
      "Connect with top influencers and boost your brand's digital presence with 12twelve's innovative marketing solutions.",
    url: "https://www.my12twelve.com",
    siteName: "12twelve",
    images: [
      {
        url: "https://www.my12twelve.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "12twelve - Digital Marketing & Influencer Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "12twelve | Digital Marketing & Influencer Agency",
    description:
      "Elevate your brand with 12twelve's expert digital marketing and influencer partnerships. Discover our innovative solutions today!",
    images: ["https://www.my12twelve.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.my12twelve.com",
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
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MarketingAgency",
                name: "12twelve",
                description: "Digital Marketing & Influencer Agency",
                url: "https://www.my12twelve.com",
                logo: "https://www.my12twelve.com/logo.png",
                sameAs: [
                  "https://www.facebook.com/12twelve",
                  "https://www.instagram.com/12twelve",
                  "https://www.linkedin.com/company/12twelve",
                  "https://www.twitter.com/12twelve",
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Delhi, India, 110093",
                  addressLocality: "Delhi",
                  addressRegion: "DL",
                  postalCode: "110093",
                  addressCountry: "IN",
                },
                telephone: "+917836001200",
                email: "hello@my12twelve.com",
              }),
            }}
          />
        </head>
        <body className={inter.className}>
          {children}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XMBMGG2511"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XMBMGG2511');
            `}
          </Script>
        </body>
      </html>
    </ClerkProvider>
  );
}
