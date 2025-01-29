"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import Link from "next/link";
import { imageCompressionOption } from "@/constant/imageCompressionOption";
import { ChevronDown } from "lucide-react";
import AddtoChromeBtn from "./AddtoChromeBtn";

const MobileHeader = () => {
  const [showOptions, setShowOptions] = useState(false);
  const handleShowOption = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className='md:hidden block font-semibold'>
      <Sheet>
        <SheetTrigger className='bg-background h-9 w-9  flex items-center justify-center ml-4 border border-border rounded-[6px]'>
          <FiMenu size={19} />
        </SheetTrigger>
        <SheetContent side='left' className='p-0 overflow-y-auto'>
          <SheetHeader>
            <SheetTitle className='p-7 border-b border-border mb-0 '>
              <Logo />
            </SheetTitle>
            <SheetDescription className='p-5 '>
              <ul>
                <li className='mb-[10px] w-full'>
                  <Link
                    href='#'
                    className='text-primary bg-foreground py-[7px] px-[15px] rounded-[5px] w-full block font-semibold text-left'
                  >
                    Home
                  </Link>
                </li>
                <li
                  className='hover:text-primary  py-[7px] px-[15px] mb-[10px] font-semibold rounded-[5px] flex items-center justify-between w-full'
                  onClick={handleShowOption}
                >
                  Compress Image
                  <ChevronDown size={18} />
                </li>
                {showOptions &&
                  imageCompressionOption.map((item, i) => (
                    <li className='mb-[10px]' key={i}>
                      <Link
                        href='#'
                        className='hover:text-primary text-left py-[7px] px-[15px] rounded-[5px] block font-semibold'
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                <li className='mb-[10px]'>
                  <Link
                    href='#'
                    className='hover:text-primary  py-[7px] px-[15px] text-left rounded-[5px] block font-semibold'
                  >
                    Contact Us
                  </Link>
                </li>
                <li className='mb-[10px]'>
                  <Link
                    href='#'
                    className='hover:text-primary text-left py-[7px] px-[15px] rounded-[5px] block font-semibold'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className='mb-[10px]'>
                  <Link
                    href='#'
                    className='hover:text-primary text-left py-[7px] px-[15px] rounded-[5px] block font-semibold'
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </SheetDescription>
            <AddtoChromeBtn className='mx-4 mt-0' mobile />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileHeader;
