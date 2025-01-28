"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircularProgress } from "./DownloadProgress";

export const DownloadIcon: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);

  const simulateDownload = () => {
    setIsDownloading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDownloading(false);
            setProgress(0);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <TooltipProvider delayDuration={1}>
      <Tooltip open={tooltipVisible && !isDownloading}>
        <TooltipTrigger
          onClick={simulateDownload}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='hover:bg-[#ddd] dark:hover:bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center'
        >
          {isDownloading ? (
            <CircularProgress progress={progress} />
          ) : (
            <FiDownload className='sm:h-[22px] sm:w-[22px] h-[17px] w-[17px]' />
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-xs font-medium'>Download</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
