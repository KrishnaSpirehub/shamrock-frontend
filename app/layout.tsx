import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/main-layout";
import { CSPostHogProvider } from "./providers";
import { Toaster } from "sonner";
import { AuthProvider } from "@/context/AuthContext";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Shamrock HSE",
  description:
    "Our Vision is to be the preferred Engineering Consultancy for Risk Management, Process Safety and Environmental Engineering Services for the Energy Sector.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={ubuntu.className}>
        <CSPostHogProvider>
          <AuthProvider>
            <MainLayout>{children}</MainLayout>
            <Toaster position="top-right" richColors={false} />
          </AuthProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
