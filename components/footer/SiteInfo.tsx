import React from "react";
import Logo from "../header/Logo";

const SiteInfo = () => {
  return (
    <div className='min-[845px]:w-[40%] w-full max-[845px]:pl-2 pr-[30px]'>
      <Logo className='text-[19px]' />
      <p className='text-[13px] mt-4 mb-[10px]'>
        Reduce File Size from MB to kB Instantly – Keep Your Images Sharp and
        Efficient with our website.
      </p>
    </div>
  );
};

export default SiteInfo;
