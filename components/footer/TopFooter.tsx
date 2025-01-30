import React from "react";
import AddtoChromeBtn from "../header/AddtoChromeBtn";

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
          <div className='h-[56px]'>
            <div className='mt-11 flex justify-center relative z-30 '>
              <AddtoChromeBtn className='!rounded-[10px]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFooter;
