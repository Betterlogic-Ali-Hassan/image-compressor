import Image from "next/image";
import React from "react";

const VideoDetail = () => {
  return (
    <div className='flex items-start gap-2 mt-6   p-4 rounded-t-[0.5rem] bg-[#00bc7e14]'>
      <Image
        src='/test.jpg'
        alt='Video-Thumbnail'
        height={48}
        width={80}
        className='rounded-[4px]'
      />
      <div className='flex flex-col'>
        <h4 className='sm:text-lg text-base font-medium text-black dark:text-white'>
          Aastan Hai Yeh Kis Shah-E-Zeshan Ka
        </h4>
        <p className='text-sm text-[#888]'>Duration 00:07:58</p>
      </div>
    </div>
  );
};

export default VideoDetail;
