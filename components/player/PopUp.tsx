import type React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface PopProps {
  sliderValue: [number, number];
  formatTime: (duration: number) => string;
}

const DownloadBtn: React.FC<PopProps> = ({ sliderValue, formatTime }) => {
  const finalDuration = sliderValue[1] - sliderValue[0];
  const formattedDuration = formatTime(finalDuration);
  const [isLoading, setIsLoading] = useState(false);
  const handleDownload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Button
      className='relative rounded-[10px] bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 h-11 dark:bg-white/90'
      onClick={handleDownload}
    >
      {isLoading ? (
        <>
          <Loader2 size={20} className='animate-spin' />
          Downloading
        </>
      ) : (
        <>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
            fill='currentColor'
            className='sm:w-[22px] sm:h-[22px] h-[19px] w-[19px] '
          >
            <path d='M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z' />
          </svg>
          Download
        </>
      )}
      <Badge
        variant='secondary'
        className='absolute left-[50%] text-xs mt-20 translate-x-[-50%] pointer-events-none dark:bg-[#444] dark:text-white'
      >
        {formattedDuration}
      </Badge>
    </Button>
  );
};

export default DownloadBtn;
