import type React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
interface Props {
  tooltip: string;
  icon: React.ReactNode;
}
export const Icon = ({ tooltip, icon }: Props) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);
  return (
    <TooltipProvider delayDuration={1}>
      <Tooltip open={tooltipVisible}>
        <TooltipTrigger
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='hover:bg-[#ddd] dark:hover:bg-gray-700 h-8 w-8 rounded-full flex items-center justify-center'
        >
          {icon}
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-xs font-medium'>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
