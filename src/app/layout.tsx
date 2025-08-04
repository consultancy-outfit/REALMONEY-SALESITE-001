import type { Metadata } from "next";
import "@/styles/globals.css";
import RootProvidersLayout from "@/layouts/root-providers-layout";
import { outfitFontFamily } from "@/assets/fonts/outfit";

export const metadata: Metadata = {
  title: "FA Global | Smarter Open Banking & Financial Data Solutions",
  description:
    "Explore FA Global’s powerful suite of open banking APIs and financial intelligence tools. From Account Information to Payment Initiation, KYC, and data enrichment—enable seamless, secure, and compliant financial experiences for your users across the UK and EU.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: {
      rel: "favicon.png",
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
  openGraph: {
    title: "FA Global | Smarter Open Banking & Financial Data Solutions",
    description:
      "Explore FA Global’s powerful suite of open banking APIs and financial intelligence tools. From Account Information to Payment Initiation, KYC, and data enrichment—enable seamless, secure, and compliant financial experiences for your users across the UK and EU.",
    type: "website",
    images: [
      {
        url: "https://faglobal.netlify.app/og-logo.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Explore FA Global’s powerful suite of open banking APIs and financial intelligence tools. From Account Information to Payment Initiation, KYC, and data enrichment—enable seamless, secure, and compliant financial experiences for your users across the UK and EU.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfitFontFamily.className} subpixel-antialiased`}>
        <RootProvidersLayout>{children}</RootProvidersLayout>
      </body>
    </html>
  );
}
