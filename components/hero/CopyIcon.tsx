import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CopyToClipboard } from "react-copy-to-clipboard";
const CopyIcon = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };
  return (
    <TooltipProvider delayDuration={1}>
      <Tooltip open={tooltipVisible}>
        <TooltipTrigger
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='hover:bg-[#ddd] dark:hover:bg-gray-600 sm:h-10 sm:w-10 h-8 w-8 rounded-[7px] bg-[#eee] dark:bg-gray-700 flex items-center justify-center'
        >
          <CopyToClipboard text='www.google.com' onCopy={handleCopy}>
            <MdContentCopy className='sm:h-5 sm:w-5 h-[17px] w-[17px] ' />
          </CopyToClipboard>
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-xs font-medium'>
            {isCopied ? "Copied" : "Copy URL"}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyIcon;
