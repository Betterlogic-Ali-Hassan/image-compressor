"use client";
import React, { useState } from "react";
import Card from "./Card";
import { Button } from "../ui/button";
import { Loader2, X } from "lucide-react";
import MediaResultBox from "./MediaResultBox";
import { cn } from "@/lib/utils";

const LinkInputSection = () => {
  const [loader, setLoader] = useState(false);
  const [mediaBoxShow, setMediaBoxShow] = useState(false);
  const [url, setUrl] = useState("");
  const handlePasteLink = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigator.clipboard.readText().then((text) => {
        setUrl(text);
      });
      setMediaBoxShow(true);
    }, 2000);
  };
  const handleClearLink = () => {
    setUrl("");
  };
  return (
    <Card className={cn(mediaBoxShow && "pb-1")}>
      <div className='flex items-center gap-3 relative'>
        <input
          type='text'
          name='url'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          id='url'
          placeholder='Enter URL'
          className='text-sm bg-foreground p-5 border border-border  rounded-[8px] w-full h-full max-h-[62px]'
        />
        {url !== "" && (
          <span
            className='absolute right-1/4 group  bg-foreground cursor-pointer'
            onClick={handleClearLink}
          >
            <X className='opacity-50 group-hover:opacity-100' />
          </span>
        )}

        <Button
          className='bg-black dark:bg-white text-white dark:text-black flex items-center gap-2 h-[62px] rounded-[8px] hover:bg-black/90 dark:bg-white/90  max-w-[150px] w-full'
          onClick={handlePasteLink}
        >
          {loader && <Loader2 size={20} className='animate-spin' />}
          Paste Link
        </Button>
      </div>
      <p className='text-sm mt-2'>
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
        className={cn(
          "transition-all duration-1000 ease-in-out overflow-hidden",
          mediaBoxShow ? "max-h-[550px]" : "max-h-0"
        )}
      >
        <MediaResultBox />
      </div>
    </Card>
  );
};

export default LinkInputSection;
