import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import ParticleBackground from "@/components/ParticleBackground";
import { siteConfig } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Workforce Management Platform`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/teamsetu-logo.png",
    apple: "/teamsetu-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col relative bg-white">
        {/* Persistent background constellation for all pages */}
        <div className="fixed inset-0 h-full w-full pointer-events-none z-0 opacity-30">
          <ParticleBackground />
        </div>

        <div className="relative z-10 flex min-h-full flex-col flex-1">
          <Navbar />
          <main className="flex-1 relative">{children}</main>
          <Footer />
        </div>
        <Chatbot />
      </body>
    </html>
  );
}
