import React, { useState } from "react";
import { TbScan } from "react-icons/tb";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { Loader2 } from "lucide-react";

const QrCodeIcon = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [popoverOpen, setPopOverOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className='max-sm:hidden'>
      <Popover open={popoverOpen} onOpenChange={setPopOverOpen}>
        <PopoverTrigger onClick={handleClick}>
          <TooltipProvider delayDuration={1}>
            <Tooltip open={tooltipVisible}>
              <TooltipTrigger
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='hover:bg-[#ddd] dark:hover:bg-gray-600 sm:h-10 sm:w-10 h-8 w-8 rounded-[7px] max-sm:hidden bg-[#eee] dark:bg-gray-700 flex items-center justify-center'
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  version='1.1'
                  viewBox='0 0 16 16'
                  height='18'
                  width='18'
                  className='sm:w-[18px] sm:h-[18px] h-[16px] w-[16px] '
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M5 1h-4v4h4v-4zM6 0v0 6h-6v-6h6zM2 2h2v2h-2zM15 1h-4v4h4v-4zM16 0v0 6h-6v-6h6zM12 2h2v2h-2zM5 11h-4v4h4v-4zM6 10v0 6h-6v-6h6zM2 12h2v2h-2zM7 0h1v1h-1zM8 1h1v1h-1zM7 2h1v1h-1zM8 3h1v1h-1zM7 4h1v1h-1zM8 5h1v1h-1zM7 6h1v1h-1zM7 8h1v1h-1zM8 9h1v1h-1zM7 10h1v1h-1zM8 11h1v1h-1zM7 12h1v1h-1zM8 13h1v1h-1zM7 14h1v1h-1zM8 15h1v1h-1zM15 8h1v1h-1zM1 8h1v1h-1zM2 7h1v1h-1zM0 7h1v1h-1zM4 7h1v1h-1zM5 8h1v1h-1zM6 7h1v1h-1zM9 8h1v1h-1zM10 7h1v1h-1zM11 8h1v1h-1zM12 7h1v1h-1zM13 8h1v1h-1zM14 7h1v1h-1zM15 10h1v1h-1zM9 10h1v1h-1zM10 9h1v1h-1zM11 10h1v1h-1zM13 10h1v1h-1zM14 9h1v1h-1zM15 12h1v1h-1zM9 12h1v1h-1zM10 11h1v1h-1zM12 11h1v1h-1zM13 12h1v1h-1zM14 11h1v1h-1zM15 14h1v1h-1zM10 13h1v1h-1zM11 14h1v1h-1zM12 13h1v1h-1zM13 14h1v1h-1zM10 15h1v1h-1zM12 15h1v1h-1zM14 15h1v1h-1z'></path>
                </svg>{" "}
              </TooltipTrigger>
              <TooltipContent>
                <p className='text-xs font-medium'>QrCode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </PopoverTrigger>
        <PopoverContent className='bg-background border-border flex items-center justify-center w-[180px] flex-col min-h-[232px]'>
          {loading ? (
            <Loader2 size={32} className='animate-spin' />
          ) : (
            <>
              {" "}
              <Image src='/qrcode.gif' alt='QrCode' height={180} width={180} />
              <p className='flex items-start gap-2 text-xs mt-1'>
                <TbScan
                  size={20}
                  className='flex-shrink-0 mt-0.5 text-[blue]'
                />
                Scan this QR code on your phone to get the download
              </p>
            </>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default QrCodeIcon;
