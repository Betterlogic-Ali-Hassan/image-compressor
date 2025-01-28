/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import TimeAdjuster from "./TimeAdjuster";
import { MultiSlider } from "@/components/ui/slider";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import PopUp from "./PopUp";
import VideoPlayer from "./VideoPlayer";
import Card from "../hero/Card";

const Player: React.FC = () => {
  const [play, setPlay] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(false);
  const videoRef = useRef<{ seekTo: (time: number) => void } | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 0]);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState<number>(0);
  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time / 60) % 60);
    const seconds = Math.floor(time % 60);
    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    } else {
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    }
  };

  useEffect(() => {
    if (play && currentTime >= sliderValue[1]) {
      setPlay(false);
      if (play === true) {
        if (videoRef.current) {
          videoRef.current.seekTo(sliderValue[0]);
        }
      }
    }
  }, [currentTime, play, sliderValue]);

  const handleDuration = (duration: number): void => {
    setDuration(duration);
    setSliderValue([0, duration]);
  };

  const handleProgress = (progress: { playedSeconds: number }): void => {
    setCurrentTime(progress.playedSeconds);
  };

  const handleSliderChange = (value: [number, number]): void => {
    if (value[0] !== sliderValue[0]) {
      setSliderValue(value);
      if (videoRef.current) {
        videoRef.current.seekTo(value[0]);
        setPlay(true);
      }
    } else {
      setSliderValue(value);
    }
  };

  const togglePlay = (): void => {
    setPlay((prevPlay) => !prevPlay);
  };

  const toggleMute = (): void => {
    setMute((prevMute) => !prevMute);
  };

  const replay = (): void => {
    if (videoRef.current) {
      videoRef.current.seekTo(sliderValue[0]);
    }
  };

  const handleProgressBarClick = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    const progressBar = event.currentTarget;
    const clickPosition = event.nativeEvent.offsetX;
    const progressBarWidth = progressBar.offsetWidth;
    const newCurrentTime = (clickPosition / progressBarWidth) * duration;

    if (newCurrentTime >= sliderValue[0] && newCurrentTime <= sliderValue[1]) {
      setCurrentTime(newCurrentTime);
      if (videoRef.current) {
        videoRef.current.seekTo(newCurrentTime);
      }
    }
  };

  const handleProgressBarHover = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    const progressBar = event.currentTarget;
    const hoverPosition = event.nativeEvent.offsetX;
    const progressBarWidth = progressBar.offsetWidth;
    const newHoverTime = (hoverPosition / progressBarWidth) * duration;
    setHoverTime(newHoverTime);
    setHoverPosition(hoverPosition);
  };

  const handleProgressBarLeave = (): void => {
    setHoverTime(null);
    setHoverPosition(0);
  };

  return (
    <div className='mt-[140px]'>
      <main className='container'>
        <Card className='p-0'>
          <div className='px-4 sm:px-10 pt-10 flex   mb-4 flex-col gap-1'>
            <h1 className=' text-2xl text-left md:text-4xl font-bold tracking-tight'>
              YouTube Video Downloader
            </h1>
            <p className='text-lg text-muted-foreground text-left'>
              A carousel with motion and swipe built using Embla.
            </p>
          </div>

          <div className='px-4 sm:px-10 pb-10'>
            <VideoPlayer
              url='https://www.youtube.com/embed/RD4JPW6mKaU'
              playing={play}
              muted={mute}
              onDuration={handleDuration}
              onProgress={handleProgress}
              videoRef={videoRef}
            />
            <ProgressBar
              duration={duration}
              currentTime={currentTime}
              sliderValue={sliderValue}
              handleProgressBarClick={handleProgressBarClick}
              handleProgressBarHover={handleProgressBarHover}
              handleProgressBarLeave={handleProgressBarLeave}
              hoverTime={hoverTime}
              hoverPosition={hoverPosition}
              formatTime={formatTime}
            />
          </div>
          <div className='flex items-center flex-col gap-4 text-center px-7 sm:px-10'>
            <MultiSlider
              defaultValue={sliderValue}
              min={0}
              max={duration}
              value={sliderValue}
              onValueChange={handleSliderChange}
            />
            <Controls
              play={play}
              mute={mute}
              togglePlay={togglePlay}
              toggleMute={toggleMute}
              replay={replay}
            />
          </div>
          <div className='px-4 sm:px-10 pt-8 pb-20 flex gap-5 sm:gap-4 items-center justify-center sm:justify-between flex-wrap'>
            <TimeAdjuster
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              duration={duration}
              formatTime={formatTime}
              videoRef={videoRef}
            />
            <div className='flex items-center gap-4'>
              <PopUp sliderValue={sliderValue} formatTime={formatTime} />
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size='icon'
                      variant='outline'
                      className='hover:bg-[#ddd] dark:hover:bg-gray-600 h-10 w-10 rounded-[7px] bg-[#eee] dark:bg-gray-700 flex items-center justify-center border-none'
                    >
                      <Music className='h-[18px] w-[18px]' />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download mp3</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Player;
