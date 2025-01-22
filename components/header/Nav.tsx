"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { imageCompressionOption } from "@/constant/imageCompressionOption";
import MobileHeader from "./MobileHeader";

const Nav = () => {
  const imageCompressionData = imageCompressionOption;
  const dataPages = ["Contact Us", "Privacy Policy", "Terms of Service"];
  const [openDropdowns, setOpenDropdowns] = useState([false, false]);
  const [timeoutIds, setTimeoutIds] = useState<number[]>([]);

  const handleMouseEnter = (index: number) => {
    // Clear any existing timeout for this index
    clearTimeout(timeoutIds[index]);

    setOpenDropdowns((prev) =>
      prev.map((_, i) => (i === index ? true : false))
    );
  };

  const handleMouseLeave = (index: number) => {
    // Set a timeout to close the dropdown after 2 seconds
    const id = window.setTimeout(() => {
      setOpenDropdowns((prev) =>
        prev.map((open, i) => (i === index ? false : open))
      );
    }, 400);

    // Store the timeout ID to clear if necessary
    setTimeoutIds((prev) => {
      const updated = [...prev];
      updated[index] = id;
      return updated;
    });
  };

  return (
    <nav className='flex items-center'>
      <ul className='items-center md:flex hidden'>
        <li className='ml-2'>
          <Link
            href='/'
            className='p-2 hover:text-primary transition-colors duration-200 text-sm font-semibold text-primary'
          >
            Home
          </Link>
        </li>
        {["Compress Image", "More"].map((item, i) => (
          <li
            className='ml-2'
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <DropdownMenu open={openDropdowns[i]} modal={false}>
              <DropdownMenuTrigger className='flex items-center !border-none cursor-pointer !shadow-none p-2 hover:text-primary transition-colors duration-200 text-sm font-semibold outline-none !ring-0'>
                {item}
              </DropdownMenuTrigger>
              <DropdownMenuContent className='mr-2 border-border'>
                {(i === 0 ? imageCompressionData : dataPages).map((item, j) => (
                  <DropdownMenuItem
                    key={j}
                    className='hover:text-primary font-semibold cursor-pointer'
                  >
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        ))}
      </ul>
      <ThemeToggle />
      <MobileHeader />
    </nav>
  );
};

export default Nav;
