import "@/app/css-scss/globals.css";
import { inter } from "@/app/ui/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Emoly.pl',
    default: 'Default Title',
  },
  description: "Generated by create next app",
  //metadataBase: new URL('https://'),
  authors: [{
    name: "abs serwis",
    url: "https://",
  }],
  keywords: [],
  robots: {index: true, follow: false},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<SpeedInsights/></body>
    </html>
  );
}
