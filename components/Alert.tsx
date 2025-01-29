"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  type?: string;
}

const Alert = ({ icon, title, type }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full p-4 mt-3 flex items-center justify-between rounded-xl border border-border ",
        type === "success" &&
          "bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200",
        type === "error" &&
          "bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-200",
        type === "info" &&
          "bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200",
        type === "warning" &&
          "bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200"
      )}
      role='alert'
    >
      <div className='flex items-start'>
        <div className='flex-shrink-0'>{icon}</div>
        <div className='ml-3'>
          <h3 className='text-sm font-medium my-0 capitalize'>{title}</h3>
          <div className='mt-2 text-sm'>This is {title} Description</div>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)} // Cross button click par alert hide
        className='flex-shrink-0 ml-4 rounded-full p-1 hover:bg-border hover:bg-opacity-10 focus:outline-none'
      >
        <span className='sr-only'>Close</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-x'
        >
          <path d='M18 6 6 18'></path>
          <path d='m6 6 12 12'></path>
        </svg>
      </button>
    </div>
  );
};

export default Alert;
