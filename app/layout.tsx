import type { Metadata } from "next";
import { Sulphur_Point } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const sulphur = Sulphur_Point({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "McDan Shipping Ltd",
  description: "Your trusted Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sulphur.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
