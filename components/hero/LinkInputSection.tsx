"use client";
import React, { useState } from "react";
import Card from "./Card";
import { Button } from "../ui/button";
import { Loader2, X } from "lucide-react";

const LinkInputSection = () => {
  const [loader, setLoader] = useState(false);
  const [url, setUrl] = useState("");
  const handlePasteLink = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigator.clipboard.readText().then((text) => {
        setUrl(text);
      });
    }, 2000);
  };
  const handleClearLink = () => {
    setUrl("");
  };
  return (
    <Card>
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
            className='absolute right-1/4 opacity-50 hover:opacity-100 cursor-pointer'
            onClick={handleClearLink}
          >
            <X />
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
    </Card>
  );
};

export default LinkInputSection;
