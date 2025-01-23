"use client";

import type React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  duration: number;
  currentTime: number;
  sliderValue: [number, number];
  handleProgressBarClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleProgressBarHover: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleProgressBarLeave: () => void;
  hoverTime: number | null;
  hoverPosition: number;
  formatTime: (time: number) => string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  duration,
  currentTime,
  sliderValue,
  handleProgressBarClick,
  handleProgressBarHover,
  handleProgressBarLeave,
  hoverTime,
  hoverPosition,
  formatTime,
}) => {
  const getPercentage = (value: number) => (value / (duration || 1)) * 100;

  return (
    <div className='relative'>
      <div
        className='h-[15px] w-full relative overflow-hidden cursor-pointer bg-black dark:bg-white'
        onClick={handleProgressBarClick}
        onMouseMove={handleProgressBarHover}
        onMouseLeave={handleProgressBarLeave}
      >
        <ProgressSegment
          position='left'
          width={getPercentage(sliderValue[0])}
        />
        <ProgressSegment
          position='right'
          width={getPercentage(duration - sliderValue[1])}
        />
        <ProgressSegment
          className='bg-green-700 z-10'
          width={getPercentage(currentTime)}
        />
      </div>

      {hoverTime !== null && (
        <TimeTooltip time={formatTime(hoverTime)} position={hoverPosition} />
      )}
    </div>
  );
};

interface ProgressSegmentProps {
  width: number;
  position?: "left" | "right";
  className?: string;
}

const ProgressSegment: React.FC<ProgressSegmentProps> = ({
  width,
  position,
  className,
}) => (
  <div
    className={cn(
      "h-full absolute z-20 transition-all duration-300 ease-in-out",
      position === "left" ? "left-0" : position === "right" ? "right-0" : "",
      "bg-[#dadada] dark:bg-[#444]",
      className
    )}
    style={{ width: `${width}%` }}
  />
);

interface TimeTooltipProps {
  time: string;
  position: number;
}

const TimeTooltip: React.FC<TimeTooltipProps> = ({ time, position }) => (
  <div
    className={cn(
      "absolute bottom-[20px] w-fit border-border border bg-background px-3 py-1.5 text-sm rounded-[10px]",
      "text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
    )}
    style={{
      left: `${position}px`,
      transform: "translateX(-50%)",
    }}
  >
    {time}
  </div>
);

export default ProgressBar;
