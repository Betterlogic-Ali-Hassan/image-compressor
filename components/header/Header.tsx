"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";
import MobileHeader from "./MobileHeader";
import AddtoChromeBtn from "./AddtoChromeBtn";
import Setting from "./Setting";
import StickyHeader from "./StickyHeader";
import { cn } from "@/lib/utils";

const Header = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollPosition / totalHeight) * 100;

      setShowSticky(scrollPercent > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out -translate-y-full opacity-0 bg-white dark:bg-[#000]  border-b-2 flex items-center justify-between px-4 sm:px-10 shadow-none border-border   h-[88px]  ",
          showSticky && "translate-y-0 opacity-100"
        )}
      >
        <StickyHeader />
      </header>

      <header className='bg-white dark:bg-[#000] border-b-2 flex items-center justify-between px-4 sm:px-10 shadow-none border-border z-40 h-[88px] w-full'>
        <div className='flex items-center gap-6'>
          <Logo />
          <Nav />
        </div>
        <div className='flex items-center h-full'>
          <Setting />
          <ThemeToggle />
          <MobileHeader />
          <AddtoChromeBtn className='max-md:hidden' />
        </div>
      </header>
    </>
  );
};

export default Header;
