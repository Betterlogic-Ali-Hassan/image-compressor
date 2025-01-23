"use client";

import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import { formatTime } from "@/lib/formatTime";

type MultiSliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> & {
  className?: string;
  max?: number;
};

const THUMB_CLASSES = cn(
  "block h-5 w-5 rounded-full border-2 border-black dark:border-white bg-background",
  "ring-offset-background transition-colors focus-visible:outline-none",
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
);

const useTooltip = (value: number) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <SliderPrimitive.Thumb className={THUMB_CLASSES} />
      </TooltipTrigger>
      <TooltipContent className='rounded-[10px] border border-border bg-background px-3 py-1.5 text-sm text-popover-foreground shadow-md'>
        <p>{formatTime(value)}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const MultiSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  MultiSliderProps
>(({ className, value, max, ...props }, ref) => {
  const safeValue: [number, number] =
    Array.isArray(value) && value.length === 2
      ? [
          Number.isFinite(value[0]) ? value[0] : 0,
          Number.isFinite(value[1]) ? value[1] : max || 100,
        ]
      : [0, max || 100];

  const [startValue, endValue] = safeValue;
  const startThumb = useTooltip(startValue);
  const endThumb = useTooltip(endValue);

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      value={safeValue}
      max={max || 100}
      {...props}
    >
      <SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-foreground'>
        <SliderPrimitive.Range className='absolute h-full bg-black dark:bg-white' />
      </SliderPrimitive.Track>
      {startThumb}
      {endThumb}
    </SliderPrimitive.Root>
  );
});

MultiSlider.displayName = "MultiSlider";
