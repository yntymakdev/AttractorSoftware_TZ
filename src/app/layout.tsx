import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.scss";
import { SessionProvider } from "next-auth/react"; // Adjust the import path if necessary

import { SITE_DESCRIPTION, SITE_NAME } from "@/constant/seo-constant";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
