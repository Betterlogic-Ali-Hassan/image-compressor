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
          className='hover:bg-gray-200 dark:hover:bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center'
        >
          <CopyToClipboard text='www.google.com' onCopy={handleCopy}>
            <MdContentCopy size={17} />
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
