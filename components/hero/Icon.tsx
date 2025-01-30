import type React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface Props {
  tooltip: string;
  icon: React.ReactNode;
  className?: string;
}
export const Icon = ({ tooltip, icon, className }: Props) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);

  return (
    <>
      <TooltipProvider delayDuration={1}>
        <Tooltip open={tooltipVisible}>
          {tooltip === "Trim Video" ? (
            <Link href='/player'>
              <TooltipTrigger
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={cn(
                  "hover:bg-[#ddd] dark:hover:bg-gray-600 sm:h-10 sm:w-10 h-8 w-8 rounded-[7px] bg-[#eee] dark:bg-gray-700 flex items-center justify-center",
                  className
                )}
              >
                {icon}
              </TooltipTrigger>
            </Link>
          ) : (
            <TooltipTrigger
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "hover:bg-[#ddd] dark:hover:bg-gray-600 sm:h-10 sm:w-10 h-8 w-8 rounded-[7px] bg-[#eee] dark:bg-gray-700 flex items-center justify-center",
                className
              )}
            >
              {icon}
            </TooltipTrigger>
          )}
          <TooltipContent>
            <p className='text-xs font-medium'>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};
