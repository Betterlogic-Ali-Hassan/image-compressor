"use client";

import type React from "react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CopyIcon from "./CopyIcon";
import { DownloadIcon } from "./DownloadIcon";
import { Icon } from "./Icon";

interface ResultQualityProps {
  item: {
    format: string;
    resolution: string;
    quality: string;
    size: string;
  };
}

const ResultQuality: React.FC<ResultQualityProps> = ({ item }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);

  return (
    <div className='flex items-center  gap-2 w-full text-xs mb-2 justify-between  py-2 bg-foreground max-sm:pl-1 px-3  rounded-[0.5rem]'>
      <div className='sm:w-[50%] w-[55%]  relative'>
        <TooltipProvider delayDuration={1}>
          <Tooltip open={tooltipVisible}>
            <TooltipTrigger
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='w-full flex items-center gap-1  py-2.5 px-3.5 sm:pl-5 pl-2 pr-0 cursor-pointer font-medium text-left text-xs sm:text-base rounded-[0.5rem] hover:bg-[#ddd] dark:hover:bg-[#374151]'
            >
              <span className='min-[650px]:w-[30%] w-[33%]'>{item.format}</span>
              <span className='min-[650px]:w-[30%] w-[33%]'>
                {item.resolution}
              </span>
              <span className='min-[650px]:w-[30%] w-[20%]'>
                <div className='inline-flex items-center border sm:py-0.5 sm:px-1 p-[2px] bg-black text-white rounded text-[9px] min-[400px]:text-[10px] sm:text-xs font-medium hover:bg-black/80 transition-colors'>
                  {item.quality}
                </div>
              </span>
              <span className='min-[650px]:w-[30%] w-[33%]'>{item.size}</span>
            </TooltipTrigger>
            <TooltipContent className='w-full'>
              <p className='text-xs font-medium'>
                Web Developer Roadmap (2025)
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className='flex items-center gap-1 sm:gap-2'>
        <DownloadIcon />
        <Icon
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='sm:w-[20px] sm:h-[20px] h-[18px] w-[18px] '
            >
              <path d='M9 18V5l12-2v13'></path>
              <circle cx='6' cy='18' r='3'></circle>
              <circle cx='18' cy='16' r='3'></circle>
            </svg>
          }
          tooltip='MP3'
        />
        <Icon
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='sm:w-[20px] sm:h-[20px] h-[16px] w-[16px] '
            >
              <circle cx='6' cy='6' r='3'></circle>
              <path d='M8.12 8.12 12 12'></path>
              <path d='M20 4 8.12 15.88'></path>
              <circle cx='6' cy='18' r='3'></circle>
              <path d='M14.8 14.8 20 20'></path>
            </svg>
          }
          tooltip='Trim Video'
        />
        <CopyIcon />
        <Icon
          icon={
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
            </svg>
          }
          tooltip='QrCode'
          className='max-sm:hidden'
        />
      </div>
    </div>
  );
};

export default ResultQuality;
