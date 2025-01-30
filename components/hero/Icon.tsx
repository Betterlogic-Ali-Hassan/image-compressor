import type React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
interface Props {
  tooltip: string;
  icon: React.ReactNode;
  className?: string;
}

export const Icon = ({ tooltip, icon, className }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (tooltip === "Trim Video") {
      setLoading(true);
      router.push("/player");
    }
  };

  return (
    <TooltipProvider delayDuration={1}>
      <Tooltip>
        <TooltipTrigger
          onClick={handleClick}
          className={cn(
            "hover:bg-[#ddd] dark:hover:bg-gray-600 sm:h-10 sm:w-10 h-8 w-8 rounded-[7px] bg-[#eee] dark:bg-gray-700 flex items-center justify-center",
            className
          )}
        >
          {loading ? (
            <div className='h-5 w-5 border-2 border-t-transparent border-text rounded-full animate-spin'></div>
          ) : (
            icon
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-xs font-medium'>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
