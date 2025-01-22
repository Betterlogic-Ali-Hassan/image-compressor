import React from "react";
import Link from "next/link";

const TopFooter = () => {
  return (
    <section className=' mt-[100px]   '>
      <div className='max-w-[1100px] mx-auto px-[2rem]  w-full relative overflow-hidden'>
        <div className='flex items-center justify-center rounded-2xl border border-border flex-col bg-foreground  px-8 py-20 text-center md:p-20 '>
          <div className='mx-auto max-w-screen-md '>
            <h2 className=' mb-4 text-balance text-3xl font-semibold md:text-5xl '>
              Double your Productivity, Today
            </h2>
            <p className='text-[#71717a] md:text-lg'>
              With Writekit, you can easily access a continuous flow of ideas.
              Our AI tools make writing feel natural, helping you avoid the
              empty page and inspire fresh thoughts.
            </p>
          </div>
          <div className='mt-11 flex justify-center relative z-30'>
            <Link
              className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 h-11 rounded-[10px] gap-2 px-8 '
              href='#'
            >
              Get Productive Today
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='2'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-4 w-4 shrink-0 mt-0.5'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M5 12h14'></path>
                <path d='m12 5 7 7-7 7'></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFooter;
