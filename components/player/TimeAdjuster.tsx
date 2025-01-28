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
      <div className='flex items-center gap-1 rounded-[7px] border border-border bg-transparent px-2 h-11 text-sm shadow-sm transition-colors w-full sm:max-w-[13.5rem]'>
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
          className='w-12 h-[34px] border-border  rounded-[7px] bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white hover:bg-black/90'
        >
          <Minus className='w-[18px] h-[18px]' />
        </Button>
        <Button
          size='icon'
          onClick={incrementStart}
          className='w-12 h-[34px] border-border  rounded-[7px] bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white hover:bg-black/90'
        >
          <Plus className='w-[18px] h-[18px]' />
        </Button>
      </div>
      <div className='flex items-center gap-1 rounded-[8px] border border-border bg-transparent px-2 h-11 text-sm shadow-sm transition-colors w-full sm:max-w-[13.5rem]'>
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
          className='w-12 h-[34px] border-border  rounded-[7px] bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white hover:bg-black/90'
        >
          <Minus className='w-[18px] h-[18px]' />
        </Button>
        <Button
          size='icon'
          onClick={incrementEnd}
          className='w-12 h-[34px] border-border  rounded-[7px] bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white hover:bg-black/90'
        >
          <Plus className='w-[18px] h-[18px]' />
        </Button>
      </div>
    </div>
  );
};

export default TimeAdjuster;
