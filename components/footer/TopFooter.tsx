import React from "react";
import SquareGridBg from "./SquareGridBg";
import Link from "next/link";

const TopFooter = () => {
  return (
    <section className='relative mt-[60px] px-5 py-16 md:py-28 bg-zinc-950 overflow-hidden'>
      <div></div>
      <div className='container'>
        <div className='flex flex-col items-center text-center mx-auto max-w-6xl relative z-20'>
          <div>
            <h2 className=' text-4xl font-semibold tracking-tight transition-colors lg:text-5xl text-white items-center text-center '>
              Double your Productivity, Today
            </h2>
            <p className='mt-3 block text-base leading-relaxed transition-colors md:text-lg md:leading-relaxed lg:mt-5 lg:text-xl lg:leading-relaxed text-zinc-400 items-center text-center mx-auto max-w-2xl'>
              With Writekit, you can easily access a continuous flow of ideas.
              Our AI tools make writing feel natural, helping you avoid the
              empty page and inspire fresh thoughts.
            </p>
          </div>
          <div className='mt-6 flex justify-center'>
            <Link
              className='inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap border no-underline transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus:border-zinc-500 dark:border-zinc-100 dark:bg-zinc-100 dark:text-black dark:hover:border-white h-10 px-5 text-base rounded-full font-medium border-white bg-white dark:hover:bg-[#dadada] hover:bg-[#dadada]  '
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
                className='h-4 w-4 shrink-0'
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
        <SquareGridBg />
      </div>
    </section>
  );
};

export default TopFooter;
