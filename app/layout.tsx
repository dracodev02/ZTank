import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const anton = localFont({
  src: "./fonts/Anton-Regular.ttf",
  variable: "--font-anton",
  weight: "100 900",
});
const inter = localFont({
  src: "./fonts/Inter_18pt-Medium.ttf",
  variable: "--font-inter",
  weight: "400",
});
const sfProDisplay = localFont({
  src: "./fonts/sf_pro_display-Regular.otf",
  variable: "--font-sf-pro-display",
  weight: "400",
});

export const metadata: Metadata = {
  title: "ZTank",
  description: "ZTank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${inter.variable} ${sfProDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
