import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import RootProviders from "@/providers";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convex",
  description: "Manage your agency with Convex. An All-in-one solution for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
