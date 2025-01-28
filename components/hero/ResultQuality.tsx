"use client";

import type React from "react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { QRCodeIcon } from "./QRCodeIcon";
import CopyIcon from "./CopyIcon";

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
    <div className='flex items-center min-[650px]:w-[62%] w-full text-xs mt-2 justify-between'>
      <div className='w-[70%] relative'>
        <TooltipProvider delayDuration={1}>
          <Tooltip open={tooltipVisible}>
            <TooltipTrigger
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='w-full flex items-center pl-0 py-2.5 px-3.5 hover:bg-black/10 cursor-pointer font-medium'
            >
              <span className='min-[650px]:w-[30%] w-[33%]'>{item.format}</span>
              <span className='min-[650px]:w-[30%] w-[33%]'>
                {item.resolution}
              </span>
              <span className='min-[650px]:w-[30%] w-[33%]'>
                <div className='inline-flex items-center border py-0.5 px-1 bg-black text-white rounded text-[10px] font-medium hover:bg-black/80 transition-colors'>
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

      <div className='flex items-center'>
        <CopyIcon />
        <QRCodeIcon />
      </div>
    </div>
  );
};

export default ResultQuality;
