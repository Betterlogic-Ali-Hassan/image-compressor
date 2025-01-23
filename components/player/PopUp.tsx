import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { VideoIcon, X } from "lucide-react";
import browser from "browser-detect";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Browser {
  img: string;
  label: string;
  browser: string;
}

interface PopProps {
  sliderValue: [number, number];
  formatTime: (duration: number) => string;
}

const BROWSER_BUTTONS: Browser[] = [
  { img: "/chrome.webp", label: "Chrome", browser: "chrome" },
  { img: "/firefox.webp", label: "Firefox", browser: "firefox" },
  { img: "/edge.webp", label: "Edge", browser: "edge" },
  { img: "/opera.webp", label: "Opera", browser: "opera" },
];

const PopUp: React.FC<PopProps> = ({ sliderValue, formatTime }) => {
  const [sortedButtons, setSortedButtons] = useState<Browser[]>([]);

  const finalDuration = sliderValue[1] - sliderValue[0];
  const formattedDuration = formatTime(finalDuration);

  useEffect(() => {
    const result = browser();
    let browserName = result.name;

    if (/OPR\//.test(navigator.userAgent)) {
      browserName = "opera";
    } else if (/Edg\//.test(navigator.userAgent)) {
      browserName = "edge";
    }

    const detectedBrowser = BROWSER_BUTTONS.find(
      (b) => b.browser === browserName
    );
    const otherBrowsers = BROWSER_BUTTONS.filter((b) => b !== detectedBrowser);
    const sorted = detectedBrowser
      ? [detectedBrowser, ...otherBrowsers]
      : BROWSER_BUTTONS;

    setSortedButtons(sorted);
  }, []);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='relative rounded-[10px] bg-black dark:bg-white text-white dark:text-black'>
          <VideoIcon className='mr-2' />
          Download
          <Badge
            variant='secondary'
            className='absolute left-[50%] text-xs mt-20 translate-x-[-50%] pointer-events-none dark:bg-[#444] dark:text-white'
          >
            {formattedDuration}
          </Badge>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='mb-3 overflow-y-auto max-h-[calc(100vh-4rem)] '>
        <div className='flex justify-between items-center gap-10 mb-6 flex-col sm:flex-row mt-3'>
          <Image src='/img.webp' alt='Preview' width={165} height={165} />
          <div>
            <AlertDialogHeader>
              <AlertDialogTitle className='text-left my-0'>
                Browser Extension
              </AlertDialogTitle>
              <AlertDialogDescription>
                <div className='flex items-center gap-1 cursor-pointer'>
                  <Badge
                    variant='secondary'
                    className='pointer-events-none dark:bg-[#444] dark:text-white'
                  >
                    Chrome Extension
                  </Badge>
                  <Badge
                    variant='secondary'
                    className='pointer-events-none dark:bg-[#444] dark:text-white'
                  >
                    Free & Unlimited
                  </Badge>
                </div>
              </AlertDialogDescription>
              <p className='mb-2'>
                This component is built using shadcn/ui&apos;s dialog and drawer
                component, which is built on top of Vaul.
              </p>
              <p>
                It shows a dialog modal for desktop view and a bottom drawer for
                mobile view.
              </p>
            </AlertDialogHeader>
          </div>
        </div>
        <div className='divider div-transparent mb-4 '></div>
        <AlertDialogFooter className='gap-2 sm:gap-0'>
          {sortedButtons.map((browser, index) => (
            <AlertDialogAction
              key={browser.browser}
              className='border-border rounded-[10px] bg-transparent border shadow-none py-2 px-6 h-[40px] flex items-center justify-center hover:bg-foreground'
            >
              <Image
                src={browser.img || ""}
                alt={browser.label}
                width={22}
                height={22}
              />
              <span className=' text-[15px]'>
                {index === 0 ? `Add to ${browser.label}` : browser.label}
              </span>
            </AlertDialogAction>
          ))}
        </AlertDialogFooter>
        <p className='mt-2 text-xs'>
          Foxified extension is needed to make YouTube Video Downloader work
          properly.
        </p>
        <AlertDialogCancel className='rounded-full border border-current p-1 absolute right-3 top-3 hover:bg-foreground'>
          <X />
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PopUp;
