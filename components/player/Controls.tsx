"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReplyAll, Pause, Play, Volume2, VolumeX } from "lucide-react";

type ControlsProps = {
  play: boolean;
  mute: boolean;
  togglePlay: () => void;
  toggleMute: () => void;
  replay: () => void;
};

const Controls: React.FC<ControlsProps> = ({
  play,
  mute,
  togglePlay,
  toggleMute,
  replay,
}) => (
  <div className='flex items-center gap-4'>
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size='icon'
            variant='outline'
            onClick={replay}
            className='hover:bg-[#ddd] dark:hover:bg-gray-600 h-11 w-11 rounded-[7px] bg-[#eee] dark:bg-gray-700 flex items-center justify-center border-none'
          >
            <ReplyAll className='h-[20px] w-[20px]' />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Replay</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size='icon'
            variant='outline'
            onClick={togglePlay}
            className='hover:bg-[#ddd] dark:hover:bg-gray-600 h-11 w-11 rounded-[7px] bg-[#eee] dark:bg-gray-700 flex items-center justify-center border-none'
          >
            {play ? (
              <Pause className='h-[20px] w-[20px]' />
            ) : (
              <Play className='h-[20px] w-[20px]' />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{play ? "Pause" : "Play"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size='icon'
            variant='outline'
            onClick={toggleMute}
            className='hover:bg-[#ddd] dark:hover:bg-gray-600 h-11 w-11 rounded-[7px] bg-[#eee] dark:bg-gray-700 flex items-center justify-center border-none'
          >
            {!mute ? (
              <Volume2 className='h-[20px] w-[20px]' />
            ) : (
              <VolumeX className='h-[20px] w-[20px]' />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{!mute ? "Mute" : "Unmute"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
);

export default Controls;
