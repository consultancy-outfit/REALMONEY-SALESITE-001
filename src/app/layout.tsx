import type { Metadata } from "next";
import "@/styles/globals.css";
import RootProvidersLayout from "@/layouts/root-providers-layout";
import { outfitFontFamily } from "@/assets/fonts/outfit";

export const metadata: Metadata = {
  title:
    "Real Money – Instant Payments, Wallets & Smart Financial Tools | Centspay",
  description: `Experience Real Money with Centspay, built for instant, cardless payments and seamless digital wallets.
    Save smarter, spend globally, and send money in real-time with full security and control.
    From micro-transactions to multi-currency transfers, power your everyday finance effortlessly.`,
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
    title:
      "Real Money – Instant Payments, Wallets & Smart Financial Tools | Centspay",
    description: `Experience Real Money with Centspay, built for instant, cardless payments and seamless digital wallets.
      Save smarter, spend globally, and send money in real-time with full security and control.
      From micro-transactions to multi-currency transfers, power your everyday finance effortlessly.`,
    type: "website",
    images: [
      {
        url: "https://realmon.netlify.app/og-logo.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: `Experience Real Money with Centspay, built for instant, cardless payments and seamless digital wallets.
          Save smarter, spend globally, and send money in real-time with full security and control.
          From micro-transactions to multi-currency transfers, power your everyday finance effortlessly.`,
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
      <body
        className={`${outfitFontFamily.className} subpixel-antialiased`}
        style={{ backgroundColor: "#010101" }}
      >
        <RootProvidersLayout>{children}</RootProvidersLayout>
      </body>
    </html>
  );
}
