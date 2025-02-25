"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function CircularProgress({
  progress,
  size = 40,
  strokeWidth = 4,
  className,
}: CircularProgressProps) {
  const [dynamicSize, setDynamicSize] = useState(size);

  useEffect(() => {
    const updateSize = () => {
      setDynamicSize(window.innerWidth < 640 ? 34 : size);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const radius = (dynamicSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className='relative inline-flex items-center justify-center'>
      <svg
        className='transform -rotate-90'
        width={dynamicSize}
        height={dynamicSize}
      >
        {/* Background circle */}
        <circle
          className='text-[#ddd] dark:text-gray-700'
          strokeWidth={strokeWidth}
          stroke='currentColor'
          fill='none'
          r={radius}
          cx={dynamicSize / 2}
          cy={dynamicSize / 2}
        />
        {/* Progress circle */}
        <circle
          className={cn(
            "text-black dark:text-white transition-all duration-300 ease-in-out",
            className
          )}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap='round'
          stroke='currentColor'
          fill='none'
          r={radius}
          cx={dynamicSize / 2}
          cy={dynamicSize / 2}
        />
      </svg>
      <span
        className={cn(
          "absolute text-[10.5px] sm:text-xs font-medium flex items-center justify-center",
          size === 32 && " sm:text-[9.5px]"
        )}
      >
        {Math.round(progress)}%
      </span>
    </div>
  );
}
