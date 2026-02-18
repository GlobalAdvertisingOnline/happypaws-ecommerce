import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IMAGES } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { CartProvider } from "@/lib/cart/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HappyPaws — Premium Pet Accessories, Happy Pets",
    template: "%s | HappyPaws",
  },
  description:
    "HappyPaws is your trusted online pet accessories store — premium collars, cozy beds, fun toys, and grooming essentials for dogs and cats.",
  keywords: ["pet accessories", "dog collars", "pet beds", "dog toys", "cat toys", "pet grooming", "pet store online"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HappyPaws",
    title: "HappyPaws — Premium Pet Accessories, Happy Pets",
    description:
      "Premium pet accessories and supplies. Collars, beds, toys, grooming tools, and apparel for dogs and cats.",
    images: [
      {
        url: IMAGES.ogImage,
        width: 1200,
        height: 630,
        alt: "HappyPaws — Premium Pet Accessories, Happy Pets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HappyPaws — Premium Pet Accessories, Happy Pets",
    description:
      "Premium pet accessories and supplies. Collars, beds, toys, grooming tools, and apparel for dogs and cats.",
    images: [IMAGES.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <CartProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-teal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
          <CookieBanner />
        </CartProvider>
      </body>
    </html>
  );
}
