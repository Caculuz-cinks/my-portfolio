import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const acorn = localFont({
  src: [
    {
      path: "../public/fonts/Acorn/Acorn-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Acorn/Acorn-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Acorn/Acorn-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Acorn/Acorn-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

const roobert = localFont({
  src: [
    {
      path: "../public/fonts/Roobert-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Roobert-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Roobert-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Roobert-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Roobert-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const recoleta = localFont({
  src: [
    { path: "../public/fonts/Recoleta/Recoleta-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Recoleta/Recoleta-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Recoleta/Recoleta-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isaiah Adeleke — Senior AI Product Designer",
  description:
    "Isaiah Adeleke is a Senior AI Product Designer and Co-founder of Tride, designing intelligent systems where humans and AI collaborate. Based in Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${acorn.variable} ${roobert.variable} ${recoleta.variable} font-sans bg-cream text-ink antialiased`}
      >
        <CustomCursor />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
