"use client";
import { Toaster } from "../ui/toaster";
import MainNavbar from "./main-navbar";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="max-w-[1920px] m-auto">
      {!pathname.includes("/cms") && (
        <div className="sticky top-0 bg-white" style={{ zIndex: "99 !important" }}>
          <MainNavbar />
        </div>
      )}
      {children}
      <Toaster />
    </div>
  );
}
