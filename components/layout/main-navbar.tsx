"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { _trackEvent } from "@/lib/analytics";

export default function MainNavbar() {
  const [currentFullPath, setCurrentFullPath] = useState("");
  const { userDetails, signOut } = useAuth();

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Features", link: "/#features" },
    { id: 2, text: "FAQs", link: "/#faq" },
    { id: 3, text: "Pricing", link: "/pricing" },
    { id: 4, text: "Contact", link: "#contact-us" },
  ];

  return (
    <div
      className="flex justify-between items-center h-24 max-w-[1440px] max-h-[65px] md:max-h-[80px] mx-auto px-4 relative"
      style={{ zIndex: "99 !important" }}
    >
      {/* Logo */}
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src="/images/logo.png" width={120} height={100} alt="GHGPRO" />
        </Link>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex ml-4">
          {navItems.map((item, index) => (
            <Link
              href={item?.link}
              key={index}
              onClick={() => {
                setCurrentFullPath(item?.link);
                _trackEvent(`${item?.text} clicked`, { source: "navbar" });
              }}
            >
              <li
                key={item.id}
                className={`py-2 px-3 rounded-xl m-2 cursor-pointer duration-300 ${currentFullPath === item?.link ? "text-primary" : "text-gray"}`}
              >
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* {userDetails?.user?.role !== "authenticated" ? (
        <ul className="hidden md:flex items-center list-none">
          <Link
            href="/sign-in"
            onClick={() => _trackEvent("sign in clicked", { source: "navbar" })}
          >
            <li className="text-gray py-2 px-3 rounded-xl m-2 cursor-pointer duration-300 ">
              Log in
            </li>
          </Link>
          <Link
            href="/sign-up"
            onClick={() => _trackEvent("sign up clicked", { source: "navbar" })}
          >
            <li>
              <Button className="text-[#ffffff]">Sign up</Button>
            </li>
          </Link>
        </ul>
      ) : (
        <Button
          variant="default"
          color="white"
          className="md:hidden"
          onClick={() => {
            signOut();
            _trackEvent("sign out clicked", { source: "navbar" });
          }}
        >
          <div className="text-white">Logout</div>
          <LogOut className="ml-2 h-4 w-4 text-white" />
        </Button>
      )} */}
      <div className="flex flex-row items-center md:hidden list-none">
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          <Icon icon="ion:menu" style={{ fontSize: "24px" }} />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "list-none pt-4 fixed md:hidden right-0 top-0 sm:w-[40%] w-[50%] h-full border-r border-r-[#f2f2f2f2] bg-white ease-in-out duration-500"
            : "ease-in-out sm:w-[40%] w-[50%] duration-500 fixed top-0 bottom-0 right-[-100%] max-w-64	"
        }
      >
        {/* Mobile Logo */}
        <div className="py-2 px-2 flex items-center gap-x-4 justify-end">
          <Icon icon="akar-icons:cross" style={{ fontSize: "20px" }} onClick={handleNav} />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item, index) => (
          <Link
            href={item?.link}
            key={index}
            onClick={() => {
              handleNav();
              _trackEvent(`${item?.text} clicked`, { source: "navbar-mobile-view" });
            }}
          >
            <li
              key={item.id}
              className={`px-4 py-2 hover:bg-primary hover:text-black cursor-pointer text-sm ${currentFullPath === item?.link ? "text-primary" : "text-gray"}`}
            >
              {item.text}
            </li>
          </Link>
        ))}
        {/* {userDetails?.user?.role !== "authenticated" ? (
          <>
            <Link
              href="/sign-in"
              onClick={() => {
                handleNav();
                _trackEvent("sign in clicked", { source: "navbar-mobile-view" });
              }}
            >
              <li className="text-gray px-4 py-2 mb-1 hover:bg-primary hover:text-black cursor-pointer text-sm">
                Log in
              </li>
            </Link>
            <Link
              href="/sign-up"
              onClick={() => {
                handleNav();
                _trackEvent("sign up clicked", { source: "navbar-mobile-view" });
              }}
            >
              <li className="text-gray px-4 py-2 mb-1 hover:bg-primary hover:text-black cursor-pointer text-sm">
                Sign up
              </li>
            </Link>
          </>
        ) : (
          <li className="text-gray px-4 py-2 mb-1 hover:bg-primary hover:text-black cursor-pointer text-sm">
            Logout
          </li>
        )} */}
      </ul>
    </div>
  );
}
