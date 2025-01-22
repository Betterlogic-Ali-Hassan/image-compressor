"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { Loader2 } from "lucide-react";
import Card from "./Card";
import ImageSizeSelector from "./ImageSizeSelector";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageSize, setImageSize] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setIsLoading(true);
    const file = acceptedFiles[0];

    const fileSizeInKB = file.size / 1024;
    const fileSize =
      fileSizeInKB > 1024
        ? `${(fileSizeInKB / 1024).toFixed(2)} MB`
        : `${fileSizeInKB.toFixed(2)} KB`;
    setImageSize(fileSize);
    const reader = new FileReader();

    reader.onload = (event) => {
      setImage(event.target?.result as string);
      setIsLoading(false);
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
    },
    multiple: false,
  });

  return (
    <Card className='px-[15px] pt-[15px] pb-5 mt-[25px]'>
      <div
        {...getRootProps()}
        className={cn(
          "w-full p-[40px] flex items-center justify-center cursor-pointer h-[200px] bg-[#00BC7E10] text-center border-2 border-dashed border-[#00BC7E10] rounded-[20px] overflow-hidden transition",
          image && "p-[5px]"
        )}
      >
        <input {...getInputProps()} />
        {isLoading ? (
          <Loader2 className='w-10 h-10 text-primary animate-spin' />
        ) : image ? (
          <div className='relative w-full h-full'>
            <Image
              src={image || "/placeholder.svg"}
              alt='Uploaded image'
              layout='fill'
              objectFit='cover'
              className='rounded-[20px]'
            />
            <label className='bg-[#000000a6] rounded-tl-[13px] rounded-br-[13px] text-white font-bold text-sm absolute bottom-0 right-0 py-[5px] px-[10px]'>
              {imageSize}
            </label>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <svg
              stroke='#b8e0c1'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              height='60px'
              width='60px'
              className='opacity-50'
              xmlns='http://www.w3.org/2000/svg'
            >
              <polyline points='16 16 12 12 8 16'></polyline>
              <line x1='12' y1='12' x2='12' y2='21'></line>
              <path d='M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3'></path>
              <polyline points='16 16 12 12 8 16'></polyline>
            </svg>
            <p className='mt-[15px] text-text text-[15px] font-bold'>
              Drop your images here, or <strong>browse</strong>
            </p>
            <p className='text-[#00000080] dark:text-[#ffffff80] text-[11px] mt-[5px]'>
              Supports: JPG, JPEG, PNG, WEBP
            </p>
          </div>
        )}
      </div>
      <div className='flex items-center sm:justify-between max-sm:flex-col pt-[15px] gap-[30px]'>
        <ImageSizeSelector />
        <Button className='sm:max-w-[200px] w-full bg-[#00bc7d1b] text-primary shadow-none rounded-[8px] py-[10px] transition-all duration-300 px-5 hover:brightness-[0.8] h-[40px]'>
          Compress
        </Button>
      </div>
    </Card>
  );
}
