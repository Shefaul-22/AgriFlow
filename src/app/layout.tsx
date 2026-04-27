import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
// import Script from "next/script";

import GoogleTranslate from "./components/GoogleTranslate/GoogleTranslate";
import QueryProvider from "./Dashboard/QueryProvider";
import Providers from "@/providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgriFlow",
  description: "AgriFlow - Streamlining Agricultural Operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <QueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
          <Providers/>
        </QueryProvider>
        {/* Google Translate Scripts */}
        <GoogleTranslate></GoogleTranslate>
      </body>
    </html>
  );
}