import type React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
export const DownloadIcon: React.FC = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);
  return (
    <TooltipProvider delayDuration={1}>
      <Tooltip open={tooltipVisible}>
        <TooltipTrigger
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='hover:bg-gray-200 dark:hover:bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center'
        >
          <FiDownload className='sm:h-[22px] sm:w-[22px] h-[17px] w-[17px] ' />
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-xs font-medium'>Download</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
