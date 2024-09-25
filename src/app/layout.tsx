import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head"; // Import Head component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "12otwelve",
  description: "Ecommerce media agency provider!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          {/* Google Tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-16709628315"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16709628315');
              `,
            }}
          />
        </Head>
        <body className={inter.className}>
          <div>{children}</div>
          {/* Optional: Add gtag script before closing body tag */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16709628315');
              `,
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
