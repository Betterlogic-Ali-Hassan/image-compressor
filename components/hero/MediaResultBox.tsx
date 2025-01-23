import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ResultQualityRows from "./ResultQualityRows";
import { cn } from "@/lib/utils";

const MediaResultBox = () => {
  const [qualityRowsShow, setQualityRowsShow] = useState(false);
  const handleQualityRows = () => {
    setQualityRowsShow(true);
  };
  return (
    <div className='mb-5 mt-6 border border-border rounded-[6px]   bg-foreground overflow-hidden flex'>
      <div>
        <Image
          src='/test.jpg'
          alt='img'
          height={153}
          width={272}
          className='!h-full max-h-[153px]'
        />
        <span></span>
      </div>
      <div
        className={cn(
          "py-[18px] pb-1 px-[26px] min-h-[115px] max-w-[375px] w-full ",
          qualityRowsShow && "pb-[18px]"
        )}
      >
        <h3 className='my-0 max-w-[380px] truncate font-normal text-[17px]'>
          Web Developer Roadmap (2025) - Everything is Changing
        </h3>
        <span className='text-[#a5a5a5]'>21:48</span>
        <div className='flex mt-8'>
          <Button
            className='bg-[#00a129] text-white px-[10px] text-base border-[#00a129] leading-[34px] max-h-[38px] h-full'
            onClick={handleQualityRows}
          >
            Download
          </Button>
          <Select>
            <SelectTrigger className='w-[120px] border-l-0 rounded-none max-h-[38px] h-full border-[#00a129] border-2 text-[#00a129] bg-transparent text-[17px] font-normal'>
              <SelectValue placeholder='MP4 360' />
            </SelectTrigger>
            <SelectContent className='border-[#00a129] border-2 !p-0'>
              <SelectItem
                value='light'
                className='flex items-center justify-between w-full px-3 min-w-[180px] focus:!bg-[#00a129] focus:text-white h-[32px] text-[#00a129] text-[17px] hover:!bg-[#00a129] hover:text-white'
              >
                <span>MP4 </span> 240
              </SelectItem>
              <SelectItem
                value='lights'
                className='flex items-center justify-between w-full px-3 min-w-[180px] h-[32px] focus:!bg-[#00a129] focus:text-white text-[#00a129] text-[17px] hover:!bg-[#00a129] hover:text-white '
              >
                MP4 360
              </SelectItem>
              <SelectItem
                value='dark'
                className='flex items-center justify-between w-full px-3 min-w-[180px] h-[32px] text-[#00a129] focus:!bg-[#00a129] focus:text-white text-[17px] hover:!bg-[#00a129] hover:text-white'
              >
                MP4 720
              </SelectItem>
              <SelectItem
                value='darks'
                className='flex items-center justify-between w-full px-3 min-w-[180px] h-[32px] text-[#00a129] focus:!bg-[#00a129] focus:text-white text-[17px] hover:!bg-[#00a129] hover:text-white'
              >
                MP4 1040
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div
          className={cn(
            "transition-all duration-1000 ease-in-out overflow-hidden",
            qualityRowsShow ? "max-h-[550px]" : "max-h-0"
          )}
        >
          <ResultQualityRows />
        </div>
      </div>
    </div>
  );
};

export default MediaResultBox;
