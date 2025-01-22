import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ImageSizeSelector = () => {
  return (
    <div className='flex items-center gap-[10px] w-full'>
      <input
        type='number'
        name='sizeSelector'
        id='sizeSelect'
        placeholder='Target Size'
        className='h-[40px] flex-1 rounded-[6px] px-[10px] appearance-none text-sm bg-background border border-border transition duration-300 outline-none focus:border-primary placeholder:text-[#888]'
      />
      <Select>
        <SelectTrigger className='w-[70px] h-[40px]'>
          <SelectValue placeholder='KB' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='KB'>KB</SelectItem>
          <SelectItem value='MB'>MB</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ImageSizeSelector;
