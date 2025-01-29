"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircularProgress } from "./DownloadProgress";
import { cn } from "@/lib/utils";

export const DownloadIcon: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);

  const simulateDownload = () => {
    if (isDownloading || isLoading) return;
    setIsDownloading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsDownloading(false);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setProgress(0);
        }, 2000);
      }, 200);
    }
  }, [progress]);

  return (
    <TooltipProvider delayDuration={1}>
      <Tooltip open={tooltipVisible && !isDownloading && !isLoading}>
        <TooltipTrigger
          onClick={simulateDownload}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "hover:bg-[#ddd] dark:hover:bg-gray-600 sm:h-10 sm:w-10 h-8 w-8 rounded-[7px] bg-[#eee] dark:bg-gray-700 flex items-center justify-center",
            isDownloading && "rounded-full"
          )}
        >
          {isDownloading ? (
            <CircularProgress progress={progress} />
          ) : isLoading ? (
            <Loader2 className='sm:w-[22px] sm:h-[22px] h-[19px] w-[19px] animate-spin' />
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 -960 960 960'
              width='24px'
              fill='currentColor'
              className='sm:w-[22px] sm:h-[22px] h-[19px] w-[19px]'
            >
              <path d='M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z' />
            </svg>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-xs font-medium'>Download</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
