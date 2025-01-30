import type React from "react";
import { LucideLoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { CircularProgress } from "../hero/DownloadProgress";
import { cn } from "@/lib/utils";

interface PopProps {
  sliderValue: [number, number];
  formatTime: (duration: number) => string;
}

const DownloadBtn: React.FC<PopProps> = ({ sliderValue, formatTime }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const simulateDownload = () => {
    if (isDownloading || isLoading) return;
    setIsDownloading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsDownloading(false);
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setProgress(100);
        }, 2000);
      }, 200);
    }
  }, [progress]);
  const finalDuration = sliderValue[1] - sliderValue[0];
  const formattedDuration = formatTime(finalDuration);

  return (
    <Button
      className={cn(
        "relative rounded-[10px] bg-black  text-white  hover:bg-black/90 h-11 dark:bg-gray-700 dark:hover:bg-gray-600",
        isDownloading && "py-4 px-2 "
      )}
      onClick={simulateDownload}
    >
      {isDownloading ? (
        <CircularProgress progress={progress} className='text-green-700' />
      ) : isLoading ? (
        <>
          <LucideLoaderCircle className='sm:w-[22px] sm:h-[22px] h-[19px] w-[19px] animate-spin' />
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
