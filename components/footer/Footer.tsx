import React from "react";
import FooterLegalSection from "./FooterLegalSection";
import QuickLinks from "./QuickLinks";
import Link from "next/link";
import Logo from "../header/Logo";

const Footer = () => {
  return (
    <footer className='border-t border-border mt-[100px] pt-16 pb-8'>
      <div className='container flex  gap-[30px] justify-between  max-[845px]:flex-wrap max-sm:flex-col'>
        <QuickLinks />
        <FooterLegalSection />
        <QuickLinks />
        <div className='w-[20%] max-[845px]:w-custom'>
          <h6 className='mb-[5px] text-[15px] font-bold ml-2'>Our Sites</h6>
          <ul className='flex flex-col items-start'>
            <li className='p-[5px] font-medium whitespace-nowrap text-sm mx-[5px]'>
              <Link href='#' className='hover:underline text-gray-color'>
                YouTube Thumbnail Downloader
              </Link>
            </li>
            <li className='p-[5px] font-medium whitespace-nowrap text-sm mx-[5px]'>
              <Link href='#' className='hover:underline text-gray-color'>
                YouTube Video Downloader
              </Link>
            </li>
            <li className='p-[5px] font-medium whitespace-nowrap text-sm mx-[5px]'>
              <Link href='#' className='hover:underline text-gray-color'>
                YouTube Audio Downloader
              </Link>
            </li>
            <li className='p-[5px] font-medium whitespace-nowrap text-sm mx-[5px]'>
              <Link href='#' className='hover:underline text-gray-color'>
                AutoRefresh
              </Link>
            </li>
            <li className='p-[5px] font-medium whitespace-nowrap text-sm mx-[5px]'>
              <Link href='#' className='hover:underline text-gray-color'>
                FileCr
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='container !pb-0'>
        <div className='pt-8 border-t border-border'>
          <div className='flex items-center justify-between'>
            <Logo />
            <ul className='flex items-center gap-8 flex-wrap'>
              {[
                "Cookies Policy",
                "EULA",
                "Terms and Conditions",
                "About",
                "Contact Us",
              ].map((item, i) => (
                <li key={i}>
                  <Link href='#' className='font-medium hover:underline'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <p className='text-sm text-[#888]'>© SaveVideo. 2018-2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
