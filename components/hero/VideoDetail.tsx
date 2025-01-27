import Image from "next/image";
import React from "react";

const VideoDetail = () => {
  return (
    <div className='flex items-center gap-2 mt-6'>
      <Image
        src='/test.jpg'
        alt='Video-Thumbnail'
        height={60}
        width={110}
        className='rounded-[4px]'
      />
      <div className='flex flex-col'>
        <h4 className='text-lg font-medium text-black dark:text-white'>
          Aastan Hai Yeh Kis Shah-E-Zeshan Ka
        </h4>
        <p className='text-sm text-[#888]'>Duration 00:07:58</p>
      </div>
    </div>
  );
};

export default VideoDetail;
