import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "How to Stay Motivated - Blog Website",
  description: "Insightful tips to boost up your confidance, will-power and love for life.",
  icons: {
    icon: '/images/logo.PNG',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
