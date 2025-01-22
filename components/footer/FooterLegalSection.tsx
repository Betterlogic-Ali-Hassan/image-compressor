import Link from "next/link";
import React from "react";

const FooterLegalSection = () => {
  return (
    <div className='w-[20%] max-[845px]:w-custom'>
      <h6 className='mb-[5px] text-[15px] font-bold ml-2'>Legal</h6>
      <ul className='flex flex-col items-start'>
        <li className='p-[5px] font-medium whitespace-nowrap text-sm mx-[5px]'>
          <Link href='#' className='hover:underline text-gray-color'>
            Privacy Policy
          </Link>
        </li>
        <li className='p-[5px] font-medium whitespace-nowrap text-sm mx-[5px]'>
          <Link href='#' className='hover:underline text-gray-color'>
            Terms of Service
          </Link>
        </li>
        <li className='p-[5px] font-medium whitespace-nowrap text-sm mx-[5px]'>
          <Link href='#' className='hover:underline text-gray-color'>
            Disclaimer
          </Link>
        </li>
        <li className='p-[5px] font-medium whitespace-nowrap text-sm mx-[5px]'>
          <Link href='#' className='hover:underline text-gray-color'>
            Cookie Policy
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLegalSection;
