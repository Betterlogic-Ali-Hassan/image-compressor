import React from "react";
import SiteInfo from "./SiteInfo";
import FooterLegalSection from "./FooterLegalSection";
import QuickLinks from "./QuickLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='border-t border-border mt-[100px] pt-16 pb-8'>
      <div className='footer-container flex  gap-[30px] justify-between  max-[845px]:flex-wrap max-sm:flex-col'>
        <SiteInfo />
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
          </ul>
        </div>
      </div>
      <div className='footer-container !pb-0'>
        <div className='pt-8 border-t border-border'>
          <div className='text'>
            <p>
              © 2024
              <Link href='#' target='_blank' className='text-primary ml-1'>
                Dragon Horse Technologies
              </Link>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
