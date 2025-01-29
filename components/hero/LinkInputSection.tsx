"use client";

import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { Button } from "../ui/button";
import { Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ResultQualityRows from "./ResultQualityRows";
import VideoDetail from "./VideoDetail";

const LinkInputSection = () => {
  const [loader, setLoader] = useState(false);
  const [mediaBoxShow, setMediaBoxShow] = useState(false);
  const [error, setError] = useState("");
  const isValidUrl = (url: string) => {
    const urlPattern = /^(https?:\/\/)?(www\.)?([\da-z.-]+\.[a-z.]{2,6})\/?.*$/;

    return urlPattern.test(url);
  };

  const [url, setUrl] = useState("");
  const mediaBoxRef = useRef<HTMLDivElement>(null);

  const handlePasteLink = () => {
    navigator.clipboard.readText().then((text) => {
      setUrl(text);
    });
  };
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputUrl = e.target.value;
    setUrl(inputUrl);

    if (inputUrl && !isValidUrl(inputUrl)) {
      setError("URL is not supported");
    } else {
      setError("");
    }
  };
  const handleClearLink = () => {
    setUrl("");
    setLoader(false);
    setMediaBoxShow(false);
  };

  useEffect(() => {
    if (url !== "" && error === "") {
      setLoader(true);
      const timer = setTimeout(() => {
        setLoader(false);
        setMediaBoxShow(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setLoader(false);
    }
  }, [url]);

  useEffect(() => {
    if (mediaBoxShow && mediaBoxRef.current) {
      const mediaBoxHeight = mediaBoxRef.current.scrollHeight - 120;
      window.scrollBy({ top: mediaBoxHeight, behavior: "smooth" });
    }
  }, [mediaBoxShow]);

  return (
    <Card className={cn("max-[650px]:p-5", mediaBoxShow && "pb-1")}>
      <div className='flex  gap-3 relative max-sm:flex-col'>
        <div className='w-full '>
          <div className=' bg-foreground p-5 border border-border rounded-[8px] w-full h-full max-h-[62px] flex items-center justify-between'>
            <input
              type='text'
              name='url'
              value={url}
              onChange={handleUrlChange}
              id='url'
              placeholder='Enter URL'
              className=' bg-transparent border-none outline-none w-full text-base  h-[62px]'
            />
            {url !== "" && (
              <span
                className=' group bg-foreground rounded-full cursor-pointer'
                onClick={handleClearLink}
              >
                <X className='opacity-50 group-hover:opacity-100' />
              </span>
            )}
          </div>
          {error && url !== "" && (
            <p className='text-red-500 font-medium text-sm mt-2'>{error}</p>
          )}
        </div>

        <Button
          className='bg-black dark:bg-white text-white dark:text-black flex items-center gap-2 h-[62px] rounded-[8px] hover:bg-black/90 dark:hover:bg-white/90 sm:max-w-[150px] w-full'
          onClick={handlePasteLink}
        >
          {loader && <Loader2 size={20} className='animate-spin' />}
          {loader ? "Processing..." : "Paste Link"}
        </Button>
      </div>

      <p className={cn("text-sm mt-2", mediaBoxShow && "hidden")}>
        By using our service you accept our{" "}
        <a href='#' className='underline text-primary '>
          Terms of Service
        </a>{" "}
        and{" "}
        <a href='/privacy' className='underline text-primary '>
          Privacy Policy
        </a>{" "}
      </p>
      <div
        ref={mediaBoxRef}
        className={cn(
          "transition-all duration-1000 ease-in-out overflow-hidden",
          mediaBoxShow
            ? " max-h-[800px] max-[650px]:max-h-[900px] pb-6"
            : "max-h-0"
        )}
      >
        <VideoDetail />
        <ResultQualityRows />
      </div>
    </Card>
  );
};

export default LinkInputSection;
