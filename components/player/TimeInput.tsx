import type React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface TimeInputProps {
  value: number;
  formatTime: (time: number) => string;
  onDecrement: () => void;
  onIncrement: () => void;
}

const TimeInput: React.FC<TimeInputProps> = ({
  value,
  formatTime,
  onDecrement,
  onIncrement,
}) => (
  <div className='flex items-center gap-1 rounded-[10px] border border-border bg-transparent pl-2 pr-1 h-10 text-sm shadow-sm transition-colors w-full sm:max-w-[13rem]'>
    <input
      type='text'
      placeholder='00:00:00'
      className='w-full bg-transparent outline-none'
      value={formatTime(value)}
      readOnly
    />
    <Button
      size='icon'
      onClick={onDecrement}
      className='w-12 h-8 border-border hover:bg-foreground rounded-[10px] bg-black dark:bg-white text-background'
    >
      <Minus className='w-4 h-4' />
    </Button>
    <Button
      size='icon'
      onClick={onIncrement}
      className='w-12 h-8 border-border hover:bg-foreground rounded-[10px] bg-black dark:bg-white text-background'
    >
      <Plus className='w-4 h-4' />
    </Button>
  </div>
);

export default TimeInput;
