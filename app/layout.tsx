import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RR Enterprise",
  description:
    "RR Enterprise — Building trust through excellence. A legacy of dedication, integrity, and forward-thinking leadership.",
  keywords: ["RR Enterprise", "business", "enterprise", "consulting"],
  openGraph: {
    title: "RR Enterprise",
    description: "Building trust through excellence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
