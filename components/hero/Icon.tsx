import type React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface Props {
  tooltip: string;
  icon: React.ReactNode;
}
export const Icon = ({ tooltip, icon }: Props) => {
  const router = useRouter();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);
  const handleClick = () => {
    if (tooltip === "Trim Video") router.push("/player");
  };
  return (
    <TooltipProvider delayDuration={1}>
      <Tooltip open={tooltipVisible}>
        <TooltipTrigger
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='hover:bg-[#ddd] dark:hover:bg-gray-600 h-10 w-10 rounded-[7px] bg-[#eee] dark:bg-gray-700 flex items-center justify-center'
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
