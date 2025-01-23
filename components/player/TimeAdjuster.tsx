"use client";

import React, { RefObject } from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

interface TimeAdjusterProps {
  sliderValue: [number, number];
  setSliderValue: React.Dispatch<React.SetStateAction<[number, number]>>;
  duration: number;
  formatTime: (time: number) => string;
  videoRef: RefObject<{ seekTo: (time: number) => void } | null>;
}

const TimeAdjuster: React.FC<TimeAdjusterProps> = ({
  sliderValue,
  setSliderValue,
  duration,
  formatTime,
  videoRef,
}) => {
  const incrementStart = () => {
    setSliderValue(([start, end]) => [Math.min(start + 1, end), end]);
    if (videoRef.current) {
      videoRef.current.seekTo(sliderValue[0] - 1);
    }
  };

  const decrementStart = () => {
    setSliderValue(([start, end]) => [Math.max(start - 1, 0), end]);
    if (videoRef.current) {
      videoRef.current.seekTo(sliderValue[0] - 1);
    }
  };

  const incrementEnd = () => {
    setSliderValue(([start, end]) => [start, Math.min(end + 1, duration)]);
  };

  const decrementEnd = () => {
    setSliderValue(([start, end]) => [start, Math.max(end - 1, start)]);
  };

  return (
    <div className='flex items-center gap-4 max-[400px]:flex-col'>
      <div className='flex items-center gap-1 rounded-[10px] border border-border bg-transparent pl-2 pr-1 h-10 text-sm shadow-sm transition-colors w-full sm:max-w-[13rem]'>
        <input
          type='text'
          placeholder='00:00:00'
          className='w-full bg-transparent outline-none'
          value={formatTime(sliderValue[0])}
          readOnly
        />
        <Button
          size='icon'
          onClick={decrementStart}
          className='w-12 h-8 border-border hover:bg-black/90 dark:bg-white/90 rounded-[10px] bg-black dark:bg-white text-background'
        >
          <Minus className='w-4 h-4' />
        </Button>
        <Button
          size='icon'
          onClick={incrementStart}
          className='w-12 h-8 border-border  rounded-[10px] bg-black dark:bg-white text-background hover:bg-black/90 dark:bg-white/90'
        >
          <Plus className='w-4 h-4' />
        </Button>
      </div>
      <div className='flex items-center gap-1 rounded-[10px] border border-border bg-transparent pl-2 pr-1 h-10 text-sm shadow-sm transition-colors w-full sm:max-w-[13rem]'>
        <input
          type='text'
          placeholder='00:00:00'
          className='w-full bg-transparent outline-none'
          value={formatTime(sliderValue[1])}
          readOnly
        />
        <Button
          size='icon'
          onClick={decrementEnd}
          className='w-12 h-8 border-border hover:bg-black/90 dark:bg-white/90 rounded-[10px] bg-black dark:bg-white text-background'
        >
          <Minus className='w-4 h-4' />
        </Button>
        <Button
          size='icon'
          onClick={incrementEnd}
          className='w-12 h-8 border-border hover:bg-black/90 dark:bg-white/90 rounded-[10px] bg-black dark:bg-white text-background'
        >
          <Plus className='w-4 h-4' />
        </Button>
      </div>
    </div>
  );
};

export default TimeAdjuster;
