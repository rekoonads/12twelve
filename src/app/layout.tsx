import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my12twelve | Premier Digital Marketing & Influencer Agency in India",
  description:
    "my12twelve (12twelve) is India's leading digital marketing and influencer agency. We connect brands with top influencers to drive engagement and growth. Discover our innovative marketing solutions!",
  keywords: [
    "my12twelve",
    "12twelve",
    "digital marketing India",
    "influencer marketing India",
    "social media marketing",
    "brand partnerships",
    "content creation",
    "influencer outreach",
    "digital strategy",
    "marketing agency Delhi",
  ],
  openGraph: {
    title:
      "my12twelve | Premier Digital Marketing & Influencer Agency in India",
    description:
      "my12twelve (12twelve) is your go-to digital marketing and influencer agency in India. We specialize in creating impactful campaigns and connecting brands with top influencers across all major platforms.",
    url: "https://www.my12twelve.com",
    siteName: "my12twelve",
    images: [
      {
        url: "https://www.my12twelve.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "my12twelve - Leading Digital Marketing & Influencer Agency in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "my12twelve | Premier Digital Marketing & Influencer Agency in India",
    description:
      "Elevate your brand with my12twelve's expert digital marketing and influencer partnerships in India. Discover our innovative solutions today! #my12twelve #DigitalMarketingIndia",
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
                name: "my12twelve",
                alternateName: "12twelve",
                description:
                  "Premier Digital Marketing & Influencer Agency in India",
                url: "https://www.my12twelve.com",
                logo: "https://www.my12twelve.com/logo.png",
                sameAs: [
                  "https://www.instagram.com/my12twelve",
                  "https://www.linkedin.com/company/my12twelve",
                  "https://x.com/12oTwelve",
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
                areaServed: "India",
                serviceType: [
                  "Digital Marketing",
                  "Influencer Marketing",
                  "Social Media Marketing",
                  "Content Creation",
                  "Brand Partnerships",
                ],
                knowsLanguage: ["English", "Hindi"],
              }),
            }}
          />
          <meta name="geo.region" content="IN-DL" />
          <meta name="geo.placename" content="Delhi" />
          <meta name="geo.position" content="28.6139;77.2090" />
          <meta name="ICBM" content="28.6139, 77.2090" />
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
