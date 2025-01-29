"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { X } from "lucide-react";
const AddtoChromeBtn = ({
  className,
  mobile,
}: {
  className?: string;
  mobile?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className={cn("btn ml-6  ", className)}>
          <span>
            <Image src='/chrome.webp' alt='Chrome' height={26} width={26} />
            Add to Chrome
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "px-4 pt-3 pb-[18px] max-[400px]:w-[370px] max-[400px]:mx-4 w-[400px]  bg-background border-border border-2 rounded-[6px] mt-2",
          mobile && "w-[260px]"
        )}
      >
        <div className='   flex items-start gap-4 mt-4 relative '>
          <div>
            <Image src='/foxi.webp' alt='img' height={62} width={62} />
          </div>
          <div>
            <h3 className='text-[15px] leading-[1.4] font-normal mt-0'>
              <strong>Foxified</strong> The extension is required for YouTube
              Mp3 Converter to work properly.
            </h3>
            <button className='flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full mt-3'>
              <Image src='/chrom.webp' alt='img' height={20} width={20} />
              Let&apos;s Go
            </button>
          </div>
          <span
            className='absolute -top-5 -right-2 cursor-pointer opacity-50 hover:opacity-100'
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AddtoChromeBtn;
