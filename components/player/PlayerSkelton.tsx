import React from "react";

const PlayerSkelton = () => {
  return (
    <div className='h-full w-full max-w-[680px] flex flex-col items-center justify-center mx-auto'>
      <div className='h-[400px]  w-full bg-foreground animate-pulse'></div>
      <div className='h-[8px]  w-full bg-foreground animate-pulse mt-6  rounded-[10px]'></div>
      <div className='flex items-center justify-center gap-4 mt-6'>
        <div className='h-[40px] w-[48px]  bg-foreground animate-pulse rounded-[10px]'></div>
        <div className='h-[40px] w-[48px]  bg-foreground animate-pulse rounded-[10px]'></div>
        <div className='h-[40px] w-[48px]  bg-foreground animate-pulse rounded-[10px]'></div>
      </div>
      <div className='flex items-center justify-between w-full mt-6 mb-[50px]'>
        <div className='flex items-center gap-4 '>
          <div className='h-[40px] w-[208px]  bg-foreground animate-pulse mt-6 rounded-[10px]'></div>
          <div className='h-[40px] w-[208px]  bg-foreground animate-pulse mt-6 rounded-[10px]'></div>
        </div>
        <div className='flex items-center gap-6'>
          <div className='h-[36px] w-[136px]  bg-foreground animate-pulse mt-6 rounded-[10px]'></div>
          <div className='h-[40px] w-[48px]  bg-foreground animate-pulse mt-6 rounded-[10px]'></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSkelton;
