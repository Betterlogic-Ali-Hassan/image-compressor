import Link from "next/link";
import React from "react";

const QuickLinks = () => {
  return (
    <div className='w-[20%] max-[845px]:w-custom'>
      <h6 className='mb-[5px] text-[15px] font-bold ml-2'>Quick Links</h6>
      <ul className='flex flex-col items-start'>
        <li className='p-[5px] font-medium whitespace-nowrap text-sm mx-[5px]'>
          <Link href='#' className='hover:underline text-gray-color'>
            Contact Us
          </Link>
        </li>
        <li className='p-[5px] font-medium whitespace-nowrap text-sm mx-[5px]'>
          <Link href='#' className='hover:underline text-gray-color'>
            Image Compressor
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
