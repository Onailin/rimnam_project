import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/constants/theme";
import { logo } from "@/constants/logo";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name.th} | ชุมชนท่องเที่ยวจันทบุรี`,
    template: `%s | ${siteConfig.name.th}`,
  },
  description: siteConfig.description.th,
  keywords: [
    "ริมน้ำจันทบูร",
    "ท่องเที่ยวจันทบุรี",
    "ชุมชนท่องเที่ยว",
    "Chanthaburi tourism",
    "Rim Nam",
  ],
  openGraph: {
    title: siteConfig.name.th,
    description: siteConfig.description.th,
    locale: "th_TH",
    type: "website",
    images: [{ url: logo.src, alt: siteConfig.name.th }],
  },
  icons: {
    icon: logo.src,
    apple: logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${notoSansThai.variable} min-h-screen antialiased font-normal`}>
        <AppProviders>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
